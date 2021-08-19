import axios from 'axios'
let images=[]
axios.get(`http://localhost:8080/mcq/6111987e577ed827f026487b`)
.then(res=>{
  console.log(res)
  res.data.choices.map((post,id)=>(
    images.push({id,altText:"images",url: `http://localhost:8080/file/download/${post.text}`,count:0})
  ))
  console.log(images)
})
// const images = [
//   {
//     id: 0,
//     url:
//       "http://localhost:8080/file/download/610fbed266e210524c8325a3",
//     count: 0
//   }
  
// ];
console.log(images)
export default images;
