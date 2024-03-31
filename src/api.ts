export const config = {
    VUE_APP_API_HOST: process.env.VUE_APP_API_HOST
                      ? process.env.VUE_APP_API_HOST
                      : 'dinglebob.go-kt.com',
    VUE_APP_API_URL: process.env.VUE_APP_API_URL
                     ? process.env.VUE_APP_API_URL
                     : 'https://dinglebob.go-kt.com/json-rpc',
};
