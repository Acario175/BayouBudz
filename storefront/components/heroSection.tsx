import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="body-font bg-white text-gray-600">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:px-24 md:py-10">
        <div className="mb-5 w-3/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            src="/images/BayouTrans.png"
            alt="hero"
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded object-cover object-center"
          />
        </div>
        <div className="md:mt-0   md:w-1.5/2 mb-16 mt-5 flex flex-col items-center text-center md:mb-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          {/* <h1 className="mb-3 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Bayou Budz
          </h1> */}
          {/* <Image
            src="/images/BayouTitle.jpeg"
            alt="hero"
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded object-cover object-center"
          /> */}
          <p className="md:pl-0  mb-8 pl-2 pr-2 leading-relaxed">
            Bayou Budz is a top-quality cannabis clothing and apparel brand that captures the
            essence of the vibrant and laid-back lifestyle associated with cannabis culture.
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex rounded border-0 bg-[#90893C] px-6 py-2 text-lg text-white hover:bg-emerald-600 focus:outline-none"
            >
              Start Shopping
            </Link>
            <Link
              href="#"
              className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
