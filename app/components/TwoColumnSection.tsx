interface TwoColumnSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

export default function TwoColumnSection({
  leftContent,
  rightContent,
  className = '',
}: TwoColumnSectionProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700 leading-relaxed">{leftContent}</div>
          <div className="text-gray-700">{rightContent}</div>
        </div>
      </div>
    </section>
  );
}
