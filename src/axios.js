import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tut-whatsapp-clone-mern.herokuapp.com/',
    withCredentials: true,
});

export default instance;
