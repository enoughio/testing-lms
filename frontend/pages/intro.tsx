
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

interface CardItem {
  title: string;
  description: string[];
  icon: string;
}

export default function LibrarySection() {
  const cardData: CardItem[] = [
    {
      title: "Smart Library Access",
      description: [
        "Search and book seats in nearby libraries. Access both physical and digital books. Flexible membership plans with online payments",
      ],
      icon: "/home/card11.png",
    },
    {
      title: "Built-in Study Tools",
      description: [
        "Pomodoro timer, habit tracker, streak logs, planner. Daily progress tracking and productivity boosters. Practice quizzes by topic",
      ],
      icon: "/home/card12.png",
    },
    {
      title: "Engaging Community Features",
      description: [
        "Public forum for Q&A, discussions & study help. Create or join study groups. Share knowledge, get support, stay motivated",
      ],
      icon: "/home/card13.png",
    },
  ];

  return (
    <div className=" max-w-[1920px] lg:overflow-x-auto">
      {/* Intro Section */}
      <div className="relative w-full bg-[#EFEAE5] rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-2">
        {/* Left Section - Text and Button */}
        <div className="w-full lg:w-[50%] p-2 sm:p-3 md:p-4 text-left flex flex-col items-start z-10">
          <h1
            className={`${urbanist.className} font-light text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight tracking-[0.38px] text-black mb-2 sm:mb-3 md:mb-4`}
          >
            <span className="text-[#796146] font-semibold">Smart</span> Library
            <br />
            Management
            <br />
            <span className="text-[#796146] font-semibold">All in One Place</span>
          </h1>
          <p className="font-[Plus_Jakarta_Sans] text-xs sm:text-sm md:text-base lg:text-lg leading-snug tracking-[0.13px] text-black mb-3 sm:mb-4 md:mb-6 mt-1 sm:mt-2 md:mt-3 lg:mt-5 text-left">
            Manage books, seat bookings,
            <br />
            members, and digital libraries.
          </p>
          <button className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-light leading-tight flex items-center gap-1 sm:gap-2 hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-[60%] h-full mt-4 lg:mt-0">
          <Image
            src="/home/image1.png"
            alt="Library Illustration"
            width={900}
            height={900}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full py-3 sm:py-12 lg:py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-[#ECE3DA] px-2 py-2 sm:p-5 rounded-xl transition duration-300 border-[0.6px] border-[#BF847EBD] flex flex-col sm:flex-row lg:flex-col gap-4`}
            >
              {/* Icon in black circle */}
              <div className="bg-black w-9 h-9 p-1 sm:w-12 md:w-12 md:h-12 rounded-full flex items-center justify-center self-center sm:self-start">
                <Image
                  src={card.icon}
                  alt="Icon"
                  width={12}
                  height={12}
                  className="object-contain w-[19px] sm:w-[24px] md:w-[27px]"
                />
              </div>

              {/* Title and Description */}
              <div className="flex flex-col">
                <h2 className="font-bold text-[11px] sm:text-sm md:text-xl leading-[19.12px] md:leading-[25px] tracking-normal text-[#824800] mb-0.5 sm:mb-2 text-left">
                  {card.title}
                </h2>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}