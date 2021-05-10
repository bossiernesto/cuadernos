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
                  <ul class="menu">
                    <li v-for="(cat, catidx) in noteCategories" :key="catidx" class='menu-item py-3'>
                      <h3 class='font-semibold text-gray-700 hover:ml-1  duration-150 block'>{{capitalizeFirstLetter(cat)}}</h3>
                      <ul v-if="filteredEntries.filter(entry => entry.section == cat)" class='my-list'>
                        <li v-for="entry in filteredEntries.filter(entry => entry.section == cat)" :key="entry.id" class='entry-item py-3'>
                          <router-link :to="'/'+entry.section+'/'+entry.md" class='font-light pl-5 hover:ml-1 block'>{{entry.title}}</router-link>
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
import noteEntries from '@/statics/blog.json';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import SidebarHeaderComponent from '@/components/Cuaderno/Header.vue'

const allEntries = noteEntries.entries

export default {
  name: "Cuadernos",
  components: {
    VuePerfectScrollbar,
    SidebarHeaderComponent
  },
  computed: {
    noteCategories() {
      return [...new Set(this.entries.map(item => item.section))]
    },
    filteredEntries() {
      const searchString = this.searchString.toLowerCase();
      return this.entries.filter(entry => entry.title.toLowerCase().includes(searchString))
    }
  },
  data() {
    return {
      entries: allEntries,
      settings: {
        maxScrollbarLength: 60
      },
      searchString: '',
    }
  },
  methods: {
    //capitalize only the first letter of the string. 
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>