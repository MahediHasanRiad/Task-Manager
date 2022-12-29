
class SessionHelper{
    setToken(Token){
       return localStorage.setItem("Token", Token)
    }

    getToken(){
       return localStorage.getItem("Token")
    }

    setUserDetails(details){
       return localStorage.setItem("UserDetails", JSON.stringify(details))
    }

    getUserDetails(){
       return JSON.parse(localStorage.getItem("UserDetails"))
    }
}

export const {setToken, getToken, setUserDetails, getUserDetails} = new SessionHelper()