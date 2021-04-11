<template>
  <div class="sidebar-header-component"> 
    <div class="logo flex flex-row py-8 items-center">
      <a v-bind:href="this.home_url" class="logo block py-5 flex flex-col">
      <img alt="Vue logo" src="@/assets/images/cuaderno.png" class='w-12'/>
      </a>
      <h1 class='text-3xl ml-3 text-gray-700'>{{this.title}}</h1>
    </div>
  </div>
</template>
<script>
export default {
    props: ["title", "home_url"]
}
</script>