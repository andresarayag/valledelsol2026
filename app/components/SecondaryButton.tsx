import Link from 'next/link';
import { ReactNode } from 'react';

type SecondaryButtonProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
};

export default function SecondaryButton({
  href,
  children,
  target,
  rel,
  className = '',
}: SecondaryButtonProps) {
  const isExternal = href.startsWith('http');

  const classes = `
    inline-flex items-center justify-center
    px-10 py-5
    rounded-full
    border-2 border-black
    text-black
    font-medium
    text-lg
    transition-all
    duration-300
    ease-out
    hover:bg-black
    hover:text-white
    hover:scale-105
    hover:shadow-xl
    ${className}
  `;

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}