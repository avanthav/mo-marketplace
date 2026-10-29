'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full max-w-[700px] ${className}`}
    >
      <div className="flex w-full items-center bg-[#F4F4F6] rounded-md overflow-hidden border border-transparent focus-within:border-[#FF0000] focus-within:bg-white transition-all h-10 md:h-[42px]">
        {/* Search icon inside left */}
        <div className="pl-3.5 pr-2 text-[#8E8E93] flex items-center justify-center shrink-0">
          <Search className="w-4 h-4 stroke-[2]" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, brands, vehicles, properties..."
          className="w-full h-full bg-transparent text-xs md:text-sm text-[#000000] placeholder:text-[#8E8E93] focus:outline-none"
        />

        {/* Rounded rectangular Red Search Button at the right */}
        <button
          type="submit"
          aria-label="Search"
          className="h-full px-5 bg-[#FF0000] hover:bg-[#E00000] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4 stroke-[2.2]" />
        </button>
      </div>
    </form>
  );
};
