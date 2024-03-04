import { JSX, ReactNode } from 'react';
import { Header } from '@/components/modules/Header/Header';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element | null => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <div />
    </>
  );
};
