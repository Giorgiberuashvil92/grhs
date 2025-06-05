'use client';

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  exerciseCount: number;
  complexCount: number;
}

const categories: Category[] = [
  { id: '1', name: 'ორთოპედია', exerciseCount: 125, complexCount: 36 },
  { id: '2', name: 'ნევროლოგია', exerciseCount: 98, complexCount: 28 },
  { id: '3', name: 'კარდიოლოგია', exerciseCount: 67, complexCount: 18 },
  { id: '4', name: 'ფსიქოლოგია', exerciseCount: 45, complexCount: 12 },
  { id: '5', name: 'პედიატრია', exerciseCount: 89, complexCount: 24 },
  { id: '6', name: 'გერიატრია', exerciseCount: 56, complexCount: 15 }
];

export function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="fixed top-[100px] right-6 z-40">
      {/* Language selection buttons */}
      <div className="flex flex-col space-y-2 mb-4">
        {['En', 'En', 'En', 'En'].map((lang, index) => (
          <button
            key={index}
            className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 font-medium transition-colors"
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Categories dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-72 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">📚</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">
                {selectedCategory ? selectedCategory.name : 'ორთოპედია'}
              </div>
              <div className="text-sm text-gray-500 flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <span>📖</span>
                  <span>6 განყოფილება</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>💪</span>
                  <span>36 კომპლექსი</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>🎯</span>
                  <span>125 ვარჯიში</span>
                </span>
              </div>
            </div>
          </div>
          <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{category.name}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <span>{category.complexCount} კომპლექსი</span>
                      <span>{category.exerciseCount} ვარჯიში</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 