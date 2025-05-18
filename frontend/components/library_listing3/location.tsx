"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function LocationCard() {
  const mapRef = useRef(null);

  useEffect(() => {
    // This is just for demo purposes
    // In a real implementation, you would use the Google Maps API or similar
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      
      // Set attributes for the iframe
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.frameBorder = "0";
      iframe.style.border = "0";
      
      // For demonstration purposes - embedding OpenStreetMap
      iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.12%2C51.51&layer=mapnik";
      
      // Clear any existing content and append the iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <div className="mt-4 sm:mt-10">
      <h1 className="text-[20px] sm:text-xl font-semibold mb-2 sm:mb-3">Location</h1>

      <div className="bg-[#D9D9D942] p-2 rounded-md overflow-hidden" style={{ height: "250px" }}>
        {/* Map Container (Top 50%) */}
        <div 
          ref={mapRef} 
          className="bg-[#E0E0E0] h-[50%] relative overflow-hidden"
        >
          {/* Initial loading state */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Image src="/listings3/location.png" width={16} height={16} alt="location icon" />
              <span className="text-sm font-medium">Loading map...</span>
            </div>
          </div>
        </div>

        {/* University Location */}
        <div className="flex items-center gap-2 px-4 py-3">
          <Image src="/listings3/location.png" width={16} height={16} alt="location icon" />
          <span className="text-xs">University, District</span>
        </div>

        {/* Get Direction Button */}
        <div className="px-4 py-3 w-[97%] rounded-md bg-black text-white text-sm font-semibold text-center cursor-pointer hover:bg-gray-800">
          Get Directions
        </div>
      </div>
    </div>
  );
}