'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Angebot', href: '/offerings' },
  { name: 'Über mich', href: '/about' },
  { name: 'Kontakt', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-cream-50/90 backdrop-blur supports-[backdrop-filter]:bg-cream-50/75 border-b border-neutral-200">
      <nav className="container flex items-center justify-between py-4 md:py-5" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KaffeeRad Berlin</span>
            <div className="text-2xl font-bold text-coffee-700">
              KaffeeRad
              <span className="block text-lg text-neutral-700">Berlin</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Hauptmenü öffnen</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href as any}
                className={[
                  'text-sm font-medium transition-colors',
                  active
                    ? 'text-coffee-700 underline underline-offset-8 decoration-coffee-700/60'
                    : 'text-neutral-900 hover:text-coffee-700',
                ].join(' ')}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/events"
            className="btn btn-primary px-4 py-2 text-sm font-semibold"
          >
            Event anfragen
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-cream-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">KaffeeRad Berlin</span>
                <div className="text-xl font-bold text-coffee-700">
                  KaffeeRad
                  <span className="block text-sm text-neutral-700">Berlin</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Menü schließen</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-200/80">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
                    return (
                      <Link
                        key={item.name}
                        href={item.href as any}
                        className={[
                          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7',
                          active ? 'text-coffee-700' : 'text-neutral-900 hover:bg-neutral-100',
                        ].join(' ')}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6">
                  <Link
                    href="/events"
                    className="btn btn-primary w-full justify-center rounded-full px-4 py-3 text-base font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Event anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}