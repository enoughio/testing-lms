import Image from "next/image";

interface CardItem {
  title: string;
  description: string[];
  icon: string;
}

export default function Cards1() {
  const cardData: CardItem[] = [
    {
      title: "Smart Library Access",
      description: [
        "Search and book seats in nearby libraries. Access both physical and digital books. Flexible membership plans with online payments"
      ],
      icon: "/home/card11.png",
    },
   
    {
      title: "Engaging Community Features",
      description: [
        "Public forum for Q&A, discussions & study help. Create or join study groups. Share knowledge, get support, stay motivated",
      ],
      icon: "/home/card13.png",
    },
    {
      title: "Built-in Study Tools",
      description: [
        "Pomodoro timer, habit tracker, streak logs, planner. Daily progress tracking and productivity boosters, Practice quizzes by topic"
      ],
      icon: "/home/card12.png",
    },
  ];

  return (
    <div className="w-full py-3 sm:py-12 lg:py-16 mt-4 px-1 sm:px-6 lg:px-12">
      {/* Container for all cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-[#ECE3DA] px-2 py-2 sm:p-5 rounded-xl transition duration-300 border-[0.6px] border-[#BF847EBD] ${
              index === 2 ? "col-span-2 lg:col-span-1 flex flex-row gap-4 sm:flex-row lg:flex-col" : "col-span-1 flex flex-col"
            }`}
          >
            {index === 2 ? (
              // Special layout for third card - flex row on tablet, column on mobile and desktop
              <>
                {/* Icon in black circle - centered on mobile, left on tablet/desktop */}
                <div className="bg-black w-9 h-9 p-1 sm:w-12 md:w-12 md:h-12 rounded-full mb-2 sm:mb-0 lg:mb-2 flex items-center justify-center self-start sm:self-start">
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={12}
                    height={12}
                    className="object-contain w-[19px] sm:w-[24px] md:w-[27px]"
                  />
                </div>
                
                {/* Title and Description container */}
                <div className="sm:ml-4 lg:ml-0 flex flex-col">
                  {/* Title */}
                  <h2 className="font-bold text-[11px] sm:text-sm md:text-xl leading-[18.12px] md:leading-[20px] tracking-normal text-[#824800] mb-0.5 sm:mb-2 text-left">
                    {card.title}
                  </h2>
                  
                  {/* Description */}
                  <div className="text-gray-700 font-bold text-left">
                    {card.description.map((text, idx) => (
                      <p
                        className="font-bold text-[8px] sm:text-xs md:text-sm leading-[12px] sm:leading-[18.12px] break-words"
                        key={idx}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Regular layout for first two cards
              <>
                {/* Icon in black circle - centered on mobile/tablet, left on desktop */}
                <div className="bg-black w-9 h-9 p-1 sm:w-12 md:w-12 md:h-12 rounded-full mb-2 flex items-center justify-center self-center lg:self-start">
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={12}
                    height={12}
                    className="object-contain w-[19px] sm:w-[24px] md:w-[27px]"
                  />
                </div>
                
                {/* Title */}
                <h2 className="font-bold text-[11px] sm:text-sm md:text-xl leading-[18.12px] md:leading-[20px] tracking-normal text-[#824800] mb-0.5 sm:mb-2 text-left">
                  {card.title}
                </h2>
                
                {/* Description */}
                <div className="text-gray-700 font-bold text-left">
                  {card.description.map((text, idx) => (
                    <p
                      className="font-bold text-[8px] sm:text-xs md:text-sm leading-[12px] sm:leading-[18.12px] break-words"
                      key={idx}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}