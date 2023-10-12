import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '../../theme/colors';
import { FONTS } from '../../theme/fonts';

export const FavoriteCharactersStyled = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${moderateScale(30)}px;
  `,
  Title: styled.Text`
    margin-right: ${scale(10)}px;
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.black};
    line-height: ${moderateScale(25)}px;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.darkBlue};
    line-height: ${moderateScale(25)}px;
  `,
  ResetBtn: styled.TouchableOpacity`
    align-self: center;
    border-width: 1px;
    border-radius: 20px;
    padding: ${moderateScale(10)}px;

    background-color: ${COLOR.background.beigeDark};
  `,
  ResetText: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.cloudyBlue};
    line-height: 20px;
  `,
};
