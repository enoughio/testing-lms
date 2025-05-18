'use client';
import { useRouter } from 'next/navigation';
import { Plus, Search } from 'lucide-react';
import Image from 'next/image';
import Feedback from '@/components/feedback/feedback';
import Adv from '@/components/forum/advertisement';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Forum() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('today');
  const [selectedTab, setSelectedTab] = useState<'Hot' | 'New' | 'Top'>('Hot');

  const handleClick = () => {
    router.push('/forum/user/ask');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/search', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Error in fetching results:', err);
    }
  };

  const tabs: { name: 'Hot' | 'New' | 'Top'; icon: string }[] = [
    { name: 'Hot', icon: '/forums/hot.png' },
    { name: 'New', icon: '/forums/new.png' },
    { name: 'Top', icon: '/forums/top.png' },
  ];

  return (
    <div className="min-h-screen py-4 max-w-[1920px] bg-[#ECE3DA]">
      <div className="w-full mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-6">
          India's <span className="font-medium">Smartest Student Forum</span> — Built by You
        </h1>

        {/* Search & Ask Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
          {/* Search Box */}
          <div className="flex items-center px-3 py-2 bg-[#EFEAE5] rounded-full w-full sm:w-[60%] shadow-inner">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Search a question..."
              className="flex-grow px-3 bg-transparent focus:outline-none"
            />
            <Button onClick={handleSearch} className="flex gap-2 items-center">
              <Search size={18} className="text-black" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>

          {/* Ask Button */}
          <Button
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition w-full sm:w-auto"
          >
            <Plus size={18} />
            <span className="whitespace-nowrap">Ask Question</span>
          </Button>
        </div>

        {/* Tabs & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm ${
                  selectedTab === tab.name ? 'bg-gray-200' : ''
                }`}
              >
                <Image src={tab.icon} alt={tab.name} width={20} height={20} />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="sortBy" className="text-gray-700">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#DCD8D4] border rounded-full px-3 py-1 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: 'study.png', label: 'Study & Productivity' },
            { icon: 'tool.png', label: 'Tools & Tech' },
            { icon: 'mental.png', label: 'Mental Health' },
            { icon: 'creative.png', label: 'Creative & Fun' },
            { icon: 'career.png', label: 'Career & Exams' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 bg-[#EFEAE5] rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm"
            >
              <Image
                src={`/forums/${item.icon}`}
                alt={item.label}
                width={20}
                height={20}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Advertisement (Desktop Only) */}
          <div className="hidden lg:block w-[20%] bg-white min-h-[600px]">
            <Adv />
          </div>

          {/* Feedback Section */}
          <div className="w-full lg:w-[60%]">
            <Feedback sortBy={sortBy} tab={selectedTab} query={setResults} />
          </div>

          {/* Right Advertisement (Desktop Only) */}
          <div className="hidden lg:block w-[20%] bg-white min-h-[600px]">
            <Adv />
          </div>
        </div>
      </div>
    </div>
  );
}
  