/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.js'
import Cousines from 'views/Cousines'
import Sales from 'views/Sales'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/sales',
    name: 'Sales',
    icon: 'nc-icon nc-money-coins',
    component: Sales,
    layout: '/admin',
  },
  {
    path: '/cousines',
    name: 'Cousines',
    icon: 'nc-icon nc-apple',
    component: Cousines,
    layout: '/admin',
  },
]

export default dashboardRoutes
