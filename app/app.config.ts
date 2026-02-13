export default defineAppConfig({
  global: {
    picture: {
      src: '/hero/my-hero-pic.png', // Placeholder until real image is added
      alt: 'Fawzy Mohamed Fawzy'
    },
    meetingLink: 'https://cal.com/', // Keep placeholder or remove if not in CV
    email: 'fawzy.mohamed@live.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        container: 'py-16 sm:py-20 lg:py-24 relative isolate overflow-hidden',
        title: 'mx-auto max-w-2xl text-pretty text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500',
        description: 'mt-6 text-lg/8 mx-auto max-w-2xl text-gray-300'
      }
    }
  },
  footer: {
    heading: 'Fawzy Mohamed',
    description: 'Full Stack Web Developer specializing in secure, high-performance web architecture and enterprise automation.',
    contacts: [{
      label: 'Email',
      value: 'fawzy.mohamed@live.com',
      to: 'mailto:fawzy.mohamed@live.com',
      icon: 'i-lucide-mail'
    }, {
      label: 'Phone',
      value: '+966 59 529 1001',
      to: 'tel:+966595291001',
      icon: 'i-lucide-phone'
    }, {
      label: 'Location',
      value: 'Riyadh, Saudi Arabia',
      icon: 'i-lucide-map-pin'
    }],
    socials: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/alkholigroup2020',
      'target': '_blank',
      'label': 'GitHub (Work)',
      'aria-label': 'GitHub (Work)'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/fawzy-mohamed-2326b096/',
      'target': '_blank',
      'label': 'LinkedIn',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/fawzymohamed',
      'target': '_blank',
      'label': 'GitHub (Personal)',
      'aria-label': 'GitHub (Personal)'
    }],
    credits: `\u00A9 ${new Date().getFullYear()} Fawzy Mohamed`,
    tagline: 'Precision. Security. Performance.'
  }
})
