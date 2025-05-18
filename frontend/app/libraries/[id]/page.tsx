import Image from "next/image";
import Navbar from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import LocationCard from "@/components/library_listing3/location";
import InputLibrary from "@/components/input";
import LibraryFeatures from "@/components/library_listing3/library_features";
import LibraryGallery from "@/components/library_listing3/library_gallery";
import LibraryRules from "@/components/library_listing3/library_rules";
import Footer from "@/components/footer";
import Link from "next/link";

// Ensure the PageProps type is correctly defined
type PageProps = {
  params: {
    id: string;
    name: string;
  };
};

export default function Page({ params }: PageProps) {
  const { id, name } = params;

  return (

    <div className="bg-[#ECE3DA] max-w-[1920px] lg:overflow-x-auto ">
      
      <div className="main_section relative px-3 sm:px-5 md:px-8 lg:px-[10%] bg-[#ECE3DA] min-h-screen w-full">

        {/* library_information */}
        <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 p-2 sm:p-3 md:p-4 relative rounded-md bg-white mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          {/* about study hub */}
          <div className="about_image relative">
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[230px] relative rounded-md overflow-hidden">
              <Image
                src="/listings3/library1.png"
                alt="lib"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 1000px"
                priority
              />
            </div>

            {/* Responsive Info Box */}
            <div className="w-[80%] p-2 sm:w-[75%] md:w-[90%] lg:w-[75%] mx-auto absolute left-0 right-0 top-[75%] sm:top-[90%] z-10 shadow-md rounded-lg text-black bg-white flex">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[1px] p-1 rounded-md">
                {/* Location */}
                <div className="flex gap-1 bg-white rounded-md">
                  <Image
                    src="/listings3/location.png"
                    alt="Location"
                    width={16}
                    height={20}
                    className="mt-0.5 flex-shrink-0 w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                  />
                  <div className="min-w-0 ">
                    <p className="text-[10px] md:text-[10px] lg:text-xs font-semibold truncate">
                      University, District
                    </p>
                    <p className="text-[8px] md:text-[8px] lg:text-[10px] text-gray-400">2 km away</p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-1 bg-white rounded-md">
                  <Image
                    src="/listings3/clock.png"
                    alt="Time"
                    width={16}
                    height={16}
                    className="mt-0.5 flex-shrink-0 w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[10px] lg:text-xs font-semibold truncate">
                      8:00 am to 9:00 pm
                    </p>
                    <p className="text-[8px] md:text-[8px] lg:text-[10px] text-gray-400">Closes in 5 hours</p>
                  </div>
                </div>

                {/* Entry Info */}
                <div className="flex items-start gap-1 bg-white rounded-md">
                  <Image
                    src="/listings3/tag.png"
                    alt="Entry"
                    width={16}
                    height={16}
                    className="mt-0.5 flex-shrink-0 w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[10px] lg:text-xs font-semibold truncate">
                      Free Entry
                    </p>
                    <p className="text-[8px] md:text-[8px] lg:text-[10px] text-gray-400">Membership available</p>
                  </div>
                </div>

                {/* Booking & Seats */}
                <div className="flex flex-start items-center p-1 gap-2 rounded-md">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/listings3/seats.png"
                      alt="Seats"
                      width={16}
                      height={16}
                      className="flex-shrink-0 w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                    />
                    <p className="text-[10px] md:text-[10px] lg:text-xs font-light text-[#099C6F] whitespace-nowrap">
                      Seats Available
                    </p>
                  </div>

                  <Link href={`/libraries/${params.id}/${params.name}`} className="w-full sm:w-auto md:w-full lg:w-auto">
                    <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-full text-white bg-gray-800 hover:bg-gray-700 hover:underline cursor-pointer text-nowrap transition-colors text-[10px] md:text-[11px] lg:text-[12px] font-medium">
                      Book Now
                      <ArrowRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Info Part */}
            <div className="info2 absolute w-full top-[15%] sm:top-[10px] md:top-[10%] lg:top-[15%] p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="left_part w-full">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-1 sm:px-2 md:px-4">
                  <div className="flex items-center gap-1 bg-white px-2 py-1 sm:px-4 sm:py-1 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-medium text-green-700">
                    <Image src="/listings3/open.png" alt="Open Icon" width={12} height={12} />
                    Open Now
                  </div>

                  <div className="bg-[#9DCFF3] px-2 py-1 sm:px-4 sm:py-1 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-800">
                    Public Library
                  </div>
                </div>

                {/* Title */}
                <div className="heading mt-1 sm:mt-2">
                  <h1 className="font-urbanist font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[56.19px] leading-tight text-white">
                    Study Hub
                  </h1>
                </div>

                {/* Rating and Like */}
                <div className="flex flex-col sm:flex-row w-full justify-between items-start relative sm:items-center mt-1 sm:mt-0">
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-800">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex text-yellow-400 text-base sm:text-lg">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                      </div>
                      <p className="text-white text-xs sm:text-sm">(128 reviews)</p>
                    </div>

                    <div>
                      <p className="text-white text-xs sm:text-sm">100+ Daily Visitors</p>
                    </div>
                  </div>

                  <div className="bg-white absolute p-1 top-[-3%] right-2 sm:p-2 md:p-3 lg:p-4 rounded-md mt-2 sm:mt-0">
                    <Image src="/listings3/like.png" alt="like image" width={18} height={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* library features and all*/}
          <div className="flex flex-col sm:flex-row mt-24 sm:mt-32 md:mt-28 lg:mt-16 mb-5 justify-between gap-4 sm:gap-6">
            <div className="left_features w-full sm:w-[68%] md:w-[70%]">
              <div className="library_features">
                <LibraryFeatures />
                <LibraryGallery />
                <LibraryRules />
              </div>
            </div>

            <div className="location_right w-full sm:w-[30%] flex flex-col gap-4 sm:gap-6">
              <LocationCard />
              <div className="adv border border-gray-200 rounded-lg flex items-center justify-center h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px]">
                Ads
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
