"use client"

import Image from 'next/image';

import Header from "@/components/header/page";
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N3blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  const sections = [
    {
      title: 'Immediate Aftercare',
      items: [
        'Cleaning: Gently wash your tattoo with lukewarm water and mild, fragrance-free soap. Avoid scrubbing or using a washcloth.',
        'Applying Ointment: Apply a thin layer of a recommended tattoo ointment or moisturizer. Avoid overapplying as it can suffocate the skin.',
        'Avoiding Water Immersion: For the first few weeks, avoid soaking the tattoo in water. This includes baths, swimming pools, and hot tubs.',
      ],
    },
    {
      title: 'Long-Term Care',
      items: [
        'Moisturizing: Keep the tattoo moisturized with a fragrance-free lotion to prevent dryness and itching.',
        'Sun Protection: Apply sunscreen with a high SPF to protect the tattoo from sun exposure, which can fade the ink over time.',
        'Avoiding Irritants: Refrain from using harsh chemicals or exfoliants on the tattooed area to avoid irritation.',
      ],
    },
    {
      title: 'Common Issues and Solutions',
      items: [
        'Peeling and Itching: These are normal parts of the healing process. Avoid scratching and use moisturizer to alleviate itching.',
        'Infection Signs: If you notice redness, swelling, or discharge that is not clear, seek medical advice immediately as these may be signs of an infection.',
        'Fading: If your tattoo begins to fade significantly, consult your tattoo artist or a dermatologist for advice on touch-ups or treatments.',
      ],
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <Header navigation={navigation} />
      <div className="pt-34">
        <TitleSection
          title="Your guide to maintaining vibrant and healthy tattoos"
          subtitle="Tattoo Aftercare 101: Essential Tips for Keeping Your Ink Fresh and Beautiful"
        />
      </div>
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gold-200/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure className="border-l border-gold-500 pl-8" data-aos="fade-right">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-300">
                <p>
                  “Proper aftercare is crucial for maintaining the beauty and longevity of your tattoo. Our comprehensive guide covers essential tips for immediate and long-term care, including how to manage common issues like peeling, itching, and fading. Learn how to keep your tattoo fresh and vibrant with the right cleaning techniques, moisturizers, and sun protection strategies. Follow these guidelines to ensure your ink remains as stunning as the day you got it!”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  src="/hero.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-10 w-10 flex-none rounded-full"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gold-800">Vinicios Capobianco</div>
                  <div className="text-gray-400">Tattoo Artist</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-400 lg:col-span-7">
            <figure className="mt-16">
              <Image
                className="rounded-xl"
                src="/images/blogs/n3blog.webp"
                alt=""
                width={1280}
                height={720}
              />
            </figure>
            <article>
              <div className="mt-16 max-w-4xl mx-auto">
                {sections.map((section, index) => (
                  <section className="mb-8" key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-gold-800">{section.title}</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-100">
                      {section.items.map((item, idx) => (
                        <li className="text-justify text-gray-400" key={idx}><strong className="text-gray-300">{item.split(': ')[0]}:</strong> {item.split(': ')[1]}</li>
                      ))}
                    </ul>
                  </section>
                ))}
                <section className="mb-8">
                  <h2 className="text-2xl text-gold-800 font-semibold mb-4">Conclusion</h2>
                  <p className="text-justify text-gray-400">Proper aftercare is vital for keeping your tattoo looking fresh and vibrant. Follow these essential tips for immediate and long-term care to ensure your tattoo heals well and remains beautiful. From cleaning and moisturizing to sun protection and managing common issues, this guide provides all the information you need for effective tattoo maintenance.</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
