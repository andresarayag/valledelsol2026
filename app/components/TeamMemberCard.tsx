import Image from 'next/image';

interface TeamMemberCardProps {
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly imageUrl: string;
}

export default function TeamMemberCard({
  name,
  role,
  description,
  imageUrl,
}: TeamMemberCardProps) {
  return (
    <article className="flex flex-col items-center text-center space-y-4">
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 160px, 192px"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm font-medium text-gray-600">{role}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

