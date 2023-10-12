import styled from 'styled-components/native';

import { COLOR } from '../../../../theme/colors';
import { FONTS } from '../../../../theme/fonts';

export const LoadingStyled = {
  Container: styled.View`
    align-self: center;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.black};
    line-height: 25px;
  `,
};
