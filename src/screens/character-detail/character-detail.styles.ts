import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '../../theme/colors';
import { FONTS } from '../../theme/fonts';

export const CharacterDetailScreenStyled = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${moderateScale(20)}px;
  `,
  SubTitleText: styled.Text`
    margin-right: ${scale(10)}px;
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.black};
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.darkBlue};
  `,
};
