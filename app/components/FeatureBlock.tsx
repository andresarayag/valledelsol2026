import Link from 'next/link';
import { FeatureBlock as FeatureBlockType } from './types';

interface FeatureBlockProps {
  feature: FeatureBlockType;
  className?: string;
}

export default function FeatureBlock({ feature, className = '' }: FeatureBlockProps) {
  return (
    <Link
      href={feature.href}
      className={`group relative block h-64 md:h-80 overflow-hidden rounded-lg ${className}`}
    >
      {feature.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${feature.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        </div>
      )}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {feature.title}
        </h2>
        <span className="text-lg md:text-xl">{feature.subtitle}</span>
      </div>
    </Link>
  );
}
