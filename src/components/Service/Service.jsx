import Image from "next/image"

const Service = () => {
  return (
    <div className="bg-slate-100 py-8 flex flex-col justify-center items-center text-center w-full " id="service">
      <h2 className="text-5xl font-bold animate-bounce animate-infinite animate-ease-in z-0 mt-3">SERVICE</h2>
      <p className="mb-6 mt-3 text-gray-700 font-semibold">provides the following services</p>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 gap-y-3 lg:gap-y-10 mx-2">
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/webdep.gif"
            alt="Web Development"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">WEB DEVELOPMENT</p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/responsive.gif"
            alt="Responsive Web"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">RESPONSIVE WEB</p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/camera.gif"
            alt="photo session"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">PHOTO SESSION</p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/video.gif"
            alt="Video Editing"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">VIDEO EDITING</p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/marketing.gif"
            alt="Marketing Service"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">MARKETING SERVICE</p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white hover:bg-cyan-200 rounded-lg shadow-md">
          <Image
            src="/asset/icon/grapich.gif"
            alt="Design Graphic"
            width={250}
            height={250}
            className="rounded-lg"
            unoptimized
          />
          <p className="text-base mt-2 font-bold text-gray-600">DESIGN GRAPHIC</p>
        </div>
      </div>
    </div>
  )
}

export default Service