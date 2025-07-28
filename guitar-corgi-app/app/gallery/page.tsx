import { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery - Rocco the Guitar Playing Corgi',
  description: 'Browse photos of Rocco performing, practicing, and living his best musical life.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Gallery</h1>
      <GalleryClient />
    </main>
  );
}