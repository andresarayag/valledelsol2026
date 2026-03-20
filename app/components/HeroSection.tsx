interface HeroSectionProps {
  title: string;
  description?: string;
  className?: string;
}

export default function HeroSection({
  title,
  description,
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
