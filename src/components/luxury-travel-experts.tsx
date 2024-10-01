import Link from 'next/link'

export default function LuxuryTravelExperts() {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl mb-6">THE LUXURY TRAVEL EXPERTS</h2>
        <p className="text-sm md:text-base mb-8 leading-relaxed">
          The world is vast, full of wonders. But information engulfs us. See this, do that, don&apos;t miss this. It seems the more
          choice there is, the more overwhelmed we feel. What&apos;s more, you&apos;re never asked how you want to feel. In fact, you&apos;re
          rarely asked anything. That&apos;s not us. We are people. People who value human connection and thrive on connecting
          you to our vast world. A company of people renowned for planning remarkable and luxurious travel experiences.
        </p>
        <p className="text-sm md:text-base mb-8">
          So let&apos;s begin. Let&apos;s do something remarkable.
        </p>
        <Link 
          href="#"
          className="inline-block bg-black hover:bg-gray-800 text-white text-sm py-3 px-8 transition duration-300"
        >
          GET IN TOUCH
        </Link>
      </div>
    </section>
  )
}