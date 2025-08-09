import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offerings',
  description: 'Entdecken Sie unsere kuratierte Auswahl an Premium-Kaffeesorten, Spezialitäten und Event-Services bei KaffeeRad Berlin.',
}

const coffeeOfferings = [
  {
    category: 'Signature Blends',
    items: [
      {
        name: 'Berlin Morgen',
        description: 'Unsere Hausröstung mit Noten von dunkler Schokolade und Haselnuss. Perfekt für den Start in den Tag.',
        origin: 'Brasilien & Äthiopien',
        roast: 'Medium',
        price: '€24/kg'
      },
      {
        name: 'Kreuzberg Special',
        description: 'Eine komplexe Mischung mit fruchtigen Noten und einem Hauch von Karamell. Für die anspruchsvollen Gaumen.',
        origin: 'Kolumbien & Guatemala',
        roast: 'Medium-Dark',
        price: '€28/kg'
      }
    ]
  },
  {
    category: 'Single Origins',
    items: [
      {
        name: 'Ethiopian Yirgacheffe',
        description: 'Blumige Aromen mit hellen, zitrusartigen Noten. Ein klassischer äthiopischer Kaffee von höchster Qualität.',
        origin: 'Äthiopien, Yirgacheffe',
        roast: 'Light',
        price: '€32/kg'
      },
      {
        name: 'Colombian Huila',
        description: 'Ausgewogen und süß mit Noten von roten Früchten und einem sauberen Abgang.',
        origin: 'Kolumbien, Huila',
        roast: 'Medium',
        price: '€30/kg'
      },
      {
        name: 'Guatemalan Antigua',
        description: 'Vollmundig und würzig mit rauchigen Untertönen und einer anhaltenden Süße.',
        origin: 'Guatemala, Antigua',
        roast: 'Dark',
        price: '€34/kg'
      }
    ]
  }
]

const eventServices = [
  {
    name: 'Corporate Events',
    description: 'Professioneller Kaffeeservice für Firmenveranstaltungen, Meetings und Konferenzen.',
    features: ['Mobile Espresso-Station', 'Barista-Service', 'Premium Kaffeezubehör', 'Individuelle Menüs'],
    priceRange: 'Ab €15 pro Person'
  },
  {
    name: 'Hochzeiten',
    description: 'Machen Sie Ihren besonderen Tag unvergesslich mit unserem eleganten Kaffee-Service.',
    features: ['Latte Art Specials', 'Dekoratives Setup', 'Personalisierte Menükarten', 'After-Dinner Kaffee'],
    priceRange: 'Ab €20 pro Person'
  },
  {
    name: 'Private Feiern',
    description: 'Kaffeeservice für Geburtstage, Jubiläen und andere private Anlässe.',
    features: ['Flexible Zeitfenster', 'Individuelle Beratung', 'Verschiedene Getränkeoptionen', 'Setup & Abbau'],
    priceRange: 'Ab €12 pro Person'
  },
  {
    name: 'Workshops & Tastings',
    description: 'Interaktive Kaffee-Workshops und Verkostungen für Gruppen jeden Alters.',
    features: ['Kaffee-Bildung', 'Hands-on Erfahrung', 'Verkostung verschiedener Sorten', 'Take-Home Proben'],
    priceRange: 'Ab €35 pro Person'
  }
]

export default function OfferingsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
              Unsere Angebote
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Von handverlesenen Kaffeesorten bis hin zu maßgeschneiderten Event-Services - 
              entdecken Sie unser kuratiertes Angebot für jeden Anlass und Geschmack.
            </p>
          </div>
        </div>
      </div>

      {/* Coffee offerings section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Premium Kaffeesorten
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Sorgfältig ausgewählte Bohnen von den besten Anbaugebieten der Welt, 
            geröstet für maximalen Geschmack und Aroma.
          </p>
        </div>

        <div className="space-y-16">
          {coffeeOfferings.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div key={item.name} className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-neutral-900">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-primary-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Herkunft:</span>
                        <span className="text-neutral-600">{item.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Röstung:</span>
                        <span className="text-neutral-600">{item.roast}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event services section */}
      <div className="bg-neutral-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Event Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Professionelle Kaffee-Services für jeden Anlass - von intimen Feiern 
              bis hin zu großen Firmenevents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {eventServices.map((service) => (
              <div key={service.name} className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                    Leistungen:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-600">
                      {service.priceRange}
                    </span>
                    <button className="btn btn-secondary px-4 py-2 text-sm">
                      Anfrage stellen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal specials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Saisonale Spezialitäten
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Entdecken Sie unsere wechselnden saisonalen Angebote - 
              limitierte Editionen und besondere Kreationen.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6 text-center">
              <div className="mb-4">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">☕</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Winter Blend
              </h3>
              <p className="text-neutral-600 text-sm">
                Eine warme, würzige Mischung mit Noten von Zimt und Vanille. 
                Perfekt für die kalte Jahreszeit.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="mb-4">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Frühjahrs Special
              </h3>
              <p className="text-neutral-600 text-sm">
                Leichte, blumige Noten mit einem Hauch von Zitrus. 
                Eine erfrischende Begrüßung des Frühlings.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="mb-4">
                <div className="mx-auto h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎃</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Herbst Edition
              </h3>
              <p className="text-neutral-600 text-sm">
                Reichhaltige, erdige Aromen mit einem Hauch von Karamell. 
                Die Wärme des Herbstes in jeder Tasse.
              </p>
            </div>
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
              Kontaktieren Sie uns für eine persönliche Beratung oder besuchen Sie uns, 
              um unsere Kaffees zu probieren.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 rounded-md">
                Jetzt Kontakt aufnehmen
              </a>
              <a href="/events" className="text-base font-semibold leading-7 text-white hover:text-primary-100">
                Event buchen <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}