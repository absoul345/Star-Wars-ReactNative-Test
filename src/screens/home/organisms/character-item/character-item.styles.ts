import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '../../../../theme/colors';
import { FONTS } from '../../../../theme/fonts';

export const CharacterItemStyled = {
  Container: styled.View`
    flex-direction: 'column';
  `,
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${moderateScale(30)}px;
    margin-bottom: ${moderateScale(40)}px;
  `,
  TextName: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.mediumSmall}px;
    color: ${COLOR.font.darkBlue};
    line-height: 28.8px;
  `,
  TextBtnWrapper: styled.TouchableOpacity`
    width: ${scale(150)}px;
    height: 100%;
    justify-content: center;
  `,
  FavoriteBtn: styled.TouchableOpacity``,
};
