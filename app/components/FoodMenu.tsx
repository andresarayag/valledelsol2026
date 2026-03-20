import { MenuItem } from './types';

interface FoodMenuProps {
  readonly items: MenuItem[];
  readonly className?: string;
}

export default function FoodMenu({ items, className = '' }: FoodMenuProps) {
  return (
    <div className={`food-menu-container ${className}`}>
      <div className="food-menu-content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={`${item.title}-${item.price}`}
              className={`food-menu-item ${
                item.highlightLabel ? 'food-menu-highlight' : ''
              }`}
            >
              {item.highlightLabel && (
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-600 uppercase">
                    {item.highlightLabel}
                  </h4>
                </div>
              )}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-lg font-semibold text-gray-900 ml-4 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
