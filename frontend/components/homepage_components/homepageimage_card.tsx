import Image from "next/image";

interface CardItem {
  title: string;
  imgSrc: string;
  altText: string;
}

export default function Cards2() {
    const cardData = [
      {
        title: "Built for real study habits, not just schedules",
        imgSrc: "/home/Frame 247.svg",
        altText: "Image 1",
      },
      {
        title: "Study smarter, not harder",
        imgSrc: "/home/Frame 53.svg",
        altText: "Image 2",
      },
      {
        title: "Your learning journey starts here",
        imgSrc: "/home/Frame 54.svg",
        altText: "Image 3",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={card.imgSrc}
              alt={card.altText}
              className="w-full max-w-[260px] h-auto object-contain mb-6"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    );
  }
  
