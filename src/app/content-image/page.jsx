import NavbarSimple from '@/components/navbarsimple/NavbarSimple'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {

    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.png",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "16.jpg",
        "15.png",
      ];

  return (
    <div>
        <NavbarSimple/>
        <div>
      {/* Heading */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center">Gallery Graphic Design</h1>
      </div>

      {/* Gallery */}
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map((image, index) => (
          <div key={index} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt={`Gallery Design ${index + 1}`}
                src={`/asset/gallery_design/${image}`} // Pastikan file ada di public/assets/gallery_design/
                className="block h-full w-full rounded-lg object-cover object-center"
                width={500} // Ganti ukuran sesuai kebutuhan
                height={500} // Ganti ukuran sesuai kebutuhan
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default page