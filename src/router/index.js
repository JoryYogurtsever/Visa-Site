import AboutUs from '../components/AboutUs'
import Home from '../components/Home'
import Study from '../components/Study'
import Teach from '../components/Teach'
import DigitalNomad from '../components/DigitalNomad'
import Search from '../components/Search'
import Browse from '../components/Browse'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/Study',
    name: 'Study',
    component: Study
  },
  {
    path: '/Teach',
    name: 'Teach',
    component: Teach
  },
  {
    path: '/DigitalNomad',
    name: 'DigitalNomad',
    component: DigitalNomad
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Browse',
    name: 'Browse',
    component: Browse,
    children: [
      {
        path: '/',
        component: ''
      },
      {
        path: '/:id',
        component: NationsList,
      },
      {
        path: ''
      }
    ]
  }
]
