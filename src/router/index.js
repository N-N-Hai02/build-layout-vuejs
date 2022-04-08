import { createWebHistory,createRouter } from "vue-router";

// mảng dùng để chứa những đường khi người dung click vào
const routes=[
    
];

const router=createRouter({
    history:createWebHistory,
    routes,
});

export default router