export interface CloudFile {
  id: string;
  name: string;
  size: number;
  url: string;
  // TODO
}

export interface Uploader {
  upload(
    file: File,
    encryptPassword?: string,
    progress?: (percent: number) => void
  ): Promise<CloudFile>;

  delete(file: CloudFile): Promise<void>;

  // TODO
}

export const uploader: Uploader = {
  async upload(
    file: File,
    encryptPassword?: string,
    progress?: (percent: number) => void
  ): Promise<CloudFile> {
    // TODO
    let delay = 100;
    const maxPercent = 100;
    for (let percent = 0; percent < maxPercent; percent++) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (progress) progress(percent);
      delay -= 0.8;
    }
    return {
      id: '123',
      name: file.name,
      size: file.size,
      url: 'https://example.com',
    };
  },
  async delete(file: CloudFile): Promise<void> {
    // TODO
  },
};
