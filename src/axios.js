import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tut-whatsapp-clone-mern.herokuapp.com/',
    headers: {
        'Referer': window.location.origin
    }
});

export default instance;
