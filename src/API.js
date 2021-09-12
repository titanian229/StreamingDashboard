import axios from "axios";

// axios.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem('accessToken');
//         if (accessToken) {
//             config.headers['authorization'] = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         const originalRequest = error.config;
//         let refreshToken = localStorage.getItem('refreshToken');
//         if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             return axios.post(`/auth/refresh_token`, { refreshToken: refreshToken }).then((res) => {
//                 if (res.status === 200) {
//                     localStorage.setItem('accessToken', res.data.accessToken);
//                     console.log('Access token refreshed!');
//                     return axios(originalRequest);
//                 }
//             });
//         }
//         return Promise.reject(error);
//     }
// );

const getRequest = async (url) => {
  return axios
    .get(url, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);

      if (err.response) return err.response.data;
    });
};

const putRequest = async (url, body) => {
  return axios
    .put(url, body, {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        // authorization: localStorage.accessToken ? `Bearer ${localStorage.accessToken}` : '',
      },
      // body: JSON.stringify(body),
    })
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);

      if (err.response) return err.response.data;
    });
};

const postRequest = async (url, body) => {
  return axios
    .post(url, body, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        // authorization: localStorage.accessToken ? `Bearer ${localStorage.accessToken}` : '',
      },
      // body: JSON.stringify(body),
    })
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);

      if (err.response) return err.response.data;
    });
};

const deleteRequest = async (url) => {
  return axios
    .delete(url, {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        // authorization: localStorage.accessToken ? `Bearer ${localStorage.accessToken}` : '',
      },
    })
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);

      if (err.response) return err.response.data;
    });
};

export const API = {
  post: async (url, body) => {
    return axios
      .post(url, body, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          // authorization: localStorage.accessToken ? `Bearer ${localStorage.accessToken}` : '',
        },
        // body: JSON.stringify(body),
      })
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);

        if (err.response) return err.response.data;
      });
  },
  put: async (url, body) => putRequest(url, body),
  get: async (url) => getRequest(url),
};
