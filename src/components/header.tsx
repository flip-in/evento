'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Logo from './logo';
import { cn } from '@/lib/utils';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Events', path: '/events/all' },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className='flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />
      <nav className='h-full'>
        <ul className='flex gap-x-6 text-sm h-full'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                'hover:text-white flex items-center transition relative',
                {
                  'text-white': activePathname === route.path,
                  'text-white/50': activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <motion.div
                  className='bg-accent h-1 w-full absolute bottom-0'
                  layoutId='header-active-link'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
