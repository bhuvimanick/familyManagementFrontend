import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Photos from "@/components/Photos";
import AddStories from "@/components/AddStories";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path:"/stories",
      name:"AddStories",
      component:AddStories
    },
    {
      path: "/memberlist",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/photos",
      name: "Photos",
      component: Photos
    }
  ]
});
