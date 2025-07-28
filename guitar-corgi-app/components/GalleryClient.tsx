'use client';

import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/rocco-stage.jpg',
    alt: 'Rocco performing on stage',
    caption: 'Live at Madison Square Garden'
  },
  {
    id: 2,
    src: '/images/rocco-studio.jpg',
    alt: 'Rocco in the recording studio',
    caption: 'Recording the new album'
  },
  {
    id: 3,
    src: '/images/rocco-acoustic.jpg',
    alt: 'Rocco with acoustic guitar',
    caption: 'Unplugged session'
  },
  {
    id: 4,
    src: '/images/rocco-electric.jpg',
    alt: 'Rocco shredding on electric guitar',
    caption: 'Rock and roll mode'
  },
  {
    id: 5,
    src: '/images/rocco-fans.jpg',
    alt: 'Rocco meeting fans',
    caption: 'Meet and greet after the show'
  },
  {
    id: 6,
    src: '/images/rocco-practice.jpg',
    alt: 'Rocco practicing',
    caption: 'Daily practice routine'
  }
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-card border border-border transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative bg-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-secondary">Image placeholder</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-foreground/80">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <div className="relative aspect-video bg-card rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-secondary text-xl">Large image placeholder</p>
              </div>
            </div>
            <p className="text-center mt-4 text-lg">{selectedImage.caption}</p>
            <p className="text-center text-sm text-foreground/60 mt-2">Click anywhere to close</p>
          </div>
        </div>
      )}
    </>
  );
}