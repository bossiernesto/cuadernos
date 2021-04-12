<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="flex flex-row min-h-screen">
        <div class="sidebar-wrapper">
          <div class="sidebar h-screen overflow-hidden flex flex-col sticky top-0">
              <SidebarHeaderComponent title="Notas" home_url="/"/>
              <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
                <nav class='overflow-auto'>
                  <div class="nav-content overflow-hidden">
                    <ul class='menu'>
                      <li v-for="(entry,index) in noteEntries" :key="index" class='menu-item mt-2 '>
                        <h3 class='font-semibold text-gray-700 hover:ml-1  duration-150 block'>{{capitalizeFirstLetter(entry.section)}}</h3>
                        <ul class="submenu" v-if="entry.entries.length > 0" >
                          <li v-for="(submenu, indexsub) in entry.entries" :key="indexsub" class='submenu-item py-3'>
                            <router-link :to="'/'+entry.section+'/'+submenu.id" class='font-light pl-5 hover:ml-1 block'>{{submenu.title}}</router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
            </VuePerfectScrollbar>
          </div>
        </div>
        <div class="main-content px-16 flex flex-col flex-1 overflow-auto">
          <div class="block">
            <div class="content-header my-5">
              <input type="text" v-model="search.text" @input="search_text()" class='border-b px-4 py-2 w-full' placeholder="Search..">
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
import noteEntries from '@/statics/blog.json';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import SidebarHeaderComponent from '@/components/Cuaderno/Header.vue'

export default {
  mounted() {
      console.log(noteEntries.flatMap(entry => entry.entries));
  },
  components: {
    VuePerfectScrollbar,
    SidebarHeaderComponent
  },
  methods: {
    //capitalize only the first letter of the string. 
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    search_text() {
      console.log(this.search.text)
    }
  },
  computed: {
    noteEntries() {
      return noteEntries;
    }
  },
  data() {
    return {
      search: { text: "" },
      settings: {
        maxScrollbarLength: 60
      }
    }
  }
}
</script>