import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogEntries from './../statics/blog.json';


Vue.use(VueRouter);

const blogRoutes = () => {
  const entries = BlogEntries.entries
  const sections = [...new Set(BlogEntries.entries.map(item => item.section))]
  return sections.map(section => {
    const filtered = entries.filter(entry => entry.section == section)
    const children = filtered.map(child => ({
      path: child.id,
      name: child.id,
      component: () => import(`./../markdowns/${section}/${child.id}.md`)
    }))
    return {
      path: `/${section}`,
      name: section,
      component: () => import('./../views/Blog.vue'),
      children
    }
  })
}

const routes = [
  {
    path:"/",
    component: () => import('./../views/Home.vue')
  },
  ...blogRoutes(),
  {
    path:"*",
    component: () => import('./../views/Errors/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
