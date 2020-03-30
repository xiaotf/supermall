// export default 导出一个
// 导出
// export function request(config,success,failure){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   // 发送真正的网络请求
//   instance(config)
//   .then(res =>{
//     Console.log(res);
//     success(res)
//   })
//   .create(err=>{
//     console.log(err);
//     failure(err)
//   })

// }


// export function request(config){
//   return new Promise((resolve,reject)=>{
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       // timeout:5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//     .then(res =>{
//       resolve(res)
//     })
//     .catch(err=>{
//      reject(err)
//     })
//   })

// }
import axios from 'axios'
export function request(config){
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      // timeout:5000
    })
    // 发送真正的网络请求
    return instance(config)

}