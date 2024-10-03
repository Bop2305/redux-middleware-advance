import axios from "axios";

const proxyUrl = 'https://api.allorigins.win/get?url=';
const targetUrl = 'https://dummyjson.com';
const baseUrl = 'https://jsonplaceholder.typicode.com'

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

// axiosClient.interceptors.request.use(
//   config => {
//     /* ---- 'Accept': 'application/json',
//     'Authorization': this.token, ---- */
//     config.headers['Accept'] = 'application/json'

//     let token = document.cookie.split(';').find(indice => {
//       return indice.includes('token=')
//     })

//     token = token?.split('=')[1]
//     token = 'Bearer ' + token

//     config.headers.Authorization = token
//     console.log('Intercepting the request before sending it', config)
//     return config // nxt jwt.php
//   },
//   error => {
//     console.log("Request error: ", error)
//     return Promise.reject(error)
// })

// axiosClient.interceptors.response.use(
//   response => {
//     console.log('Intercepting the response before sending it', response)
//     return response
//   },
//   error => {
//     console.log("Answer Error: ", error.response)

//     if (error.response.status == 401 && error.response.data.message == 'Token has expired') {
//       console.log('Make a new request for the refresh route!')

//       axios.post('http://localhost:8000/api/refresh')
//         .then(response => {
//           console.log('Refresh success! ')
//           console.log(response)
//           /*
//               In the first refresh, will be sucess but if I don't save the 
//               token in cookies, in the second refresh I will have the 500 
//               error : 'The token has been blacklisted'
//           */
//           document.cookie = 'token=' + response.data.token
//           console.log('Updated token : ', response.data)
//           window.location.reload()
//         })
//     }
//     return Promise.reject(error)
// })

export default axiosClient;