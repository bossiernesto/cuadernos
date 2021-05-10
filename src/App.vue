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
                    <form>
                      <ul class="menu">
                        <li v-for="(cat, catidx) in noteCategories" :key="catidx" class='menu-item py-3'>
                          <h3 class='font-semibold text-gray-700 hover:ml-1  duration-150 block'>{{capitalizeFirstLetter(cat)}}</h3>
                          <ul class="submenu" v-if="search_entries.filter(entry => entry.section == cat).length > 0" >
                            <li v-for="(entry, entryidx) in search_entries.filter(entry => entry.section == cat)" :key="entryidx" class='entry-item py-3'>
                              <router-link :to="'/'+entry.section+'/'+entry.id" class='font-light pl-5 hover:ml-1 block'>{{entry.title}}</router-link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </form>
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

const allEntries = noteEntries.entries

function isEmpty(str) {
    return (!str || str.length === 0 || str == undefined);
}

export default {
  mounted() {
  },
  components: {
    VuePerfectScrollbar,
    SidebarHeaderComponent
  },
  computed: {
    noteCategories() {
      return [...new Set(allEntries.map(item => item.section))]
    },
    filteredEntries() {
      if(isEmpty(this.search.text)) {
        return allEntries;
      }
      return allEntries.filter((entry) => {
        return entry.title.toLowerCase().includes(this.search.text);
      })
    }
  },
  data() {
    return {
      search_entries: allEntries,
      allEntries: allEntries,
      filterByName: {
        
      },
      settings: {
        maxScrollbarLength: 60
      },
      search: { text: "" },
    }
  },
  methods: {
    //capitalize only the first letter of the string. 
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    search_text() {
      this.search_entries = this.filteredEntries
    }
  }
}
</script>