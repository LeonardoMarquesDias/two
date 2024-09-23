"use client"

import Image from 'next/image';

import Header from "@/components/header/page";
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N2blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  const sections = [
    {
      title: 'Emerging Trends in Delicate Tattoos',
      items: [
        'Minimalist Designs: The trend towards subtle, minimalist tattoos is growing. These designs focus on simplicity and elegance, often using fine lines and small details.',
        'Soft Color Palettes: Delicate tattoos are increasingly incorporating soft, muted colors instead of bold, vibrant hues to create a gentle, refined appearance.',
        'Nature-Inspired Themes: Floral and natural elements are becoming popular in delicate tattoo art, offering a serene and organic feel to the designs.',
      ],
    },
    {
      title: 'Techniques for Precision and Elegance',
      items: [
        'Fine Line Work: This technique involves using very thin lines to create intricate and detailed designs, ideal for delicate tattoos.',
        'Dotwork: Dotwork creates shading and texture through a series of dots, adding depth and subtlety to minimalistic designs.',
        'Watercolor Effects: Combining watercolor techniques with delicate outlines for a soft, ethereal look that blends beautifully with minimalistic styles.',
      ],
    },
    {
      title: 'Choosing the Right Artist and Studio',
      items: [
        'Specialization: Look for tattoo artists who specialize in delicate and minimalist tattoos. Their expertise ensures precision and adherence to the latest trends.',
        'Portfolio Review: Examine the artist’s portfolio for examples of delicate work to assess their skill and style.',
        'Studio Hygiene: Ensure the studio maintains high standards of cleanliness and safety to ensure a comfortable and safe tattooing experience.',
      ],
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <Header navigation={navigation} />
      <div className="pt-34">
        <TitleSection
          title="The Art of Delicate Tattoos: Trends and Techniques for 2024"
          subtitle="Explore the latest in delicate tattoo trends and techniques"
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
                  “Dive into the world of delicate tattoos with our guide to the latest trends and techniques for 2024. Discover how minimalist designs, soft color palettes, and nature-inspired themes are shaping the future of tattoo art. Learn about precision techniques like fine line work and dotwork, and find the best practices for choosing an artist and studio that specializes in these elegant styles. Embrace the art of subtle beauty with confidence and creativity!”
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
                src="/images/blogs/n2blog.webp"
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
                  <p className="text-justify text-gray-400">Explore the world of delicate tattoos with our insights into the latest trends and techniques for 2024. From minimalist designs to soft color palettes and innovative techniques, discover how you can achieve a beautiful and elegant tattoo. Choose the right artist and studio to bring your vision to life with precision and style.</p>
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
