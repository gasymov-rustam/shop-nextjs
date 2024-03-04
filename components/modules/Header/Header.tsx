'use client';

import { JSX, memo } from 'react';
import { useLang } from '@/hooks/useLang';
import { Logo } from '@/components/elements/Logo';
import Link from 'next/link';
import { Menu } from '@/components/modules/Header/Menu';
import { openMenu } from '@/context/modals';

export const Header = memo((): JSX.Element | null => {
  const { vocabulary } = useLang();
  const buttonCaption = vocabulary.header.menu_btn;

  const handleMenuOpen = () => {
    openMenu();
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleMenuOpen}>
          {buttonCaption}
        </button>

        <Menu />

        <div className='header__logo'>
          <Logo />
        </div>

        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
          </li>

          <li className='header__links__item'>
            <Link href='/favorites' className='header__links__item__btn header__links__item__btn--favorites' />
          </li>

          <li className='header__links__item'>
            <Link href='/comparison' className='header__links__item__btn header__links__item__btn--comparison' />
          </li>

          <li className='header__links__item'>
            <Link href='/cart' className='header__links__item__btn header__links__item__btn--cart' />
          </li>

          <li className='header__links__item'>
            <Link href='/profile' className='header__links__item__btn header__links__item__btn--profile' />
          </li>
        </ul>
      </div>
    </header>
  );
});
