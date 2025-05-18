'use client';

import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const libraries = [
  {
    id: 1,
    name: "Central Library",
    location: "Downtown, New York",
    hours: "8:00 am to 9:00 pm",
    seats: "25 Seats Available",
    membership: "Paid",
    open: true,
    reviews: 128,
    rating: 4.5,
    features: ["Wifi", "AC"],
    image: "/listings1/lib1.png",
  },
  {
    id: 2,
    name: "Westside Reading Hall",
    location: "West End, New York",
    hours: "9:00 am to 10:00 pm",
    seats: "18 Seats Available",
    membership: "Free",
    open: false,
    reviews: 92,
    rating: 4.2,
    features: ["Wifi"],
    image: "/listings1/lib2.png",
  },
  {
    id: 3,
    name: "Westside Reading Hall",
    location: "West End, New York",
    hours: "9:00 am to 10:00 pm",
    seats: "18 Seats Available",
    membership: "Free",
    open: false,
    reviews: 92,
    rating: 4.2,
    features: ["Wifi"],
    image: "/listings1/lib2.png",
  },
  {
    id: 4,
    name: "Westside Reading Hall",
    location: "West End, New York",
    hours: "9:00 am to 10:00 pm",
    seats: "18 Seats Available",
    membership: "Free",
    open: false,
    reviews: 92,
    rating: 4.2,
    features: ["Wifi"],
    image: "/listings1/lib2.png",
  },
];

export default function LibraryCard() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star size={16} className="text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col gap-4 ">
      {libraries.map((lib) => (
        <div key={lib.id} className="w-full  p-1 bg-white  md:p-3 lg:p-5 rounded-lg shadow-md transition-shadow transition-transform duration-300 hover:shadow-2xl hover:shadow-amber-200/40 hover:scale-[1.01]">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative w-full  md:w-[140px] h-[180px] md:h-[160px] flex-shrink-0">
              <Image src={lib.image} alt={lib.name} fill className="rounded-md object-cover" />

              {/* Name & Location on image (Mobile only) */}
              <div className="absolute bottom-2 left-2 md:hidden text-white drop-shadow-md">
                <h1 className="text-lg font-semibold">{lib.name}</h1>
                <div className="flex items-center gap-1 text-sm">
                  <Image src="/listings3/location.png" alt="location" width={14} height={14} />
                  <p>{lib.location}</p>
                </div>
              </div>

              {/* Open/Closed Badge */}
              <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs rounded-md">
                {lib.open ? 'Open Now' : 'Closed'}
              </div>

              {/* Like Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                <Image src="/listings3/like.png" alt="like" width={20} height={20} />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex  flex-col sm:flex-row justify-between w-full ">
              {/* Top Section */}
              <div className="space-y-2 ">
                {/* Desktop Name + Location */}
                <div className="hidden md:block">
                  <h1 className="text-lg font-semibold">{lib.name}</h1>
                  <div className="flex items-center text-sm text-gray-600 gap-2">
                    <Image src="/listings3/location.png" alt="location" width={14} height={14} />
                    <p>{lib.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(lib.rating)}</div>
                  <p className="text-sm text-gray-500">({lib.reviews} reviews)</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {lib.features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-1 px-2 py-1">
                      <Image src="/listings3/wifi.png" alt={feat} width={14} height={14} />
                      <p>{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

             {/* Bottom CTA Section */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-end  md:mt-1  mt-2 w-full">
            {/* Left section: Hours, Seats, Membership - for mobile only */}
            <div className="flex flex-wrap gap-2 md:hidden">
              <div className="rounded-md bg-gray-100 px-3 py-1">{lib.hours}</div>
              <div className="rounded-md bg-green-100 text-green-700 px-3 py-1">{lib.seats}</div>
              <div
                className={`rounded-md px-3 py-1 ${
                  lib.membership === 'Free'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {lib.membership}
              </div>
              <Link href={`/libraries/${lib.id}`} className="w-full">
                <button className="flex w-full items-center justify-center gap-1 bg-black text-white px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-95 active:scale-90">
                  Book Now<ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Right section: Hours, Seats, Membership - for md and up */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="rounded-md bg-gray-100 px-3 py-1">{lib.hours}</div>
              <div className="rounded-md bg-green-100 text-green-700 px-3 py-1">{lib.seats}</div>
              <div
                className={`rounded-md px-3 py-1 ${
                  lib.membership === 'Free'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {lib.membership}
              </div>
              <Link href={`/libraries/${lib.id}`}>
                <button className="flex items-center justify-center gap-1 bg-black text-white px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-95 active:scale-90">
                  Book Now <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
