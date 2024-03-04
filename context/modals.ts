'use client';

import { createDomain } from 'effector';
import { useUnit } from 'effector-react/compat';
import { addOverflowHiddenToBody, removeOverflowHiddenFromBody } from '@/lib/utils/common';

const modals = createDomain();

export const closeMenu = modals.createEvent();
export const openMenu = modals.createEvent();

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => {
    addOverflowHiddenToBody();
    return true;
  })
  .on(closeMenu, () => {
    removeOverflowHiddenFromBody();
    return false;
  });

export const useIsMenuOpen = () => useUnit($menuIsOpen);
