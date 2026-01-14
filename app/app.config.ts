export default defineAppConfig({
  global: {
    picture: {
      src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    heading: 'Get in touch',
    description: 'Open to full-time roles, freelance work, and collaborations.',
    contacts: [{
      label: 'Email',
      value: 'fawzy.mohamed@live.com',
      to: 'mailto:fawzy.mohamed@live.com'
    }, {
      label: 'Phone',
      value: '+966 59 529 1001',
      to: 'tel:+966595291001'
    }, {
      label: 'Location',
      value: 'Riyadh, Saudi Arabia'
    }],
    links: [{
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/fawzy-mohamed-2326b096/',
      target: '_blank',
      'aria-label': 'LinkedIn'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/alkholigroup2020',
      target: '_blank',
      'aria-label': 'GitHub (Work)'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/fawzymohamed',
      target: '_blank',
      'aria-label': 'GitHub (Personal)'
    }],
    credits: `(c) ${new Date().getFullYear()} Fawzy Mohamed Fawzy`,
    tagline: 'Let us build something great.'
  }
})
