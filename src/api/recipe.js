import axios from 'axios'

const recipe = axios.create({
    baseURL: `https://api.edamam.com/api/recipes/`    
});

export default recipe