import Image from 'next/image';

interface EventFeatureCardProps {
  readonly title: string;
  readonly description: string;
  readonly iconUrl: string;
  readonly iconAlt: string;
}

export default function EventFeatureCard({
  title,
  description,
  iconUrl,
  iconAlt,
}: EventFeatureCardProps) {
  return (
    <article className="flex flex-col items-center text-center space-y-3">
      <div className="relative w-16 h-16">
        <Image
          src={iconUrl}
          alt={iconAlt}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </article>
  );
}

