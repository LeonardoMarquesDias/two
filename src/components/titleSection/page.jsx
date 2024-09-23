export function TitleSection({ title, subtitle, className = '' }) {
  return (
    <div className="w-full bg-gradient-to-t from-gray-700 to-gray-800 mt-28 mb-8 sm:mt-32 sm:mb-12 border-t-2 border-gray-800">
      <div className="px-4 max-w-7xl w-full pt-8 pb-8 sm:pt-16 sm:pb-16 mx-auto text-left" data-aos="fade-right">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
          {title}
        </p>
        <h2 className="mt-2 text-justify text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-pink-200">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}
