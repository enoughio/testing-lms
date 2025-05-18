'use client';

import React, { useRef, useState, useEffect } from 'react';

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  // Check if editor content is empty or just whitespace
  const checkEmpty = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.innerText;
    setIsEmpty(text.trim().length === 0);
  };

  const applyFormat = (command: 'bold' | 'italic' | 'code') => {
    if (command === 'code') {
      document.execCommand('fontName', false, 'monospace');
    } else {
      document.execCommand(command, false, '');
    }
    editorRef.current?.focus();
    checkEmpty();
  };

  const handleInput = () => {
    checkEmpty();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editorRef.current) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target?.result as string;
        img.alt = 'uploaded image';
        img.style.maxWidth = '100%';
        const sel = window.getSelection();
        if (!sel?.rangeCount) return;
        sel.getRangeAt(0).insertNode(img);
      };
      reader.readAsDataURL(file);
    }
    checkEmpty();
  };

  useEffect(() => {
    checkEmpty();
  }, []);

  return (
    <div className="w-full p-4 shadow rounded-lg relative">
      {/* Toolbar */}
      <div className="flex gap-3 bg-[#efd7bf] p-3 rounded-t-lg">
        <button
          type="button"
          onClick={() => applyFormat('bold')}
          className="px-3 py-1 rounded hover:bg-gray-200 font-bold text-black"
          aria-label="Bold"
          title="Bold (Ctrl+B)"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => applyFormat('italic')}
          className="px-3 py-1 rounded hover:bg-gray-200 italic text-black"
          aria-label="Italic"
          title="Italic (Ctrl+I)"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => applyFormat('code')}
          className="px-3 py-1 rounded hover:bg-gray-200 font-mono text-black"
          aria-label="Code"
          title="Code font"
        >
          {'</>'}
        </button>
        <label
          htmlFor="image-upload"
          className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer text-black select-none"
          title="Upload Image"
          aria-label="Upload Image"
        >
          📷
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {/* ContentEditable div */}
      <div

        
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        className="w-full min-h-[150px] p-4  bg-[#EFEAE5] border border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-black mt-0"
        spellCheck={true}
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      ></div>

    

      {/* Textarea with placeholder */}
      
    </div>
  );
};

export default RichTextEditor;
