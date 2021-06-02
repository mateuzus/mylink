import axios from 'axios'

//base url: 'https://api-ssl.bitly.com/v4/shorten'

export const key = 'c3d99aed158042d80c286e68713ecf79fe0bf6e5'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api


