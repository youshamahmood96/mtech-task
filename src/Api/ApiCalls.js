import axios from 'axios'
export const getItems = async () => {
    const res = await axios({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
    })
    return res
}