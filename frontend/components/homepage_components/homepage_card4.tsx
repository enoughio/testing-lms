import { ReactNode } from 'react';

interface CardItem {
  title: string;
  description: string;
  action: string;
  icon: ReactNode;
}

export default function Card4() {
    const cards = [
      {
        title: "Are you individual?",
        description:
          "Keep everything that's important to you and your family shareable and safe in one place.",
        action: "Create an account",
        bgColor: "#E8D5C6", // 🎯 background color for first card
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-6 sm:h-6 text-[#824800]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A10.97 10.97 0 0112 15c2.5 0 4.847.82 6.879 2.204M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "Are you business?",
        description:
          "Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.",
        action: "Join Us",
        bgColor: "#FBF5E9", // 🎯 background color for second card
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-6 sm:h-6 text-[#824800]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M9 21h6m-3-11V3m0 0L5.5 8m6.5-5l6.5 5"
            />
          </svg>
        ),
      },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6 px-2 sm:px-6 md:px-0 lg:px-2 justify-items-center">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="p-3 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left w-full sm:max-w-sm md:w-full flex flex-col h-full"
            style={{ backgroundColor: card.bgColor }} // 🎯 dynamic bg color
          >
            <div>
              {/* Icon container */}
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f3e9e2] rounded-full mb-2 sm:mb-4 flex items-center justify-center">
                {card.icon}
              </div>
  
              {/* Title */}
              <h2 className="text-[12px] sm:text-lg md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {card.title}
              </h2>
  
              {/* Description */}
              <p className="text-gray-600 mb-2 sm:mb-4 text-[9px] sm:text-sm md:text-base">
                {card.description}
              </p>
            </div>
  
            {/* Action link */}
            <div className="text-[#824800] text-[9px] sm:font-medium hover:underline cursor-pointer flex items-center gap-1 text-xs sm:text-sm md:text-base mt-auto pt-2 sm:pt-4">
              {card.action} <span className="text-sm sm:text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
