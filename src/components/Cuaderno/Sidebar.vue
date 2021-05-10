<template>
  <div id="sidebar">
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
      <nav class='overflow-auto'>
        <div class="nav-content overflow-hidden">
          <!-- <ul class="menu">
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
          </ul> -->
            <transition name="fadeHeight">
                <ul class="submenu" v-if="filteredEntries" >
                  <li v-for="(entry, entryidx) in filteredEntries" :key="entryidx" class='entry-item py-3'>
                    <router-link :to="'/'+entry.section+'/'+entry.id" class='font-light pl-5 hover:ml-1 block'>{{entry.title}}</router-link>
                  </li>
                </ul>
              </transition>
        </div>
      </nav>
    </VuePerfectScrollbar>
  </div>  
</template>
<script>
import noteEntries from '@/statics/blog.json';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

const allEntries = noteEntries.entries

function isEmpty(str) {
    return (!str || str.length === 0 || str == undefined);
}

export default {
  name: "Sidebar",
  mounted() {
  },
  components: {
    VuePerfectScrollbar
  },
  computed: {
    noteCategories() {
      return [...new Set(allEntries.map(item => item.section))]
    },
    filteredEntries() {
      if(isEmpty(this.search.text)) {
        return allEntries;
      }
      return noteEntries.entries.filter((entry) => {
        return entry.title.toLowerCase().includes(this.search.text);
      })
    }
  },
  data() {
    return {
      allEntries: allEntries,
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
    }
  }
}
</script>
