import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';
import Image from 'next/image';
import Header from '@/components/header/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N1blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ];

  const sections = [
    {
      title: 'Why Choose Minimalist Tattoos?',
      items: [
        'Elegance in Simplicity: Minimalist tattoos are known for their clean lines and subtle design, which makes them a great choice for those who prefer understated yet stylish body art.',
        'Personal Significance: These designs often hold personal meanings, allowing for a meaningful tattoo that remains timeless and unique to you.',
        'Versatility: Minimalist tattoos can be easily placed on various parts of the body, and their simple nature makes them easy to incorporate into future tattoo plans.'
      ]
    },
    {
      title: 'How to Choose Your Minimalist Tattoo Design',
      items: [
        'Explore Minimalist Art: Look through online galleries and social media platforms for inspiration. Minimalist tattoos often feature geometric shapes, fine lines, and subtle symbols.',
        'Consult with Your Artist: Discuss your ideas with your tattoo artist. They can offer advice on design modifications and placements that align with your vision.',
        'Think About Placement: Choose a location on your body that complements the design. Smaller, delicate tattoos work well on the wrist, ankle, or behind the ear.'
      ]
    },
    {
      title: 'Finding the Right Tattoo Artist',
      items: [
        'Specialization Matters: Seek out artists who specialize in minimalist tattoos. Reviewing their portfolio will give you an idea of their skill level and style.',
        'Read Reviews: Check customer reviews and testimonials to gauge the artist’s reputation and client satisfaction.',
        'Schedule a Consultation: Meeting with the artist beforehand helps in discussing your design, understanding their process, and ensuring you are comfortable with their approach.'
      ]
    },
    {
      title: 'Preparing for Your Tattoo Appointment',
      items: [
        'Stay Hydrated: Drink plenty of water in the days leading up to your appointment to keep your skin in good condition.',
        'Avoid Alcohol: Refrain from consuming alcohol at least 24 hours before your tattoo session to minimize bleeding and ensure a smoother process.',
        'Rest Well: Ensure you get a good night is sleep before the appointment to be well-rested and relaxed.'
      ]
    },
    {
      title: 'Post-Tattoo Care Tips',
      items: [
        'Follow Aftercare Instructions: Adhere to the care guidelines provided by your artist to promote healing and preserve the quality of your tattoo.',
        'Keep It Clean: Gently clean the tattoo with mild soap and water, and apply the recommended ointment to keep it moisturized.',
        'Protect from Sunlight: Avoid exposing the tattoo to direct sunlight and refrain from swimming until it has fully healed.'
      ]
    }
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <Header navigation={navigation} />
      <div className="pt-34">
        <TitleSection
          title="A comprehensive guide for first-time tattoo enthusiasts"
          subtitle="Minimalist Tattoos: How to Choose the Perfect Design for Your First Ink"
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
                  “Are you considering a minimalist tattoo for the first time? Our comprehensive guide covers everything you need to know to select the perfect design, from understanding the art form to choosing the right artist and caring for your new tattoo. Dive in to ensure your first tattoo is everything you envision.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="mt-1 h-10 w-10 flex-none rounded-full">
                  <Image
                    src="/hero.jpg"
                    alt="Lara Amada"
                    width={40}
                    height={40}
                    className="mt-1 h-10 w-10 flex-none rounded-full"
                  />
                </div>
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gold-800">Lara Amada</div>
                  <div className="text-gray-400">Tattoo Artist</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-400 lg:col-span-7">
            <figure className="mt-16">
              <Image
                className="rounded-xl"
                src="/images/blogs/n1blog.webp"
                alt="Minimalist Tattoo Guide"
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
                  <p className="text-justify text-gray-400">Choosing your first tattoo is an exciting journey. By understanding minimalist designs and preparing properly, you can ensure a positive and satisfying experience. Embrace the art and enjoy your unique tattoo with pride.</p>
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
