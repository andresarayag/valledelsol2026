import Link from 'next/link';
import { ReactNode } from 'react';

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  target,
  rel,
  className = '',
}: PrimaryButtonProps) {
  const isExternal = href.startsWith('http');

  const classes = `
    inline-flex items-center justify-center
    px-10 py-5 rounded-full
    font-semibold text-lg
    transition-all duration-300
    hover:scale-105
    shadow-2xl
    ${className}
  `;

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={classes}
        style={{
          backgroundColor: '#FBB03B',
          color: '#111',
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      style={{
        backgroundColor: '#FBB03B',
        color: '#111',
      }}
    >
      {children}
    </Link>
  );
}