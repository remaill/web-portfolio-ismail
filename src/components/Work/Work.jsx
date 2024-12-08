import Image from "next/image"
import Link from "next/link"

const Work = () => {
  return (
    <div className="bg-slate-200 py-10 flex flex-col justify-center items-center z-0 text-center w-full" id="work">
      <h1 className="text-5xl font-bold">WORK & PROJECT</h1>
      <p className="mb-10 mt-3 text-gray-700 font-semibold">some things i do</p>
      <div className="p-5 flex flex-wrap justify-center items-center gap-5 gap-y-10">
        
        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/image/animelist.jpg"
                alt="Animelist"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Anime List Website
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              AnimeList, built with Next.js, is a learning initiative focused on integrating APIs and MySQL using Prisma ORM, enhancing my skills in data management and backend integration.
              </p>
              <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">* Note: The login feature is no longer functional due to the database server expiration.</p>
            </div>
            <div className="p-6 pt-0">
              <a href="https://remaill.github.io/website-vitagerd/" target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Google Ads & Meta Ads */}
        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/gallery_ads/ads.jpg"
                alt="Google Ads & Meta Ads"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Google Ads & Meta Ads
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              I specialize in managing and optimizing paid advertising campaigns on Google Ads and Meta Ads platforms, with a focus on maximizing ROI through strategic audience targeting, keyword optimization, performance analysis, and continuous campaign refinement.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={"/google-ads-galery"} target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/image/camera.jpg"
                alt="Photograpy"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Photograpy
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Photography in various genres such as street photography, landscapes, portraits, event documentation, and cosplay photos.
              </p>
            </div>
            <div className="p-6 pt-0">
              <a href="https://www.instagram.com/ilxstry/" target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Smudge Painting */}
        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/gallery_smudge/11.jpg"
                alt="Smudge Painting"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Smudge Painting
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              I created Smudge Painting Portrait without AI using Photoshop. However, now that AI has developed, I stopped because the market demand has decreased.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={"/gallery-smudge"} target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Web Search Movie */}
        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/image/movies.jpg"
                alt="Web Search Movie"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Web Search Movie
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                I created this website using React.js just for learning purposes.
              </p>
            </div>
            <div className="p-6 pt-0">
              <a href="https://web-movie-search.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div>
          <div className="flex sm:w-96 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg relative">
              <Image
                src="/asset/gallery_design/16.jpg"
                alt="Graphic Design"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Graphic Design
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                I create content for paid advertising on Google Ads & Meta Ads.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={"/content-image"} target="_blank" rel="noopener noreferrer">
                <button
                  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                  type="button"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work