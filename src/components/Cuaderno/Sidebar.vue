<template>
  <div id="sidebar">
    <VuePerfectScrollbar class="scroll-area" :settings="settings">
      <nav class='overflow-auto'>
        <div class="nav-content overflow-hidden">
          <ul class="menu">
            <li v-for="(cat, catidx) in noteCategories" :key="catidx" class='menu-item py-3'>
              <h3 class='font-semibold text-gray-700 hover:ml-1  duration-150 block'>{{capitalizeFirstLetter(cat)}}</h3>
              <transition name="fadeHeight">
                <ul class="submenu" v-if="filteredEntries.filter(entry => entry.section == cat)" >
                  <li v-for="(entry, entryidx) in filteredEntries.filter(entry => entry.section == cat)" :key="entryidx" class='entry-item py-3'>
                    <router-link :to="'/'+entry.section+'/'+entry.id" class='font-light pl-5 hover:ml-1 block'>{{entry.title}}</router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
      </nav>
    </VuePerfectScrollbar>
  </div>  
</template>
<script>
import noteEntries from '@/statics/blog.json';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

const allEntries = noteEntries.entries

export default {
  name: "Sidebar",
  components: {
    VuePerfectScrollbar
  },
  computed: {
    noteCategories() {
      return [...new Set(this.filteredEntries.map(item => item.section))]
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
      }
    }
  },
  methods: {
    //capitalize only the first letter of the string. 
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  props: {
    searchString: String
  }
}
</script>
