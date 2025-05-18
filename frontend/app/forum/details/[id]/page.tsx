'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Plus } from 'lucide-react';
import Adv from "@/components/forum/advertisement";
import { Share2 , ThumbsUp , Bookmark } from "lucide-react";
export default function Details(){

     const router=useRouter()

     const searchParams = useSearchParams();

      const title = searchParams?.get("title")??"";
      const description = searchParams?.get("description")??"";
      const username = searchParams?.get("username")??"";
      const answers = searchParams?.get("answers")??"";
      const timeAgo = searchParams?.get("timeAgo")??"";
      const topTag = searchParams?.get("topTag")??"";
      const tags = searchParams?.get("tags")??"";


      const [sortBy, setSortBy] = useState("all");

      const tabs = [
  { name: 'Hot', icon: '/forums/hot.png' },
  { name: 'New', icon: '/forums/new.png' },
  { name: 'Top', icon: '/forums/top.png' },
] as const;

type TabName = typeof tabs[number]['name'];
      const [selectedTab, setSelectedTab] = useState<'Hot' | 'New' | 'Top'>('Hot');

      const [showAnswers, setShowAnswers] = useState(false);
       const [liked, setLiked] = useState(false);
     const [saved, setSaved] = useState(false);


     const handleLike=()=>{
      setLiked(prev=>!prev)
     }

     const handleSave=()=>{
      setSaved(prev=>!prev)
     }

        const toggleAnswers = () => {
          setShowAnswers((prev) => !prev);
        };

        const ans= 1;
    
      const handleClick=()=>{
        router.push("/forum/user/ask")
      }

      

    

  // Parse the tags array
  const parsedTags = tags ? JSON.parse(tags as string) : [];
    return (

        <div className="min-h-screen py-3 max-w-[1920px] lg:overflow-x-auto  bg-[#ECE3DA]">


          {/* this is top section of filtering */}
             <div className="w-full h-full   mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">


                      <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-center text-gray-800 mb-4 sm:mb-6 px-2">
                    India's <span className='font-medium'>Smartest Student Forum </span> — Built by You
                  </h1>

                  <div className='flex flex-col text-center'>
                    {/* Ask Question Section */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-10 md:mt-16  lg:mt-24 items-center mb-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48">
                        <input
                          type="text"
                          placeholder="Ask a question or start a topic..."
                          className="flex-grow px-4 py-2  bg-[#EFEAE5]  rounded-full focus:outline-none focus:ring-2 focus:ring-black  w-full"
                        />

                        <button onClick={handleClick} className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition w-full sm:w-auto">
                          <Plus size={18} />
                          <span className="whitespace-nowrap">Ask Question</span>
                        </button>
                      
                      
                        


                      </div>

                      <div className="flex flex-col-reverse md:flex-row  justify-around flex-wrap gap-4 mb-6  px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48">

                            {/* latest , trending */}

                          <div className="  mx-auto w-full flex justify-center items-center gap-2 sm:gap-3">
                            {tabs.map((tab, idx) => (
                              <button
                                    key={`${tab.name}-${idx}`}
                                    onClick={() => setSelectedTab(tab.name)}
                                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 shadow-sm
                                      ${selectedTab === tab.name ? 'bg-gray-200' : ''}`}
                                  >
                                    <Image
                                      src={tab.icon}
                                      alt={tab.name}
                                      width={20}
                                      height={20}
                                      className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    {tab.name}
                            </button>
                            ))}
                          </div>

                          {/* sorting */}

                          <div className="flex items-center text-[#5B5B5B] gap-2 ml-auto">
                            <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                              Sort by:
                            </label>
                            <select
                              id="sortBy" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}
                              className="border rounded-full px-3 py-2 text-sm focus:outline-none  bg-[#DCD8D4]"
                            >
                               <option value="all">All</option>
                              <option value="today">Today</option>
                              <option value="week">This Week</option>
                              <option value="month">This Month</option>
                              <option value="year">This Year</option>
                            </select>
                          </div>



                      </div>

                  </div>

                   {/* Forum Feed Section */}
                  <div className="flex flex-col  md:flex-row items-start lg:items-start justify-between gap-2 lg:gap-3">
                                                  {/* Advertisement Left - Hidden on mobile/tablet */}
                                                    
                  <div className='mt-28 w-[15%] min-h-[600px] bg-white hidden lg:block items-center'>
                                                        <Adv/>
                                  
                  </div>
                                                  
                                                  
                    {/* Feedback / Forum Card - Centered on mobile, left on desktop */}
                     <div className="w-full md:w-full flex">
      <div className="mt-8 sm:mt-12 md:mt-16 font-urbanist lg:mt-20 px-3 sm:px-4 md:px-6 lg:px-2 w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 items-center">
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-full bg-[#EFEAE5] p-4 sm:p-5 md:p-6 rounded-lg shadow-md space-y-3 sm:space-y-4 relative">
            {/* Top Tag */}
            <div className="inline-block text-xs bg-[#F1F1F1] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium absolute top-2 right-2">
              {topTag}
            </div>

            <div className="pt-2 sm:pt-0">
              <h1 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 pr-20">
                {title}
              </h1>

              {/* User info & time */}
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-gray-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image src="/forums/dp.png" width={28} height={28} alt="user" className="rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  <p className="text-xs sm:text-sm text-gray-600">
                    Asked by <span className="font-medium">{username}</span>
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <img src="/forums/time.png" width={16} height={16} alt="time" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p>{timeAgo}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="description">
                <p className="text-gray-700 text-xs sm:text-sm">
                  {description}
                </p>
              </div>

              {/* Sample image */}
              <div className="image w-full h-[200px] ">
                <Image src="/forums/details.png" alt="books" className="fill w-full h-[200px]" width={100} height={100}/>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-between items-center gap-1.5 sm:gap-2 pt-1">
              <div className="flex flex-wrap gap-2">
                {parsedTags.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="border border-[#626262] text-[#626262] text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium"
                  >
                    #{tag}
                  </div>
                ))}
              </div>

              {/* Like | Share | Save */}
              <div className="flex gap-4 sm:gap-6 items-center mt-3 text-sm text-gray-600">
                <div className={`flex items-center gap-1 cursor-pointer hover:text-black transition ${liked?'text-black':''}`} onClick={handleLike}>
                  <ThumbsUp width={16} height={16} />
                  <p>{liked ? 'Liked':'Like'}</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                  <Share2 width={16} height={16} />
                  <p>Share</p>
                </div>
                <div className={`flex items-center gap-1 cursor-pointer hover:text-black transition ${saved? 'text-black':''}`} onClick={handleSave}>
                  <Bookmark width={16} height={16} />
                 <p>{saved? 'Saved':'Save'}</p>
                </div>
              </div>
            </div>

             <div className="w-full">
      {/* Answers */}
      <div
        className="flex items-center gap-1 mt-2 cursor-pointer"
        onClick={() => setShowAnswers((prev) => !prev)}
      >
        <Image
          src="/forums/message.png"
          width={16}
          height={16}
          alt="answers"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        />
        <p>{answers} Answer{ans > 1 ? 's' : ''}</p>
      </div>

      {/* Answer description box (conditionally rendered) */}
      {showAnswers && (
        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto text-sm sm:text-xs mt-4">
          {/* Profile section */}
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/forums/dp.png"
              className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full"
              alt="dp"
              width={36}
              height={36}
            />
            <p className="font-medium text-gray-800">@Nikita_J</p>
          </div>

          {/* Answer meta */}
          <div className="text-gray-500 text-xs sm:text-sm mb-2">
            Answered 1 day ago
          </div>

          {/* Description */}
          <div className="mb-4 text-gray-700 leading-relaxed">
            <p>
              I use the Pomodoro Technique – 25 minutes of focused study followed by a
              5-minute break. After every 4 sessions, I take a longer break (15–20 minutes). <br /><br />
              I also block distracting websites on my phone using an app like Forest and
              listen to Lo-Fi music or ambient café sounds. <br /><br />
              Plus, I set 3 goals before I start each session, and ticking them off gives
              me motivation to continue. <br /><br />
              Staying hydrated and studying near natural light helps too!
            </p>
          </div>

          {/* Upvotes */}
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <span className="text-lg">👍</span>
            <p>78 Upvotes</p>
          </div>
        </div>
      )}
    </div>


          </div>
        </div>
      </div>
    </div>
                                                    
                                                  
                                                  
                                                  
                    <div className='mt-28 w-full lg:w-[15%]  min-h-[600px] bg-white hidden lg:block items-center'>
                                                        <Adv/>
                                  
                    </div>
                                                
                  </div>



             </div>



        </div>
    )
}