import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '../../theme/colors';
import { FONTS } from '../../theme/fonts';

export const HomeScreenStyled = {
  ScrollView: styled.ScrollView`
    flex-grow: 1;
    padding-horizontal: ${moderateScale(15)}px;
  `,
  FavouriteWrapperBtn: styled.TouchableOpacity`
    align-items: center;
    align-self: center;
    margin-top: ${moderateScale(30)}px;
    margin-bottom: ${moderateScale(30)}px;
    padding: ${moderateScale(10)}px;

    width: ${scale(180)}px;

    border-radius: 15px;
    border-width: 1px;

    background-color: ${COLOR.background.blue};
  `,
  FavouriteText: styled.Text`
    margin-bottom: ${moderateScale(10)}px;

    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.light};
    font-size: ${FONTS.size.xSmall}px;
    color: ${COLOR.font.white};
    line-height: 15px;
  `,
  TitleText: styled.Text`
    align-self: center;
    margin-bottom: ${moderateScale(40)}px;

    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large}px;
    color: ${COLOR.font.darkBlue};
    line-height: 28.8px;
  `,
};
