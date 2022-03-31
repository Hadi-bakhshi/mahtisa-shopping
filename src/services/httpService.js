import axios from "axios";

axios.defaults.baseURL= "https://mahtisa-shopping.iran.liara.run/api";


const http ={
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}

export default http;