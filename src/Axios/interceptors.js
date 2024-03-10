import { axiosInstance } from "./axiosInstance";

export const requestHandler = (request) => {
  /*add whatever you want to be executed before request reach 
      the server*/
  console.log("here is the request interceptor call");
  console.log(`Bearer ${localStorage.getItem("token")}` );
  if (localStorage.getItem("token")) {
    request.headers["Authorization"] = 
    `Bearer ${localStorage.getItem("token")}` 
   }
  /*must be returned otherwise, will not work properly*/
  return request;
};

export const successHandler = (response) => {
  /*add whatever you want to be executed once the success 
       response is  returned from server and before reaching to 
       client side */
  console.log("here is the success response interceptor call");

  /*must be returned otherwise, will not work properly*/
  return response;
};

export const errorHandler = (error) => {
  /*add whatever you want to be executed once the success 
       response is  returned from server and before reaching to 
       client side */
  console.log("here is the error response interceptor  call");

  /*must be returned otherwise, will not work properly*/
  return Promise.reject({ ...error });
};

// Handle request process
axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
