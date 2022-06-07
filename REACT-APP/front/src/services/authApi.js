
import { URL_LOGIN } from "../config";
import axios from "axios";


function authenticate(credentials){
    return axios.get(URL_LOGIN, credentials)
    .then(res => console.log(res))
}

export default{
    authenticate
}