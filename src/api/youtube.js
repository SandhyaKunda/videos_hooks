import axios from "axios";

const KEY="AIzaSyCSo6u1JRzhrGcb5Wq9gYI71Tp9Yvi-kpc";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY, 
    }
})