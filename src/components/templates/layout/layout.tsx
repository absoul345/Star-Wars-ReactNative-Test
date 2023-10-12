import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { LayoutStyled as Styled } from './layout.styles';

interface LayoutProps {
  children: React.ReactNode;
  withTopMargin?: boolean;
  withBottomMargin?: boolean;
  withPaddingHorizontal?: boolean;
}

export const Layout = ({
  children,
  withTopMargin = false,
  withBottomMargin = false,
  withPaddingHorizontal = false,
}: LayoutProps) => {
  const marginTop = withTopMargin ? moderateScale(30) : 0;
  const marginBottom = withBottomMargin ? moderateScale(30) : 0;
  const paddingHorizontal = withPaddingHorizontal ? moderateScale(20) : 0;

  return <Styled.Container style={{ marginTop, marginBottom, paddingHorizontal }}>{children}</Styled.Container>;
};
