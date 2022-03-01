<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
  router.push("/");
};
</script>

<template>
<div class="text-indigo-200 bg-indigo-900">
   <div class="container flex items-center justify-between mx-auto">
    <h1 class="text-3xl font-thin tracking-tighter">Vue<span class="font-normal">FakeAuth</span>
    </h1>
    <nav>
        <ul class="flex space-x-4">
            <router-link to="/">
            <li class="px-4 py-8 cursor-pointer hover: hover:bg-indigo-500 hover:text-indigo-800">Home
            </li>
            </router-link>
            <router-link :to="{ name: 'About' }">
               <li class="px-4 py-8 cursor-pointer hover: hover:bg-indigo-500 hover:text-indigo-80">About</li> 
            </router-link>
            <router-link v-if="!isAuthenticated" to="/login">
              <li class="px-4 py-8 cursor-pointer hover: hover:bg-indigo-500 hover:text-indigo-80">Login</li>  
            </router-link>
             <div v-else class="flex">
              <router-link :to="{ name: 'Secret' }">
              <li class="px-4 py-8 cursor-pointer hover: hover:bg-indigo-500 hover:text-indigo-80">Secret</li>  
              </router-link>
              <button @click="loggingOut">
                <li class="px-4 py-8 cursor-pointer hover: hover:bg-indigo-500 hover:text-indigo-80">Logout</li> 
              </button> 
              </div>
        </ul>
    </nav>
    </div> 
</div>

</template>