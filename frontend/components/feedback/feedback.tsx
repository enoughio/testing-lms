'use client';  
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Adv from '../forum/advertisement';
import Link from 'next/link';
import { ThumbsUp } from 'lucide-react';
const feedbackData = [
  {
    id: 1,
    title: "How to effectively use the Pomodoro Technique for long study sessions?",
    description: "I’m currently in my second year of college and also working part-time in the evenings. Between lectures, assignments, travel, and work, I’m finding it extremely difficult to maintain a consistent study schedule.I’ve tried to wake up early, but it often results in burnout after a few days. Late-night study sessions don’t work either because I’m already exhausted from the day.",
    tags: ["#StreakGoals", "#PomodoroWins"],
    username: "@rahulsharma",
    answers: 8,
    timeAgo: "2h ago",
    topTag: "Trending",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), 
    like:30
  },
  {
    id: 2,
    title: "Best tools to track daily study habits?",
    description: "Explore tools like Notion, Habitica, or Forest to track and gamify your study goals efficiently.",
    tags: ["#StudyTools", "#TrackProductivity"],
    username: "@ananyaverma",
    answers: 5,
    timeAgo: "1d ago",
    topTag: "Hot",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    like:25
  },
  {
    id: 3,
    title: "How to stay consistent during exam season?",
    description: "Staying consistent is key during exams. Break your schedule into realistic targets and track small wins.",
    tags: ["#ExamPrep", "#Consistency"],
    username: "@yusufali",
    answers: 12,
    timeAgo: "3h ago",
    topTag: "Popular",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), 
    like:10
  },
  {
    id: 4,
    title: "Effective note-taking methods for science subjects?",
    description: "Looking for efficient note-taking strategies specifically for chemistry and physics. Any tips?",
    tags: ["#NoteTaking", "#ScienceStudy"],
    username: "@priyapatel",
    answers: 7,
    timeAgo: "2d ago",
    topTag: "Active",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    like:2
  },
  {
    id: 5,
    title: "Group study vs. solo study - which is more effective?",
    description: "Trying to determine whether I should focus on group sessions or independent study for my upcoming exams.",
    tags: ["#StudyMethods", "#ExamPrep"],
    username: "@tarunmehra",
    answers: 15,
    timeAgo: "1w ago",
    topTag: "Discussion",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    like:40
  }
];

type FeedbackProps = {
  sortBy: string;
  tab: 'Hot' | 'New' | 'Top'; 
};


export default function FeedbackList({ sortBy, tab }: FeedbackProps) {
  const [filteredFeedback, setFilteredFeedback] = useState(feedbackData);

  const [searchQuery, setSearchQuery] = useState('');

 


  useEffect(() => {
    const now = new Date();

const filterFeedback = () => {
  const now = new Date();
  let filtered = [...feedbackData];

  
  switch (sortBy) {
    case 'today':
      filtered = filtered.filter(item => {
        const created = new Date(item.createdAt);
        return (
          created.getDate() === now.getDate() &&
          created.getMonth() === now.getMonth() &&
          created.getFullYear() === now.getFullYear()
        );
      });
      break;

    case 'week': {
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(item => new Date(item.createdAt) >= oneWeekAgo);
      break;
    }

    case 'month': {
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(item => new Date(item.createdAt) >= oneMonthAgo);
      break;
    }

    case 'year': {
      const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(item => new Date(item.createdAt) >= oneYearAgo);
      break;
    }

    case 'all':
    default:
   
      break;
  }

  
  switch (tab) {
    case 'Hot':
      filtered.sort((a, b) => b.like - a.like);
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;

    case 'New':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;

    case 'Top':
      filtered.sort((a, b) => b.like - a.like);
      break;
  }
    if (searchQuery.trim() !== '') {
      const lower = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.tags.some(tag => tag.toLowerCase().includes(lower))
      );
    }

    return filtered;


};


    setFilteredFeedback(filterFeedback());
  }, [sortBy,tab,searchQuery]);

  return (
    <div className="mt-8 sm:mt-12 md:mt-16 font-urbanist lg:mt-20 px-3 sm:px-4 md:px-6 lg:px-2
                    w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 
                    mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 items-center">

      {filteredFeedback.length === 0 ? (
        <div className="w-full py-12 text-center text-gray-500">
          No feedback posts found .
        </div>
      ) : (
        filteredFeedback.map((item, idx) => (
          <div key={item.id} className="w-full  flex flex-col  gap-4 sm:gap-6">

                        <Link
                href={{
                  pathname: `/forum/details/${item.id}`,
                  query: {
                    title: item.title,
                    description: item.description,
                    username: item.username,
                    answers: item.answers,
                    timeAgo: item.timeAgo,
                    topTag: item.topTag,
                    tags: JSON.stringify(item.tags), // stringify arrays
                    like:item.like
                  }
                }}
              >


            <div className="w-full bg-[#EFEAE5] p-4 sm:p-5 md:p-6 rounded-lg shadow-md space-y-3 sm:space-y-4 relative">
              <div className="inline-block text-xs bg-[#F1F1F1] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium absolute top-2 right-2 ">
                {item.topTag}
              </div>

              <div className="pt-2 sm:pt-0">
                <h1 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 pr-20">{item.title}</h1>
                <p className="text-gray-700 text-xs sm:text-sm">
                {item.description.split(" ").slice(0, 20).join(" ")}...
              </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {item.tags.map((tag, i) => (
                  <div key={i} className="border border-[#626262] text-[#626262] text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image src="/forums/dp.png" width={28} height={28} alt="user" className="rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" priority />
                  <p className="text-xs sm:text-sm text-gray-600">
                    Asked by <span className="font-medium">{item.username}</span>
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                  <ThumbsUp width={16} height={16} />
                  <p>{item.like} Like</p>
                </div>
                  <div className="flex items-center gap-1">
                    <Image src="/forums/message.png" width={16} height={16} alt="answers" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p>{item.answers} Answers</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/forums/time.png" width={16} height={16} alt="time" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p>{item.timeAgo}</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            {/* Advertisement after first and second card */}
            {(idx === 0 || idx === 1) && (
              <div className="w-full flex justify-center">
                <div className="relative w-full block lg:hidden max-w-[300px] h-[50px]">
                  <Adv />
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
