import Axios from "axios";

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 36c58bf0e1c8303fa773c53ad577e5a424e4517e292fc7c394afc3ad76643cd7'
    }
})