import Vue from "vue";
import VueRouter from "vue-router";
import BlogEntries from '@/statics/blog.json';
import { publicPath } from '@/../vue.config'

Vue.use(VueRouter);

const blogRoutes = () => {
  const entries = BlogEntries.entries
  const sections = [...new Set(BlogEntries.entries.map(item => item.section))]
  return sections.map(section => {
    const filtered = entries.filter(entry => entry.section == section)
    const children = filtered.map(child => {
      const component = (child.remote) ? import(`@/components/Cuaderno/RemoteMarkdown.vue`) : import(`@/markdowns/${section}/${child.md}.md`);
      const props = (child.remote) ? {url: child.url} : {}

      return {
        path: child.md,
        name: child.md,
        component: () => component,
        props: props
      }
    })
    return {
      path: `/${section}`,
      name: section,
      component: () => import('@/views/Blog.vue'),
      children
    }
  })
}

const routes = [
  {
    path:"/",
    component: () => import('@/views/Home.vue')
  },
  ...blogRoutes(),
  {
    path:"*",
    component: () => import('@/views/Errors/NotFound.vue'),
    meta: {
      layout: 'AppLayoutError'
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      console.log(to.hash)
      return {
        selector: to.hash
      }
    }
  }
});

export default router;
