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

interface User{
    name:string;
    email:string;
    created_at:Date;
    updated_at: Date;
    email_verified_at:Date|null;
    two_factor_confirmed_at:Date |null;
}

export var user=ref<User|null>(null);


export const useAuth=()=>{
    async function login(payload:LoginPayload){
        await axios.post("/login", payload)
        getUser()
        useRouter().push("/me")
    }

    async function logout(){
        await axios.post("/logout")
        user.value=null;
        useRouter().replace("/")
    }

    async function register(payload: RegisterPayload) {
        const res = await axios.post("/register", payload);
        await axios.post("/login", payload) //TODO: fix this :)
        useRouter().push("/me")
    }
    async function getUser(): Promise<User|null>{
        if(user.value) return user
        try{
            const res = await axios.get("/user");
            console.log(res)
            user.value = res.data;
            return {
                ...user,
                created_at: new Date(user.created_at),
                updated_at: new Date(user.updated_at),
                email_verified_at: user.email_verified_at
                    ? new Date(user.email_verified_at)
                    : null,
                two_factor_confirmed_at: user.two_factor_confirmed_at
                    ? new Date(user.two_factor_confirmed_at)
                    : null
            }
    
        }catch (error){
            return null
        }
    }

    async function initUser(){
        user.value=getUser()
    }

    

    return{
        login,
        logout,
        register,
        getUser,
        initUser,
        user
    }
}


