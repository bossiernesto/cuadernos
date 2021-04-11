import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogEntries from './../statics/blog.json';


Vue.use(VueRouter);

const blogRoutes = BlogEntries.map(entry => {
  const section = entry.section
  const children = entry.entries.map(child => ({
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

console.log(blogRoutes);

const routes = [
  {
    path:"/",
    component: () => import('./../views/Home.vue')
  },
  ...blogRoutes,
  {
    path:"*",
    component: () => import('./../views/Errors/404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
