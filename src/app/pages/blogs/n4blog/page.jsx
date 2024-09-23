"use client"

import Image from 'next/image';

import Header from "@/components/header/page";
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N4blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  const sections = [
    {
      title: 'Communicating Your Vision',
      items: [
        'Researching Styles: Look at various tattoo styles and artists to find the look you want. Gather images and ideas that inspire you.',
        'Preparing Your Ideas: Create a mood board or sketch to help convey your vision. Be clear about elements like size, placement, and color.',
        'Consulting with Your Artist: Schedule a consultation to discuss your ideas. Be open to feedback and suggestions from the artist.',
      ],
    },
    {
      title: 'The Design Process',
      items: [
        'Design Drafts: Your artist will create a design draft based on your ideas. Review it carefully and provide feedback.',
        'Revisions: Discuss any changes or adjustments needed. Ensure the final design aligns with your vision before proceeding.',
        'Understanding the Timeline: Ask about the expected timeline for the design and tattooing process. Be prepared for possible revisions and scheduling changes.',
      ],
    },
    {
      title: 'The Tattooing Experience',
      items: [
        'What to Expect: Understand the tattooing process, including the pain levels, duration, and aftercare instructions.',
        'Being Comfortable: Communicate with your artist about any concerns or discomfort during the session. Comfort and safety are crucial.',
        'Final Touches: Review the final result and ensure it meets your expectations. Discuss any touch-ups if needed.',
      ],
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <Header navigation={navigation} />
      <div className="pt-34">
        <TitleSection
          title="A guide to effective collaboration with your tattoo artist"
          subtitle="From Concept to Canvas: How to Work with Your Tattoo Artist to Bring Your Vision to Life"
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
                  “Collaborating with your tattoo artist is a crucial step in bringing your tattoo vision to life. This guide covers how to effectively communicate your ideas, what to expect during the design process, and how to ensure that the final tattoo exceeds your expectations. Learn the key steps to working closely with your artist to transform your concepts into a stunning piece of body art.”
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
                src="/images/blogs/n4blog.webp"
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
                  <p className="text-justify text-gray-400">Effective collaboration with your tattoo artist is essential for achieving a tattoo that matches your vision. By communicating clearly, understanding the design process, and being prepared for the tattooing experience, you can ensure a successful outcome. Follow these tips to work closely with your artist and bring your tattoo ideas to life with confidence.</p>
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
