import NavbarSimple from '@/components/navbarsimple/NavbarSimple'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {

    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
      ];

  return (
    <div>
        <NavbarSimple/>
        <div>
      {/* Heading */}
      <div className="mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center">Gallery Smudge Painting</h1>
        <p className="text-center mt-3">I created Smudge Painting Portrait without AI using Photoshop. However, now that AI has developed, I stopped because the market demand has decreased.</p>
      </div>

      {/* Gallery */}
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map((image, index) => (
          <div key={index} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt={`Gallery Smudge ${index + 1}`}
                src={`/asset/gallery_smudge/${image}`} // Path ke folder public/assets/gallery_smudge
                className="block h-full w-full rounded-lg object-cover object-center"
                width={500} // Atur ukuran gambar sesuai kebutuhan
                height={500} // Atur ukuran gambar sesuai kebutuhan
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