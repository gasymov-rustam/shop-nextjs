'use client';

import { JSX } from 'react';
import Link from 'next/link';

export const Logo = (): JSX.Element | null => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/logo.svg' alt='Rostelecom logo' />
  </Link>
);
