<script setup lang="ts">
definePageMeta({
  layout: "centered",
});

interface RegisterPayload {
  email: string,
  password: string,
}

const form=ref({
  email:"",password:""
})
/*
async function register(payload: RegisterPayload){
  const res = await axios.post("/api/login", payload)
  console.log(res)
}
*/

</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label>
        <div>Email</div>
        <input type="text" />
      </label>

      <label>
        <div>Password</div>
        <input type="password" />
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>
