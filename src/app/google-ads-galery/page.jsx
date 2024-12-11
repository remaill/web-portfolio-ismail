import NavbarSimple from "@/components/navbarsimple/NavbarSimple"
import Image from "next/image"

const page = () => {
  return (
    <div>
      <NavbarSimple/>
    {/* Judul Gallery */}
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Gallery Ads Manager Account</h1>
      <p>Last updated in December 2023</p>
    </div>

    {/* Kontainer Gallery */}
    <div className=" p-2 md:p-10">
      <div className="">
        {/* Daftar Gambar */}
        {["Screenshot_2.jpg", "Screenshot_3.jpg", "Screenshot_4.jpg", "Screenshot_5.jpg", "Screenshot_6.jpg", "Screenshot_7.jpg"].map((image, index) => (
          <div key={index} className="w-full flex-wrap mb-8 rounded-md shadow-sm">
            <div className="w-full">
              <Image
                alt={`Gallery Image ${index + 1}`}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`/asset/gallery_ads/${image}`}
                width={5000} // Atur sesuai kebutuhan
                height={5000} // Atur sesuai kebutuhan
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