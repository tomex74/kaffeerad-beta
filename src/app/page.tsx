import Link from 'next/link'

const features = [
  {
    icon: '☕',
    title: 'Premium Kaffeesorten',
    description: 'Sorgfältig ausgewählte Bohnen von den besten Anbaugebieten der Welt, geröstet für maximalen Geschmack.'
  },
  {
    icon: '🎪',
    title: 'Event Catering',
    description: 'Professioneller Kaffeeservice für alle Anlässe - von intimen Feiern bis zu Firmenevents.'
  },
  {
    icon: '🏙️',
    title: 'Berlin Mitte',
    description: 'Im Herzen Berlins gelegen - besuchen Sie uns oder wir kommen zu Ihnen.'
  }
]

const testimonials = [
  {
    name: 'Sarah Weber',
    role: 'Event Managerin',
    content: 'KaffeeRad hat unsere Firmenveranstaltung perfekt gemacht. Der Service war exzellent und der Kaffee unvergleichlich.',
    rating: 5
  },
  {
    name: 'Michael Schmidt',
    role: 'Privatkundin',
    content: 'Für unsere Hochzeit haben wir KaffeeRad gebucht - unsere Gäste schwärmen heute noch davon. Absolute Empfehlung!',
    rating: 5
  },
  {
    name: 'Anna Müller',
    role: 'Café Besitzerin',
    content: 'Die Qualität und Professionalität von KaffeeRad ist beeindruckend. Echte Kaffee-Experten mit Herz.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-neutral-50 to-primary-100">
        <div className="container py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                KaffeeRad
                <span className="block text-primary-500 mt-2">Berlin</span>
              </h1>
              
              <p className="mt-8 text-xl leading-8 text-neutral-600 sm:text-2xl max-w-3xl mx-auto">
                Premium Kaffeeerlebnisse in Berlin. Minimal, stilvoll und mit Herz - 
                für unvergessliche Momente bei jedem Anlass.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/offerings" className="btn btn-primary px-8 py-4 text-lg font-semibold">
                  Unsere Angebote entdecken
                </Link>
                <Link href="/events" className="btn btn-secondary px-8 py-4 text-lg font-semibold">
                  Event buchen
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Was uns auszeichnet
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Drei Säulen, die KaffeeRad Berlin zu Ihrem perfekten Kaffee-Partner machen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.title} className="card p-8 text-center group hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About preview section */}
      <div className="bg-neutral-50 py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Unsere Leidenschaft für Kaffee
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Seit 2020 bringen wir außergewöhnliche Kaffeeerlebnisse nach Berlin. 
                Was als kleine Leidenschaft begann, ist heute zu einem der angesehensten 
                Kaffeeanbieter der Stadt geworden.
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                Unsere Philosophie ist einfach: Weniger ist mehr. Wir konzentrieren uns auf 
                das Wesentliche - außergewöhnliche Qualität, minimales Design und warme, 
                persönliche Verbindungen zu jedem Gast.
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn btn-primary px-6 py-3">
                  Mehr über uns erfahren
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-lg font-medium text-primary-700">Unser Team bei der Arbeit</p>
                  <p className="text-sm text-primary-600 mt-2">Leidenschaft in jeder Tasse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Erfahrungen, die für sich sprechen - echte Bewertungen unserer zufriedenen Kunden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-600">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit für außergewöhnlichen Kaffee?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Ob für Ihr nächstes Event oder den täglichen Genuss - kontaktieren Sie uns 
              und erleben Sie den Unterschied, den echter Qualitätskaffee macht.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 rounded-md transition-colors">
                Jetzt Kontakt aufnehmen
              </Link>
              <Link href="/offerings" className="text-base font-semibold leading-7 text-white hover:text-primary-100 transition-colors">
                Angebote ansehen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}