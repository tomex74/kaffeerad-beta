import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about KaffeeRad Berlin - our story, values, and passionate team bringing exceptional coffee culture to Berlin.',
}

const team = [
  {
    name: 'Max Müller',
    role: 'Gründer & Head Barista',
    bio: 'Mit über 10 Jahren Erfahrung in der Berliner Kaffeeszene bringt Max seine Leidenschaft für außergewöhnlichen Kaffee zu KaffeeRad.',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Sarah Schmidt',
    role: 'Operations Manager',
    bio: 'Sarah sorgt dafür, dass jeder Aspekt unseres Services reibungslos funktioniert und unsere Kunden die beste Erfahrung machen.',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Tom Chen',
    role: 'Event Specialist',
    bio: 'Tom verwandelt jedes Event in ein unvergessliches Kaffeeerlebnis mit kreativen Lösungen und perfekter Ausführung.',
    image: '/api/placeholder/300/300'
  }
]

const values = [
  {
    title: 'Qualität',
    description: 'Wir verwenden nur die besten Bohnen aus nachhaltigen Quellen und rösten sie mit höchster Präzision für den perfekten Geschmack.'
  },
  {
    title: 'Nachhaltigkeit',
    description: 'Umweltbewusstsein steht im Mittelpunkt unserer Arbeit - von der Beschaffung bis zur Verpackung setzen wir auf nachhaltige Praktiken.'
  },
  {
    title: 'Gemeinschaft',
    description: 'Wir schaffen Verbindungen durch Kaffee und bringen Menschen in Berlin zusammen, um gemeinsame Momente zu teilen.'
  },
  {
    title: 'Innovation',
    description: 'Wir erkunden ständig neue Wege, um Kaffeeerlebnisse zu verbessern und unseren Gästen etwas Besonderes zu bieten.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
              Unsere Geschichte
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              KaffeeRad Berlin entstand aus der Vision, die Berliner Kaffeeszene mit einem minimalistischen, 
              stilvollen Ansatz zu bereichern, der Qualität und Gemeinschaft in den Mittelpunkt stellt.
            </p>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
            Die KaffeeRad Story
          </h2>
          <div className="space-y-6 text-lg leading-8 text-neutral-600">
            <p>
              Was 2020 als Leidenschaftsprojekt begann, hat sich zu einem der angesehensten 
              Kaffeeanbieter Berlins entwickelt. Unser Weg startete in einer kleinen Werkstatt 
              in Kreuzberg, wo wir unsere erste Espressomaschine aufstellten und begannen, 
              mit verschiedenen Röstungen zu experimentieren.
            </p>
            <p>
              Heute sind wir stolz darauf, nicht nur außergewöhnlichen Kaffee zu servieren, 
              sondern auch unvergessliche Erlebnisse zu schaffen. Von intimen Firmenevents bis 
              hin zu großen Hochzeiten - wir bringen unsere Leidenschaft für Kaffee direkt zu 
              unseren Kunden.
            </p>
            <p>
              Unsere Philosophie ist einfach: Weniger ist mehr. Wir konzentrieren uns auf das 
              Wesentliche - außergewöhnliche Qualität, minimales Design und warme, persönliche 
              Verbindungen zu jedem Gast.
            </p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-neutral-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Unsere Werte
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Diese Grundsätze leiten uns in allem, was wir tun - von der Bohnenauswahl bis zum Service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col">
                  <dt className="text-xl font-semibold leading-7 text-neutral-900">
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Unser Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Die leidenschaftlichen Menschen hinter KaffeeRad Berlin, die jeden Tag daran arbeiten, 
              außergewöhnliche Kaffeeerlebnisse zu schaffen.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <div className="group">
                  <div className="aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
                    {/* Placeholder for team photos */}
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                      <div className="text-4xl font-bold text-primary-600">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-neutral-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-primary-600 font-medium">
                    {person.role}
                  </p>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-50">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Bereit für außergewöhnlichen Kaffee?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Entdecken Sie unsere Kaffeeauswahl oder buchen Sie uns für Ihr nächstes Event. 
              Wir freuen uns darauf, Sie kennenzulernen.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/offerings" className="btn btn-primary px-6 py-3 text-base font-semibold">
                Unsere Angebote
              </a>
              <a href="/contact" className="text-base font-semibold leading-7 text-neutral-900 hover:text-primary-600">
                Kontakt <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}