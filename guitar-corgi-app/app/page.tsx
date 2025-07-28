import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Rocco
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-foreground/80">
            The Guitar-Playing Corgi
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/60 max-w-2xl mx-auto">
            From humble beginnings to international stardom, witness the incredible journey of the world&apos;s most talented musical canine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bio"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-colors text-lg"
            >
              Read My Story
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-full font-semibold transition-colors text-lg"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Scroll down">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Makes Rocco Special</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">🎸</div>
              <h3 className="text-xl font-semibold mb-3">Musical Genius</h3>
              <p className="text-foreground/70">
                Masters both acoustic and electric guitar with a repertoire spanning from classical to rock.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Natural Performer</h3>
              <p className="text-foreground/70">
                Captivates audiences worldwide with charismatic stage presence and infectious energy.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Humble Heart</h3>
              <p className="text-foreground/70">
                Despite fame, remains a loving companion who enjoys belly rubs as much as guitar solos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Rocco&apos;s Musical Journey</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Follow along as this talented corgi continues to break barriers and inspire music lovers everywhere.
          </p>
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-semibold transition-colors text-lg"
          >
            Explore the Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}