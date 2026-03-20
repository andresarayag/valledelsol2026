import { FeatureBlock as FeatureBlockType } from './types';
import FeatureBlock from './FeatureBlock';

interface FeatureGridProps {
  features: FeatureBlockType[];
  columns?: 2 | 3;
}

export default function FeatureGrid({
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
          {features.map((feature, index) => (
            <FeatureBlock key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
