import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import AdminView from "../views/AdminView.vue";
import employees from "../views/admin/employees.vue";
import events from "../views/admin/events.vue";
import companypolicy from "../views/admin/companypolicy.vue";
import finance from "../views/admin/finance.vue";
import mailservices from "../views/admin/mailservices.vue";
import performance from "../views/admin/performance.vue";
import profileadmin from "../views/admin/profileadmin.vue";
import stafftime from "../views/admin/stafftime.vue";
import training from "../views/admin/training.vue";
import metting from "../views/admin/metting.vue";
import sections from "../views/admin/sections.vue";
import salary from "../views/admin/salary.vue";
import employ from "../views/admin/employ.vue";
import archives from "../views/admin/archives.vue";
import warning from "../views/admin/warning.vue";
import vacations from "../views/admin/vacations.vue";

import UserHome from "../views/UserHome.vue";
import companypolicyuser from "../views/user/companypolicyuser.vue";
import eventuser from "../views/user/eventuser.vue";
import financeuser from "../views/user/financeuser.vue";
import servicerequest from "../views/user/servicerequest.vue";
import performanceuser from "../views/user/performanceuser.vue";
import profileuser from "../views/user/profileuser.vue";
import stafftimeuser from "../views/user/stafftimeuser.vue";
import traininguser from "../views/user/traininguser.vue";
import mettinguser from "../views/user/mettinguser.vue";
import warninguser from "../views/user/warninguser.vue";
import vacationsuser from "../views/user/vacationsuser.vue";

const session = localStorage.getItem("session");
console.log(session);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/user",
      name: "User",
      component: UserHome,
      children: [
        {
          path: "companypolicyuser",
          component: companypolicyuser,
        },
        {
          path: "eventuser",
          component: eventuser,
        },

        {
          path: "financeuser",
          component: financeuser,
        },
        {
          path: "servicerequest",
          component: servicerequest,
        },
        {
          path: "performanceuser",
          component: performanceuser,
        },
        {
          path: "profileuser",
          component: profileuser,
        },
        {
          path: "stafftimeuser",
          component: stafftimeuser,
        },
        {
          path: "traininguser",
          component: traininguser,
        },
        {
          path: "mettinguser",
          component: mettinguser,
        },
        {
          path: "warninguser",
          component: warninguser,
        },

        {
          path: "vacationsuser",
          component: vacationsuser,
        },

      ],
    },
    {
      path: "/admin",
      component: AdminView,
      name: "Admin",
      children: [
        {  path: "events",  component: events },
        { path: "employees", component: employees },

        { path: "finance", component: finance },

        { path: "metting",
          component: metting },
        {
          path: "mailservices",
          component: mailservices,
        },
        {
          path: "performance",
          component: performance,
        },
        {
          path: "profileadmin",
          component: profileadmin,
        },
        {
          path: "stafftime",
          component: stafftime,
        },
        {
          path: "companypolicy",
          component: companypolicy,
        },
        {
          path: "training",
          component: training,
        },

        {
          path: "sections",
          component: sections,
        },

        {
          path: "salary/:id",
          component: salary,
        },

        {
          path: "employe/:id", 
          component: employ,
        },
        {
          path: "archives",
          component: archives,
        },
        {
          path: "warning",
          component: warning,
        },

        {
          path: "vacations",
          component: vacations,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  console.log(session);
  console.log(to);
  // if (session) {
  //   if (session == 'admin') {
  //     return { name: 'Admin' }
  //   }else if(session == 'user') {
  //     return { name: 'User' }
  //   }else {
  //     return { name: 'Login' }
  //   }
  //   // redirect the user to the login page

  // }
});

export default router;
