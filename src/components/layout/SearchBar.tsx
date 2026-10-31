'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search products, brands, vehicles, properties...',
  className = '',
}) => {
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
      className={`relative flex items-center w-full ${className}`}
    >
      <div className="flex w-full items-center bg-[#F4F4F6] rounded-md border border-transparent focus-within:border-[#FF0000] focus-within:bg-white transition-all h-[42px] overflow-hidden">
        {/* Left Search outline icon */}
        <div className="pl-4 pr-2.5 text-[#8E8E93] flex items-center justify-center shrink-0">
          <Search className="w-4 h-4 stroke-[1.8]" />
        </div>

        {/* Input Text with ellipsis on mobile */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full flex-1 min-w-0 h-full bg-transparent text-[13px] text-[#000000] placeholder:text-[#8E8E93] truncate placeholder:truncate focus:outline-none pr-2"
        />

        {/* Right Red Search Button matching Figma (rounded-r-md, 48px width) */}
        <button
          type="submit"
          aria-label="Search"
          className="h-full px-5 bg-[#FF0000] hover:bg-[#E00000] text-white rounded-r-md flex items-center justify-center transition-colors cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4 stroke-[2]" />
        </button>
      </div>
    </form>
  );
};
