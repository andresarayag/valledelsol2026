interface PageHeaderProps {
  title: string;
  className?: string;
}

export default function PageHeader({ title, className = '' }: PageHeaderProps) {
  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}
