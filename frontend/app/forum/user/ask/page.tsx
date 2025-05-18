'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRef, useState } from 'react';
import RichTextEditor from "@/components/forum/textEditor";
export default function Community() {
  const [description, setDescription] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyFormat = (startTag: string, endTag: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = description.slice(start, end);

    const newText =
      description.slice(0, start) +
      startTag +
      selectedText +
      endTag +
      description.slice(end);

    setDescription(newText);

    // Refocus and update cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + startTag.length, end + startTag.length);
    }, 0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const markdownImage = `![alt text](${imageUrl})`;
      setDescription((prev) => prev + '\n' + markdownImage + '\n');
    }
  };

  return (

    <div className="min-h-screen flex flex-col bg-[#ECE3DA]">
      {/* <Navbar /> */}


      <main className="flex-grow w-full px-10 sm:px-14 md:px-20 lg:px-36 py-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">Ask the Community</h1>

        {/* Question Title */}
        <div className="mb-6">
          <label htmlFor="questionTitle" className="block text-lg font-medium mb-2">Question Title</label>
          <input
            id="questionTitle"
            type="text"
            placeholder="How do I manage my study streak?"
            className="w-full p-3 rounded-lg border border-gray-300 bg-[#EFEAE5] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-gray-600 mt-2">Be specific and imagine you're asking a question to another person.</p>
        </div>

        {/* Description with Toolbar */}
        <div className="mb-6 ">
          <label htmlFor="questionDescription" className="block text-lg font-medium mb-2">Description</label>

          {/* Toolbar */}
         <RichTextEditor/>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-lg font-medium mb-2">Tags</label>
          <input
            id="tags"
            type="text"
            placeholder="Add up to 5 tags (comma separated)"
            className="w-full p-3 rounded-lg border bg-[#EFEAE5] border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>


        {/* Category */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-lg font-medium mb-2">Categories</label>
          <input
            id="tags"
            type="text"
            placeholder="Add categories"
            className="w-full p-3 rounded-lg border bg-[#EFEAE5] border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Privacy */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-3">Privacy</h2>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>Notify me via email when someone comments</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Post Question
          </button>
          <button className="px-6 py-2  text-black border border-black rounded-full hover:bg-gray-100 transition">
            Save as Draft
          </button>
        </div>
      </main>

  
    </div>
  );
}
