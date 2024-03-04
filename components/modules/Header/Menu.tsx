'use client';

import { JSX, useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { closeMenu, useIsMenuOpen } from '@/context/modals';
import { AllowedLangs } from '@/constants/lang';
import { setLang } from '@/context/lang';

const handleSwitchLang = (lang: AllowedLangs) => () => {
  setLang(lang);
  window.localStorage.setItem('lang', lang);
};

const handleCloseMenu = () => {
  closeMenu();
};

const handleActiveLangClass = (lang: string, currentLang: string) => (lang === currentLang ? 'lang-active' : '');

export const Menu = (): JSX.Element | null => {
  const [showCatalogList, setShowCatalogList] = useState(false);
  const [showBuyersList, setShowBuyersList] = useState(false);
  const { vocabulary, lang } = useLang();
  const menuIsOpen = useIsMenuOpen();

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <button className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`} onClick={handleCloseMenu} />

        <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${handleActiveLangClass('ru', lang)}`}
            onClick={handleSwitchLang(AllowedLangs.RU)}
          >
            RU
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${handleActiveLangClass('en', lang)}`}
            onClick={handleSwitchLang(AllowedLangs.EN)}
          >
            EN
          </button>
        </div>
        <div>Menu</div>
      </div>
    </nav>
  );
};
