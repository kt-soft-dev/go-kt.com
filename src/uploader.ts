import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios';
import * as openpgp from 'openpgp';
import { config } from 'src/config';

export interface CloudFile {
  id: string;
  name: string;
  size: number;
  url: string;
}

export interface Uploader {
  upload(
    file: File,
    encryptPassword?: string,
    progress?: (percent: number) => void
  ): Promise<CloudFile>;

  delete(file: CloudFile): Promise<void>;
}

export const uploader: Uploader = {
  async upload(
    file: File,
    encryptPassword?: string,
    progress?: (percent: number) => void
  ): Promise<CloudFile> {
    if (encryptPassword?.length) {
      const blob = await file.arrayBuffer();
      const message = await openpgp.createMessage({ binary: new Uint8Array(blob) });
      const encrypted = await openpgp.encrypt({
        message,
        format: 'binary',
        passwords: [encryptPassword],
        config: { preferredCompressionAlgorithm: openpgp.enums.compression.zlib }
      });

      file = new File([new Blob([encrypted as BlobPart])], file.name);
    }

    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('anon', '1');
    formData.append('crypto', encryptPassword?.length ? '1' : '0');

    // noinspection JSUnusedGlobalSymbols
    const uploadConfig: AxiosRequestConfig = {
      method: 'post',
      url: config.uploadURL,
      data: formData,
      timeout: 60 * 60 * 3,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (!progressEvent.total) {
          return;
        }

        const percentCompleted = Math.round((progressEvent.loaded * 100) / Number(progressEvent.total));
        if (progress) {
          progress(percentCompleted);
        }
      }
    };

    const uploadQuery = await axios(uploadConfig);
    if (!uploadQuery?.data?.result) {
      throw new Error('Upload failed');
    }

    const result = uploadQuery?.data?.result as Record<string, unknown>;

    return {
      id: result.file_id as string,
      name: file.name,
      size: file.size,
      url: config.cloudURL + config.viewURI + result.file_id
    };
  },
  async delete(file: CloudFile): Promise<void> {
    // TODO
    console.log(file);
  }
};
