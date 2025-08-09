import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Kontaktieren Sie KaffeeRad Berlin - Standort, Öffnungszeiten und alle Informationen für Ihren Besuch oder Ihre Anfrage.',
}

const contactInfo = {
  address: {
    street: 'Muster Straße 123',
    city: '10115 Berlin',
    district: 'Mitte'
  },
  phone: '+49 (30) 123 456 7',
  email: 'info@kaffeerad.berlin',
  hours: {
    weekdays: 'Montag - Freitag: 7:00 - 18:00',
    weekend: 'Samstag - Sonntag: 8:00 - 16:00'
  },
  social: {
    instagram: '@kaffeerad.berlin',
    facebook: 'KaffeeRad Berlin'
  }
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
              Kontakt
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Besuchen Sie uns in unserem Café, rufen Sie uns an oder schreiben Sie uns. 
              Wir freuen uns darauf, von Ihnen zu hören.
            </p>
          </div>
        </div>
      </div>

      {/* Contact information and map section */}
      <div className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
              Besuchen Sie uns
            </h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Adresse
                </h3>
                <div className="text-neutral-600 ml-8">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.city}</p>
                  <p className="text-sm text-neutral-500 mt-1">{contactInfo.address.district}</p>
                </div>
              </div>

              {/* Opening hours */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Öffnungszeiten
                </h3>
                <div className="text-neutral-600 ml-8 space-y-1">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.weekend}</p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Telefon
                </h3>
                <div className="ml-8">
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                     className="text-neutral-600 hover:text-primary-600 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-Mail
                </h3>
                <div className="ml-8">
                  <a href={`mailto:${contactInfo.email}`} 
                     className="text-neutral-600 hover:text-primary-600 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.204 5.235.388a6.578 6.578 0 0 0-2.592 1.08A6.52 6.52 0 0 0 .388 5.235C.204 5.718.088 6.273.048 7.102.01 7.929 0 8.396 0 12.017c0 3.621.01 4.088.048 4.915.04.827.156 1.382.34 1.865.185.507.4.935.744 1.279.344.344.772.559 1.279.744.483.184 1.038.3 1.865.34.827.038 1.294.048 4.915.048 3.621 0 4.088-.01 4.915-.048.827-.04 1.382-.156 1.865-.34a6.578 6.578 0 0 0 2.592-1.08 6.52 6.52 0 0 0 1.256-2.267c.184-.483.3-1.038.34-1.865.038-.827.048-1.294.048-4.915 0-3.621-.01-4.088-.048-4.915-.04-.827-.156-1.382-.34-1.865a6.578 6.578 0 0 0-1.08-2.592A6.52 6.52 0 0 0 18.765.388C18.282.204 17.727.088 16.898.048 16.071.01 15.604 0 12.017 0Zm-.265 1.08h.265c3.586 0 4.01.014 5.425.072.756.035 1.166.166 1.44.276.47.183.806.402 1.158.754.352.352.571.688.754 1.158.11.274.241.684.276 1.44.058 1.415.072 1.839.072 5.425 0 3.586-.014 4.01-.072 5.425-.035.756-.166 1.166-.276 1.44a3.1 3.1 0 0 1-.754 1.158 3.1 3.1 0 0 1-1.158.754c-.274.11-.684.241-1.44.276-1.415.058-1.839.072-5.425.072-3.586 0-4.01-.014-5.425-.072-.756-.035-1.166-.166-1.44-.276a3.1 3.1 0 0 1-1.158-.754 3.1 3.1 0 0 1-.754-1.158c-.11-.274-.241-.684-.276-1.44-.058-1.415-.072-1.839-.072-5.425 0-3.586.014-4.01.072-5.425.035-.756.166-1.166.276-1.44.183-.47.402-.806.754-1.158.352-.352.688-.571 1.158-.754.274-.11.684-.241 1.44-.276 1.235-.056 1.713-.068 4.693-.071v.071Zm6.238 2.833a1.47 1.47 0 1 0 0-2.94 1.47 1.47 0 0 0 0 2.94ZM5.838 12.017a6.179 6.179 0 1 0 12.358 0 6.179 6.179 0 0 0-12.358 0ZM12.017 7.624a4.393 4.393 0 1 1 0 8.786 4.393 4.393 0 0 1 0-8.786Z" clipRule="evenodd" />
                  </svg>
                  Social Media
                </h3>
                <div className="text-neutral-600 ml-8 space-y-1">
                  <p>Instagram: {contactInfo.social.instagram}</p>
                  <p>Facebook: {contactInfo.social.facebook}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
              So finden Sie uns
            </h2>
            <div className="bg-neutral-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Interaktive Karte</p>
                <p className="text-xs mt-1">Muster Straße 123, 10115 Berlin</p>
                <button className="mt-4 btn btn-secondary px-4 py-2 text-sm">
                  In Google Maps öffnen
                </button>
              </div>
            </div>

            {/* Transportation info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Anfahrt
              </h3>
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v3a1 1 0 001 1h3v1H6a1 1 0 100 2h1v1a1 1 0 001 1h2a1 1 0 001-1v-1h1a1 1 0 100-2h-1V9h3a1 1 0 001-1V5a1 1 0 000-2H3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">U-Bahn</p>
                    <p>U6 Friedrichstraße (5 Min. zu Fuß)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v3a1 1 0 001 1h3v1H6a1 1 0 100 2h1v1a1 1 0 001 1h2a1 1 0 001-1v-1h1a1 1 0 100-2h-1V9h3a1 1 0 001-1V5a1 1 0 000-2H3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">S-Bahn</p>
                    <p>S1, S2, S25 Friedrichstraße (7 Min. zu Fuß)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a1 1 0 100 2 1 1 0 000-2zM6 9a1 1 0 012 0 1 1 0 01-2 0zM8 12a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Bus</p>
                    <p>TXL, 147 Friedrichstraße (3 Min. zu Fuß)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Parken</p>
                    <p>Parkplätze in der Umgebung verfügbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick contact section */}
      <div className="bg-neutral-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
              Schnell kontaktieren
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                 className="card p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Anrufen</h3>
                <p className="text-sm text-neutral-600">{contactInfo.phone}</p>
              </a>

              <a href={`mailto:${contactInfo.email}`} 
                 className="card p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-Mail</h3>
                <p className="text-sm text-neutral-600">{contactInfo.email}</p>
              </a>

              <a href="/events" 
                 className="card p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Event buchen</h3>
                <p className="text-sm text-neutral-600">Direkt anfragen</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}