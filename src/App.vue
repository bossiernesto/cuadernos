<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="flex flex-row min-h-screen">
        <div class="sidebar-wrapper">
          <div class="sidebar h-screen overflow-hidden flex flex-col sticky top-0">
            <SidebarHeaderComponent title="Notas" home_url="/"/>
            <Sidebar :searchString="this.searchString"/>
          </div>
        </div>
        <div class="main-content px-16 flex flex-col flex-1 overflow-auto">
          <div class="block">
            <div class="content-header my-5">
              <input type="text" v-model='searchString' class='border-b px-4 py-2 w-full' placeholder="Search..">
            </div>
            <transition name="slide-fade">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarHeaderComponent from '@/components/Cuaderno/Header.vue'
import Sidebar from './components/Cuaderno/Sidebar.vue';

export default {
  name: "Cuadernos",
  components: {
    SidebarHeaderComponent,
    Sidebar
  },
  data() {
    return {
      searchString: '',
    }
  }
}
</script>