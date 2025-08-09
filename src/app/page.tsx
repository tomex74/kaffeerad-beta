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
    <div style={{backgroundColor: '#fffcf8'}}>
      {/* Hero section */}
      <div className="relative min-h-screen hero-coffee-bg flex items-center justify-center overflow-hidden">
        {/* Coffee steam animation */}
        <div className="absolute top-20 left-1/4 w-1 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="absolute top-16 right-1/3 w-1 h-24 opacity-15">
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 sm:px-12">
          <div className="animate-fade-in">
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-tight">
              KaffeeRad
              <span className="block text-yellow-400 text-5xl sm:text-7xl lg:text-8xl mt-4 italic">Berlin</span>
            </h1>
            
            <p className="mt-12 text-xl sm:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light">
              <em>Wo Leidenschaft auf Perfektion trifft</em>
            </p>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Authentische Berliner Kaffeekultur. Handverlesene Röstungen. Unvergessliche Erlebnisse.
            </p>
            
            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/offerings" className="coffee-button text-xl">
                Entdecke unsere Welt
              </Link>
              <Link href="/events" className="coffee-button-outline text-xl">
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
      <div className="py-32 coffee-texture">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-amber-900 mb-8">
              Kaffee ist unsere <em className="text-yellow-600">Kunst</em>
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Jede Tasse erzählt eine Geschichte von Leidenschaft, Handwerkskunst und der endlosen Suche nach dem perfekten Geschmack.
            </p>
          </div>
          
          <div className="space-y-32">
            {coffeeExperiences.map((experience, index) => (
              <div key={experience.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-block mb-4">
                    <span className="bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                      {experience.highlight}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-coffee-800 mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-gold-700 mb-6 italic">
                    {experience.subtitle}
                  </p>
                  <p className="text-lg text-espresso-600 leading-relaxed mb-8">
                    {experience.description}
                  </p>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-coffee-700 font-semibold hover:text-coffee-600 transition-colors group"
                  >
                    Mehr erfahren 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="coffee-card h-80 flex items-center justify-center bg-gradient-to-br from-coffee-100 to-cream-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-coffee-500/20 to-espresso-500/20"></div>
                      <div className="relative text-center">
                        <div className="text-6xl mb-4 text-coffee-600">
                          {experience.visual === 'coffee-beans' && '☕'}
                          {experience.visual === 'barista' && '👨‍🍳'}
                          {experience.visual === 'berlin-cafe' && '🏛️'}
                        </div>
                        <p className="text-lg font-medium text-coffee-700">
                          {experience.visual === 'coffee-beans' && 'Premium Röstkunst'}
                          {experience.visual === 'barista' && 'Meisterhafte Zubereitung'}
                          {experience.visual === 'berlin-cafe' && 'Berliner Tradition'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative coffee rings */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-gold-300/30 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-coffee-300/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Berlin Heritage section */}
      <div className="relative bg-espresso-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/50 to-coffee-900/50"></div>
        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="bg-gold-500 text-espresso-900 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
                  Seit 2020 in Berlin
                </span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-cream-50 mb-8">
                Unsere <em className="text-gold-400">Leidenschaft</em> für Kaffee
              </h2>
              <p className="text-xl text-cream-200 leading-relaxed mb-8">
                Was als kleine Leidenschaft in einem Berliner Hinterhof begann, ist heute zu einer der 
                angesehensten Kaffeeröstereien der Hauptstadt geworden.
              </p>
              <p className="text-lg text-cream-300 leading-relaxed mb-10">
                Unsere Philosophie: Perfektion durch Reduktion. Wir konzentrieren uns auf das 
                Wesentliche - außergewöhnliche Qualität, authentische Röstkunst und tiefe, 
                persönliche Verbindungen zu jedem Kunden.
              </p>
              <Link href="/about" className="coffee-button text-lg">
                Unsere Geschichte entdecken
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-coffee-500/30 to-espresso-600/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6 text-gold-400">🏭</div>
                    <h3 className="text-2xl font-bold text-cream-50 mb-2">Unsere Rösterei</h3>
                    <p className="text-lg text-cream-300">Berlin Mitte</p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <div className="w-12 h-12 bg-gold-500/30 rounded-full animate-pulse"></div>
                      <div className="w-8 h-8 bg-coffee-400/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-6 h-6 bg-espresso-300/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Berlin landmarks */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🏛️</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-coffee-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Stories section */}
      <div className="py-32 bg-gradient-to-br from-cream-100 to-cream-200">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-coffee-800 mb-8">
              Geschichten unserer <em className="text-gold-600">Kaffee-Familie</em>
            </h2>
            <p className="text-xl text-espresso-600 max-w-3xl mx-auto leading-relaxed">
              Echte Menschen. Echte Erlebnisse. Echte Begeisterung für außergewöhnlichen Kaffee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {customerStories.map((story, index) => (
              <div key={story.name} className="relative group">
                <div className="coffee-card relative h-full">
                  {/* Experience badge */}
                  <div className="absolute -top-4 left-6 z-10">
                    <div className="bg-gold-500 text-espresso-900 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                      {story.experience}
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6 pt-8">
                    {[...Array(story.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-gold-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg text-espresso-700 italic leading-relaxed mb-8 text-center relative">
                    <span className="text-5xl text-gold-400 absolute -top-2 -left-2 font-serif">&ldquo;</span>
                    <span className="relative z-10">{story.content}</span>
                    <span className="text-5xl text-gold-400 absolute -bottom-4 -right-2 font-serif">&rdquo;</span>
                  </blockquote>
                  
                  {/* Author */}
                  <div className="text-center border-t border-coffee-200 pt-6">
                    <h4 className="text-xl font-bold text-coffee-800 mb-2">{story.name}</h4>
                    <p className="text-espresso-600 mb-2">{story.role}</p>
                    <div className="flex items-center justify-center text-sm text-coffee-500">
                      <span className="mr-2">📍</span>
                      <span>{story.location}</span>
                    </div>
                  </div>
                  
                  {/* Decorative coffee cup */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-coffee-500 rounded-full opacity-20 transform rotate-12"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-espresso-600 mb-8 text-lg">
              Werden Sie Teil unserer Kaffee-Community
            </p>
            <Link href="/contact" className="coffee-button text-lg">
              Ihr Event planen
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA section */}
      <div className="relative hero-coffee-bg py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-coffee-800/60 to-coffee-700/40"></div>
          {/* Coffee steam animations */}
          <div className="absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse opacity-30"></div>
          <div className="absolute top-10 right-1/3 w-1 h-32 bg-gradient-to-t from-transparent via-white/15 to-transparent animate-pulse opacity-20" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-28 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse opacity-25" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative container text-center">
          <h2 className="font-display text-5xl sm:text-7xl font-bold text-cream-50 mb-8">
            Bereit für <em className="text-gold-400">pure Kaffee-Leidenschaft</em>?
          </h2>
          
          <p className="text-xl sm:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed mb-12">
            Ob intimes Dinner, Firmen-Event oder Ihre Traumhochzeit - wir kreieren unvergessliche 
            Kaffee-Erlebnisse, die Ihre Gäste noch Jahre später berühren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Link href="/contact" className="coffee-button text-xl">
              🎭 Ihr Event planen
            </Link>
            <Link href="/offerings" className="coffee-button-outline text-xl text-cream-50 border-cream-50 hover:bg-cream-50 hover:text-coffee-800">
              ☕ Unsere Röstungen entdecken
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4 text-gold-400">⚡</div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">24h Antwortzeit</h3>
              <p className="text-cream-300">Schnelle, persönliche Beratung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-gold-400">🏆</div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">Premium Qualität</h3>
              <p className="text-cream-300">Handverlesene Spezialitäten</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-gold-400">❤️</div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">Mit Leidenschaft</h3>
              <p className="text-cream-300">Authentische Berliner Tradition</p>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-8 w-4 h-5 bg-gold-500/60 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-1/4 right-12 w-3 h-4 bg-gold-400/50 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-3 bg-gold-600/40 rounded-full animate-bounce opacity-50" style={{animationDelay: '2.5s'}}></div>
      </div>
    </div>
  )
}