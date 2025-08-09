import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Buchen Sie KaffeeRad Berlin für Ihr Event - von Firmenveranstaltungen bis zu privaten Feiern. Professioneller Kaffeeservice in Berlin.',
}

const services = [
  {
    title: 'Corporate Events',
    icon: '🏢',
    description: 'Professioneller Kaffeeservice für Firmenveranstaltungen, Meetings und Konferenzen.',
    features: ['Mobile Espresso-Station', 'Geschulte Baristas', 'Premium Kaffeezubehör', 'Flexible Zeitfenster'],
    priceFrom: 'Ab €15 pro Person'
  },
  {
    title: 'Hochzeiten',
    icon: '💍',
    description: 'Machen Sie Ihren besonderen Tag unvergesslich mit unserem eleganten Kaffee-Service.',
    features: ['Latte Art Specials', 'Dekoratives Setup', 'Personalisierte Menükarten', 'After-Dinner Service'],
    priceFrom: 'Ab €20 pro Person'
  },
  {
    title: 'Private Feiern',
    icon: '🎉',
    description: 'Kaffeeservice für Geburtstage, Jubiläen und andere private Anlässe.',
    features: ['Individuelle Beratung', 'Verschiedene Getränkeoptionen', 'Setup & Abbau', 'Flexible Pakete'],
    priceFrom: 'Ab €12 pro Person'
  },
  {
    title: 'Workshops & Tastings',
    icon: '☕',
    description: 'Interaktive Kaffee-Workshops und Verkostungen für Gruppen.',
    features: ['Kaffee-Bildung', 'Hands-on Erfahrung', 'Verkostung verschiedener Sorten', 'Take-Home Proben'],
    priceFrom: 'Ab €35 pro Person'
  }
]

const process = [
  {
    step: 1,
    title: 'Anfrage senden',
    description: 'Füllen Sie unser Formular aus oder kontaktieren Sie uns direkt mit Details zu Ihrem Event.'
  },
  {
    step: 2,
    title: 'Beratungsgespräch',
    description: 'Wir besprechen Ihre Wünsche und erstellen ein individuelles Angebot für Ihr Event.'
  },
  {
    step: 3,
    title: 'Planung & Setup',
    description: 'Unser Team plant alle Details und baut am Event-Tag professionell auf.'
  },
  {
    step: 4,
    title: 'Genießen',
    description: 'Lehnen Sie sich zurück und lassen Sie Ihre Gäste unseren exzellenten Kaffee genießen.'
  }
]

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
              Event Booking
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Machen Sie Ihr Event unvergesslich mit unserem professionellen Kaffeeservice. 
              Von intimen Feiern bis zu großen Firmenevents - wir bringen die perfekte Kaffee-Erfahrung zu Ihnen.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Unsere Event-Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Maßgeschneiderte Kaffee-Erlebnisse für jeden Anlass und jede Größe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card p-6 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {service.description}
              </p>
              <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-primary-600 font-semibold text-sm">
                {service.priceFrom}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process section */}
      <div className="bg-neutral-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              So einfach geht&apos;s
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Vom ersten Kontakt bis zu Ihrem perfekten Event - wir begleiten Sie durch jeden Schritt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto h-16 w-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Häufige Fragen
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Wie weit im Voraus sollte ich buchen?
                </h3>
                <p className="text-neutral-600">
                  Wir empfehlen eine Buchung mindestens 2-3 Wochen im Voraus, besonders für Wochenenden und 
                  größere Events. Für kurzfristige Anfragen kontaktieren Sie uns gerne - oft können wir auch 
                  spontan helfen.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Welche Ausrüstung bringen Sie mit?
                </h3>
                <p className="text-neutral-600">
                  Wir bringen unsere komplette professionelle Ausrüstung mit: Espressomaschinen, Mühlen, 
                  alle Kaffeesorten, Milch, Zucker, Tassen, und alles was für den perfekten Kaffeeservice 
                  benötigt wird.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Gibt es eine Mindestanzahl an Gästen?
                </h3>
                <p className="text-neutral-600">
                  Unsere Mindestbuchung liegt bei 10 Personen. Für kleinere Gruppen bieten wir 
                  individuelle Lösungen an - sprechen Sie uns gerne an.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Können Sie auch vegane Alternativen anbieten?
                </h3>
                <p className="text-neutral-600">
                  Selbstverständlich! Wir haben verschiedene Pflanzenmilch-Alternativen wie Hafer-, 
                  Mandel- und Sojamilch. Teilen Sie uns einfach Ihre Wünsche mit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
                Event-Anfrage
              </h2>
              <p className="text-lg leading-8 text-neutral-600">
                Erzählen Sie uns von Ihrem Event und wir erstellen Ihnen ein individuelles Angebot.
              </p>
            </div>

            <div className="card p-8">
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-600 mb-4">
              Sie haben Fragen oder möchten uns direkt kontaktieren?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+493012345678" className="btn btn-secondary px-6 py-3">
                📞 +49 (30) 123 456 7
              </a>
              <a href="mailto:events@kaffeerad.berlin" className="btn btn-primary px-6 py-3">
                ✉️ events@kaffeerad.berlin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}