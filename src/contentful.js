import {createClient} from 'contentful';
export default createClient({
    space: process.env.REACT_APP_API_SPACE,

    // 
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
    //'BKo3ZixUrL-nap8nBmIBK4RVf6NDR60dOXqSmszr6H4'
})