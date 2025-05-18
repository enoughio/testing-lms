export default function Card3({ onlyFirstRow, onlyRemaining }) {
  const cards = [
    {
      title: "Pomodoro Timer",
      description:
        "Stay focused with structured breaks to boost productivity while studying or working.",
      action: "Learn More",
    },
    {
      title: "Progress Tracker",
      description:
        "Track your daily, weekly, and monthly study goals with visual charts and reminders.",
      action: "Learn More",
    },
    {
      title: "Library Seat Booking",
      description:
        "Book your favorite spot in advance and avoid the hassle of unavailability.",
      action: "Learn More",
    },
    {
      title: "Digital Library",
      description:
        "Access thousands of books, research papers, and resources anytime, anywhere.",
      action: "Learn More",
    },
    {
      title: "Study Planner",
      description:
        "Organize your study sessions effectively with customizable planners.",
      action: "Learn More",
    },
  ];

  const firstRow = cards.slice(0, 2); // First 2 cards
  const secondRow = cards.slice(2); // Remaining cards

  return (
    <div className="w-full space-y-12">
      {/* First Row - 2 Cards */}
      {onlyFirstRow && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {firstRow.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="w-full h-1 bg-blue-600 rounded-full mb-6"></div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h1>
              <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
              <h2 className="text-blue-600 font-medium hover:underline cursor-pointer text-sm">
                {card.action}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/* Second Row - Remaining Cards */}
      {onlyRemaining && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {secondRow.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="w-full h-1 bg-blue-600 rounded-full mb-6"></div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h1>
              <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
              <h2 className="text-blue-600 font-medium hover:underline cursor-pointer text-sm">
                {card.action}
              </h2>
            </div>
          ))}
        </div>
      )}



    </div>


  );
}
