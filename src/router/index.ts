import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ExpertiseView = () => import('../views/ExpertiseView.vue')
const OperationsView = () => import('../views/OperationsView.vue')
const ContactView = () => import('../views/ContactView.vue')
const ProfessionalExperienceView = () => import('../views/ProfessionalExperienceView.vue')
const VesselExperienceView = () => import('../views/VesselExperienceView.vue')
const EngineeringProjectsView = () => import('../views/EngineeringProjectsView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'John | Maritime Chief Engineer & Technical Superintendent',
        description:
          'Executive portfolio of John, Maritime Chief Engineer and Technical Superintendent focused on fleet performance, reliability, and operational excellence.',
      },
    },
    {
      path: '/expertise',
      name: 'expertise',
      component: ExpertiseView,
      meta: {
        title: 'Expertise | John Maritime Executive Portfolio',
        description:
          'Explore maritime engineering expertise, regulatory compliance mastery, and technical governance capabilities.',
      },
    },
    {
      path: '/operations',
      name: 'operations',
      component: OperationsView,
      meta: {
        title: 'Operations | John Maritime Executive Portfolio',
        description:
          'Review operational performance, vessel portfolio, and engineering project outcomes led by John.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact | John Maritime Executive Portfolio',
        description:
          'Contact John for maritime executive leadership opportunities and technical superintendent roles.',
      },
    },
    {
      path: '/experience',
      name: 'professional-experience',
      component: ProfessionalExperienceView,
      meta: {
        title: 'Professional Experience | John Maritime Executive Portfolio',
        description:
          'Explore professional maritime engineering and superintendent leadership experience across global operations.',
      },
    },
    {
      path: '/vessels',
      name: 'vessel-experience',
      component: VesselExperienceView,
      meta: {
        title: 'Vessel Experience | John Maritime Executive Portfolio',
        description:
          'Review vessel classes, propulsion systems, routes, and classification experience managed by John.',
      },
    },
    {
      path: '/projects',
      name: 'engineering-projects',
      component: EngineeringProjectsView,
      meta: {
        title: 'Engineering Projects | John Maritime Executive Portfolio',
        description:
          'Discover engineering project execution results including dry dock, overhaul, optimization, and automation initiatives.',
      },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }

    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const defaultTitle = 'John | Maritime Chief Engineer & Technical Superintendent'
  const defaultDescription =
    'Executive portfolio showcasing maritime technical leadership, engineering excellence, and global fleet operations.'

  document.title = (to.meta.title as string) || defaultTitle

  const description = (to.meta.description as string) || defaultDescription
  const descriptionTag = document.querySelector('meta[name="description"]')

  if (descriptionTag) {
    descriptionTag.setAttribute('content', description)
  }
})

export default router
