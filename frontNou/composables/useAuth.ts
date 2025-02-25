import axios from "axios"
interface LoginPayload{
    email:string;
    password:string
}

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

export const useAuth=()=>{
    async function login(payload:LoginPayload){
        await axios.post("/login", payload)
        useRouter().push("/me")
    }

    async function logout(){
        await axios.post("/logout")
        useRouter().replace("/")
    }

    async function register(payload: RegisterPayload) {
        const res = await axios.post("/register", payload);
        await axios.post("/login", payload)
        useRouter().push("/me")
        console.log(res);
      }

    return{
        login,
        logout,
        register
    }
}