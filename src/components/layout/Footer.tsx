import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Über mich', href: '/about' },
    { name: 'Angebot', href: '/offerings' },
    { name: 'Events', href: '/events' },
    { name: 'Kontakt', href: '/contact' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Cookie-Richtlinie', href: '/cookies' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kaffeerad.berlin',
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
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cream-50 border-t border-neutral-200">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold text-coffee-700">
              KaffeeRad
              <span className="block text-lg text-neutral-700">Berlin</span>
            </div>
            <p className="text-sm leading-6 text-neutral-700 max-w-md">
              Premium Kaffeeerlebnisse in Berlin. Minimal, stilvoll und warm –
              außergewöhnliche Kaffeekultur im Herzen der Stadt.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-neutral-500 hover:text-neutral-700">
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
                      <Link href={item.href as any} className="text-sm leading-6 text-neutral-700 hover:text-neutral-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-neutral-900">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as any} className="text-sm leading-6 text-neutral-700 hover:text-neutral-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-neutral-900">Kontakt</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <span className="text-sm leading-6 text-neutral-700">
                      Luisenstraße 9 (Hinterhof, Charité)
                      <br />
                      10117 Berlin
                    </span>
                  </li>
                  <li>
                    <a href="mailto:hallo@kaffeerad.berlin" className="text-sm leading-6 text-neutral-700 hover:text-neutral-900">
                      hallo@kaffeerad.berlin
                    </a>
                  </li>
                  <li>
                    <a href="tel:+4917680605589" className="text-sm leading-6 text-neutral-700 hover:text-neutral-900">
                      +49 176 80 60 55 89
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-neutral-200 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-xs leading-5 text-neutral-600">
                Öffnungszeiten: Mo–Fr 9:00–16:00 (unter 8°C: 10:30–15:30)
              </p>
            </div>
            <p className="mt-8 text-xs leading-5 text-neutral-600 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} KaffeeRad Berlin. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}