import {navigate} from "@reach/router";
import axios from "./axios";

export const logUser = async (data) => {
    try{
        const response = await axios.post('/client/login', data);
        if (response.status === 200) {
            localStorage.setItem('id', response.data.numeroClient);
            navigate('/').then();
        }
    } catch(e){
        console.error(e);
    }
};

export const getUser = async (id) => {
    try{
        const response = await axios.get(`/client/find/${id}`);
        localStorage.setItem('userData', JSON.stringify(response.data.accounts))
    } catch(e){
        console.error(e);
    }
};

export const logout = async () => {
    localStorage.removeItem("id");
    localStorage.removeItem("userData");
    navigate('/login').then()
};
