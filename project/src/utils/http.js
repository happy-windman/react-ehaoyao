import axios from 'axios'

export const get = ({
    method='get',
    url,
    data,
    params
})=>{
    return axios({
        method,
        url,
        data,
        params
    }).then((result)=>{
        return result.data
    })
}

export const post = ({url,data}) =>{
    console.log(data);
    return axios.post(url,data)
    .then(res=>{
        return res.data
    })
}