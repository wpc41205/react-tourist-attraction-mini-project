import React, { useState, useEffect } from "react";

function Searchsection({ onSearch, addSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState("");

  // รับคำค้นหาเพิ่มเติมจาก tags
  useEffect(() => {
    if (addSearchTerm) {
      const currentTerms = searchTerm.split(" ").filter(term => term.trim() !== "");
      
      // ตรวจสอบว่าคำนั้นมีอยู่แล้วหรือไม่
      if (!currentTerms.includes(addSearchTerm)) {
        const newSearchTerm = currentTerms.length > 0 
          ? `${searchTerm} ${addSearchTerm}`
          : addSearchTerm;
        setSearchTerm(newSearchTerm);
        
        // ค้นหาทันทีเมื่อเพิ่มคำใหม่
        if (onSearch) {
          onSearch(newSearchTerm);
        }
      }
    }
  }, [addSearchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex justify-center items-center h-16 w-[60vw] mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-center text-2xl mt-4 p-2 border-0  rounded-none w-full h-12 border-b-2 border-black focus:outline-none focus:border-blue-500"
            placeholder="หาที่เที่ยวแล้วไปกันเลย ..."
          />
          <button
            type="submit"
            className="absolute right-2 top-6 text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchsection;
