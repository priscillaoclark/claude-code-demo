import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bio - Rocco the Guitar Playing Corgi',
  description: 'Learn about Rocco\'s journey from a small Welsh village to international stardom as the world\'s most talented guitar-playing corgi.',
};

export default function BioPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Meet Rocco the Guitar Corgi</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">The Beginning</h2>
          <p className="text-foreground/80">
            Born in a small Welsh village, Rocco wasn&apos;t like other corgis. While his siblings chased sheep, 
            Rocco was mesmerized by the sound of his owner&apos;s old acoustic guitar gathering dust in the corner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Musical Journey</h2>
          <p className="text-foreground/80">
            At just 6 months old, Rocco began pawing at guitar strings, creating his first &quot;compositions.&quot; 
            His natural rhythm and surprising dexterity caught the attention of local musicians, who began 
            teaching him proper techniques. By his first birthday, Rocco could play simple melodies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Rise to Fame</h2>
          <p className="text-foreground/80">
            Rocco&apos;s big break came when a video of him playing &quot;Wonderwall&quot; went viral. Within weeks, 
            he had millions of followers and invitations to perform at major venues. Despite his fame, 
            Rocco remains a humble pup who just loves making music.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Fun Facts</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li>Favorite genre: Blues and classic rock</li>
            <li>Signature move: The &quot;Corgi Slide&quot; during guitar solos</li>
            <li>Favorite treat: Peanut butter cookies (given after performances)</li>
            <li>Dream collaboration: Playing with Carlos Santana</li>
            <li>Hidden talent: Can also play the ukulele</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Philosophy</h2>
          <p className="text-foreground/80 italic">
            &quot;Music is the universal language, and every woof has a melody. I just want to share the joy 
            that music brings me with everyone - human or canine!&quot; - Rocco
          </p>
        </section>
      </div>
    </main>
  );
}