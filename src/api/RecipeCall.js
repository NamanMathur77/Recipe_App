import axios from 'axios';

export default axios.create({
    baseURL: "https://api.edamam.com/search",
    params: {
        app_id : 'ecada51f',
        app_key: '1ce9a28096fa8e8e96c8c291562465d6'
    }
})