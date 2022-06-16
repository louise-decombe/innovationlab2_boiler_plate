
import { URL_LOGIN } from "../config/config";
import axios from "axios";
import jwrDecode from "jwt-decode"

function authenticate(credentials){
    return axios.get(URL_LOGIN, credentials)
    .then(res => console.log(res))
    // .then(data => {
    //     window.localStorage.setItem("authToken", data.jwt)
    //     window.localStorage.setItem("authToken", data.user.username)
    //     axios.defaults.headers["Authorization"] = "Bearer " + data.jwt
    //     console.log(jwtDecode(data.jwt))

    // })
}

function isAuthenticated(){
    const token = window.localStorage.getItem("authToken")

    if(token){
        const {exp: expiration} = jwrDecode(token)
    }

}

export default{
    authenticate
}