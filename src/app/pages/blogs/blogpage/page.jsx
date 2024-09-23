"use client"

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header/page';
import { TitleSection } from '@/components/titleSection/page';
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';

export default function Blog() {
  const navigation = [
    { id: '1', name: 'Home', href: '/' },
    { id: '2', name: 'About', href: '/#about' },
    { id: '3', name: 'Gallery', href: '/#gallery' },
    { id: '4', name: 'Blog', href: '/pages/blogs/blogpage' },
    { id: '5', name: 'Contact', href: '/#contact' },
    { name: 'FAQs', href: '/#faqs' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Minimalist Tattoos: How to Choose the Perfect Design for Your First Ink',
      description: 'A comprehensive guide for first-time tattoo enthusiasts',
      href: '/pages/blogs/n1blog',
      imageSrc: '/images/blogs/n1blog.webp',
      imageAlt: '',
    },
    {
      id: 2,
      title: 'The Art of Delicate Tattoos: Trends and Techniques for 2024',
      description: 'Explore the latest in delicate tattoo trends and techniques',
      href: '/pages/blogs/n2blog',
      imageSrc: '/images/blogs/n2blog.webp',
      imageAlt: '',
    },
    {
      id: 3,
      title: 'Tattoo Aftercare 101: Essential Tips for Keeping Your Ink Fresh and Beautiful',
      description: 'Your guide to maintaining vibrant and healthy tattoos',
      href: '/pages/blogs/n5blog',
      imageSrc: '/images/blogs/n5blog.webp',
      imageAlt: '',
    },
    {
      id: 4,
      title: 'From Concept to Canvas: How to Work with Your Tattoo Artist to Bring Your Vision to Life',
      description: 'A guide to effective collaboration with your tattoo artist',
      href: '/pages/blogs/n3blog',
      imageSrc: '/images/blogs/n4blog.webp',
      imageAlt: '',
    },
    {
      id: 5,
      title: 'Is It Possible to Remove a Tattoo?',
      description: 'Learn everything about the most effective method of tattoo removal.',
      href: '/pages/blogs/n4blog',
      imageSrc: '/images/blogs/n3blog.webp',
      imageAlt: '',
    },
    {
      id: 6,
      title: 'Pain-Free Tattoos',
      description: 'Discover the methods to achieve a pain-free tattooing experience, with a focus on the effectiveness of anesthetic creams.',
      href: '/pages/blogs/n6blog',
      imageSrc: '/images/blogs/n6blog.webp',
      imageAlt: '',
    },
  ];

  return (
    <div>
      <Header navigation={navigation} />
      <div className="pt-34"> 
        <TitleSection
          title="Tattoo Universe Blog"
          subtitle="Guides, trends, and essential tips for tattoo enthusiasts"
          className=""
        />
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {articles.map((article) => (
            <div key={article.id} className="group relative">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                  <div className="w-full rounded-md bg-gold-500 bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    Read the Blog
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-100">
                <h3>
                  <Link href={article.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
              </div>
              <p className="mt-1 text-sm text-pink-200">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
