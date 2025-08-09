import Link from 'next/link'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.204 5.235.388a6.578 6.578 0 0 0-2.592 1.08A6.52 6.52 0 0 0 .388 5.235C.204 5.718.088 6.273.048 7.102.01 7.929 0 8.396 0 12.017c0 3.621.01 4.088.048 4.915.04.827.156 1.382.34 1.865.185.507.4.935.744 1.279.344.344.772.559 1.279.744.483.184 1.038.3 1.865.34.827.038 1.294.048 4.915.048 3.621 0 4.088-.01 4.915-.048.827-.04 1.382-.156 1.865-.34a6.578 6.578 0 0 0 2.592-1.08 6.52 6.52 0 0 0 1.256-2.267c.184-.483.3-1.038.34-1.865.038-.827.048-1.294.048-4.915 0-3.621-.01-4.088-.048-4.915-.04-.827-.156-1.382-.34-1.865a6.578 6.578 0 0 0-1.08-2.592A6.52 6.52 0 0 0 18.765.388C18.282.204 17.727.088 16.898.048 16.071.01 15.604 0 12.017 0Zm-.265 1.08h.265c3.586 0 4.01.014 5.425.072.756.035 1.166.166 1.44.276.47.183.806.402 1.158.754.352.352.571.688.754 1.158.11.274.241.684.276 1.44.058 1.415.072 1.839.072 5.425 0 3.586-.014 4.01-.072 5.425-.035.756-.166 1.166-.276 1.44a3.1 3.1 0 0 1-.754 1.158 3.1 3.1 0 0 1-1.158.754c-.274.11-.684.241-1.44.276-1.415.058-1.839.072-5.425.072-3.586 0-4.01-.014-5.425-.072-.756-.035-1.166-.166-1.44-.276a3.1 3.1 0 0 1-1.158-.754 3.1 3.1 0 0 1-.754-1.158c-.11-.274-.241-.684-.276-1.44-.058-1.415-.072-1.839-.072-5.425 0-3.586.014-4.01.072-5.425.035-.756.166-1.166.276-1.44.183-.47.402-.806.754-1.158.352-.352.688-.571 1.158-.754.274-.11.684-.241 1.44-.276 1.235-.056 1.713-.068 4.693-.071v.071Zm6.238 2.833a1.47 1.47 0 1 0 0-2.94 1.47 1.47 0 0 0 0 2.94ZM5.838 12.017a6.179 6.179 0 1 0 12.358 0 6.179 6.179 0 0 0-12.358 0ZM12.017 7.624a4.393 4.393 0 1 1 0 8.786 4.393 4.393 0 0 1 0-8.786Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold text-primary-500">
              KaffeeRad
              <span className="block text-lg text-neutral-600">Berlin</span>
            </div>
            <p className="text-sm leading-6 text-neutral-600 max-w-md">
              Premium coffee experiences in Berlin. Minimal, stylish, and warm - 
              bringing exceptional coffee culture to the heart of the city.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-neutral-400 hover:text-neutral-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-neutral-900">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as any} className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-neutral-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as any} className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-neutral-900">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <span className="text-sm leading-6 text-neutral-600">
                      Muster Straße 123<br />
                      10115 Berlin, Germany
                    </span>
                  </li>
                  <li>
                    <a href="mailto:info@kaffeerad.berlin" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                      info@kaffeerad.berlin
                    </a>
                  </li>
                  <li>
                    <a href="tel:+49301234567" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900">
                      +49 (30) 123 456 7
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-neutral-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-xs leading-5 text-neutral-500">
                Öffnungszeiten: Mo-Fr 7:00-18:00, Sa-So 8:00-16:00
              </p>
            </div>
            <p className="mt-8 text-xs leading-5 text-neutral-500 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} KaffeeRad Berlin. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}