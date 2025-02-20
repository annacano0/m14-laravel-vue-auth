<script  setup lang="ts">
import axios from 'axios'

definePageMeta({
  middleware:["auth"]
})

const user=ref({
  name:"Anna",email:"anna@gmail.com"
})

async function getUser() {
  const res = await axios.get("/user");
  console.log(res);
}

</script>
<template>
  <p><strong>User Name:</strong> {{user.name}}</p>
  <p><strong>User Email:</strong> {{user.email}}</p>
</template>
