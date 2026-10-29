import React from 'react';
import { SHORTCUT_CARDS } from '@/data/categories';
import { ShoppingShortcutCard } from './ShoppingShortcutCard';

export const CategoryShortcuts: React.FC = () => {
  return (
    <div className="mo-container py-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {SHORTCUT_CARDS.map((card) => (
          <ShoppingShortcutCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

