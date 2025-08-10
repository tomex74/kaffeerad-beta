import Link from 'next/link'

const coffeeExperiences = [
  {
    title: 'Handverlesene Röstungen',
    subtitle: 'Vom Bauern zur Bohne',
    description: 'Unsere Kaffee-Experten reisen persönlich zu den besten Plantagen der Welt. Jede Bohne wird einzeln geprüft, langsam geröstet und mit Leidenschaft perfektioniert.',
    highlight: 'Single Origin Spezialitäten',
    visual: 'coffee-beans'
  },
  {
    title: 'Unvergessliche Events',
    subtitle: 'Ihr besonderer Moment',
    description: 'Verwandeln Sie jeden Anlass in ein sinnliches Kaffeeerlebnis. Von intimen Hochzeiten bis zu Firmenevents - wir kreieren maßgeschneiderte Kaffee-Zeremonien.',
    highlight: 'Mobile Espresso-Bar',
    visual: 'barista'
  },
  {
    title: 'Berlin Authentizität',
    subtitle: 'Urbane Kaffeekultur',
    description: 'Mitten im pulsierenden Herzen Berlins entstehen unsere Kreationen. Hier treffen italienische Espresso-Tradition auf Berliner Kreativität und Leidenschaft.',
    highlight: 'Lokale Kaffee-Community',
    visual: 'berlin-cafe'
  }
]

const customerStories = [
  {
    name: 'Dr. Sarah Weber',
    role: 'CEO, Tech Startup',
    content: 'KaffeeRad verwandelte unser Produktlaunch in ein unvergessliches Erlebnis. Unsere Investoren sprechen heute noch von der perfekten Kaffee-Zeremonie.',
    location: 'Prenzlauer Berg',
    experience: 'Corporate Event',
    rating: 5
  },
  {
    name: 'Michael & Julia',
    role: 'Brautpaar 2024',
    content: 'An unserem Hochzeitstag kreierte KaffeeRad pure Magie. Die persönliche Espresso-Bar war das Highlight - unsere Gäste sind noch immer begeistert.',
    location: 'Charlottenburg',
    experience: 'Hochzeit',
    rating: 5
  },
  {
    name: 'Anna Müller',
    role: 'Café Besitzerin',
    content: 'Als Café-Inhaberin erkenne ich wahre Kaffee-Leidenschaft. KaffeeRad übertrifft selbst meine höchsten Ansprüche - authentische Berliner Kaffeekultur.',
    location: 'Kreuzberg',
    experience: 'B2B Partnership',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div style={{backgroundColor: '#faf8f5'}}>
      {/* Hero section */}
      <div className="relative min-h-screen hero-coffee-bg flex items-center justify-center overflow-hidden">
        {/* Coffee steam animation */}
        <div className="absolute top-20 left-1/4 w-1 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="absolute top-16 right-1/3 w-1 h-24 opacity-15">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 sm:px-12 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-white leading-tight tracking-tight">
              KaffeeRad
              <span className="block text-amber-200 text-4xl sm:text-6xl lg:text-7xl mt-6 font-light">Berlin</span>
            </h1>
            
            <div className="mt-16 space-y-6">
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                Wo Leidenschaft auf Perfektion trifft
              </p>
              
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Authentische Berliner Kaffeekultur · Handverlesene Röstungen · Unvergessliche Erlebnisse
              </p>
            </div>
            
            <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/offerings" className="coffee-button px-12 py-5 text-lg">
                Unsere Röstungen entdecken
              </Link>
              <Link href="/events" className="coffee-button-outline px-12 py-5 text-lg text-white border-white/60 hover:bg-white/10">
                Event anfragen
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating coffee beans */}
        <div className="absolute top-1/4 left-12 w-3 h-4 bg-yellow-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-16 w-2 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-3 bg-yellow-600 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Coffee Experiences section */}
      <div className="py-24 coffee-texture">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-800 mb-6">
              Kaffee ist unsere Kunst
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Jede Tasse erzählt eine Geschichte von Leidenschaft, Handwerkskunst und der endlosen Suche nach dem perfekten Geschmack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeExperiences.map((experience, index) => (
              <div key={experience.title} className="coffee-card group">
                <div className="mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm font-medium">
                    {experience.highlight}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-medium text-stone-800 mb-3">
                  {experience.title}
                </h3>
                
                <p className="text-amber-700 mb-4 font-medium">
                  {experience.subtitle}
                </p>
                
                <p className="text-stone-600 leading-relaxed mb-6">
                  {experience.description}
                </p>
                
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors group"
                >
                  Mehr erfahren 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Berlin Heritage section */}
      <div className="relative bg-stone-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 to-stone-700/30"></div>
        <div className="relative container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="bg-amber-200 text-stone-800 px-4 py-2 rounded-md text-sm font-medium tracking-wide">
                  Seit 2020 in Berlin
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-6">
                Unsere Leidenschaft für Kaffee
              </h2>
              <p className="text-lg text-stone-200 leading-relaxed mb-6">
                Was als kleine Leidenschaft in einem Berliner Hinterhof begann, ist heute zu einer der 
                angesehensten Kaffeeröstereien der Hauptstadt geworden.
              </p>
              <p className="text-stone-300 leading-relaxed mb-8">
                Unsere Philosophie: Perfektion durch Reduktion. Wir konzentrieren uns auf das 
                Wesentliche - außergewöhnliche Qualität, authentische Röstkunst und tiefe, 
                persönliche Verbindungen zu jedem Kunden.
              </p>
              <Link href="/about" className="coffee-button">
                Unsere Geschichte entdecken
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-medium text-stone-800 mb-2">Unsere Rösterei</h3>
                    <p className="text-lg text-stone-600 mb-8">Berlin Mitte</p>
                    <div className="flex justify-center space-x-3">
                      <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
                      <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Stories section */}
      <div className="py-24 bg-stone-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-800 mb-6">
              Geschichten unserer Kaffee-Familie
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Echte Menschen. Echte Erlebnisse. Echte Begeisterung für außergewöhnlichen Kaffee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={story.name} className="coffee-card h-full">
                <div className="mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm font-medium">
                    {story.experience}
                  </span>
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(story.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-stone-700 italic leading-relaxed mb-6">
                  &ldquo;{story.content}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-stone-200 pt-4">
                  <h4 className="font-medium text-stone-800 mb-1">{story.name}</h4>
                  <p className="text-stone-600 text-sm mb-2">{story.role}</p>
                  <p className="text-stone-500 text-sm">{story.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-stone-600 mb-6">
              Werden Sie Teil unserer Kaffee-Community
            </p>
            <Link href="/contact" className="coffee-button">
              Ihr Event planen
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA section */}
      <div className="relative hero-coffee-bg py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        <div className="relative container max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-8">
            Bereit für pure Kaffee-Leidenschaft?
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            Ob intimes Dinner, Firmen-Event oder Ihre Traumhochzeit - wir kreieren unvergessliche 
            Kaffee-Erlebnisse, die Ihre Gäste noch Jahre später berühren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact" className="coffee-button px-8 py-4">
              Ihr Event planen
            </Link>
            <Link href="/offerings" className="coffee-button-outline px-8 py-4 text-white border-white/60 hover:bg-white/10">
              Unsere Röstungen entdecken
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-2">24h Antwortzeit</h3>
              <p className="text-white/80 text-sm">Schnelle, persönliche Beratung</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-2">Premium Qualität</h3>
              <p className="text-white/80 text-sm">Handverlesene Spezialitäten</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-2">Mit Leidenschaft</h3>
              <p className="text-white/80 text-sm">Authentische Berliner Tradition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}