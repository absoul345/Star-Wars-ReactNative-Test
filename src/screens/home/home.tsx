import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native';

import { Icon } from '../../components/atoms';
import { Layout } from '../../components/templates';
import { Loading } from './atoms/loading/loading';
import { useHomeState } from './home.state';
import { CharacterItem } from './organisms/character-item/character-list';

import { HomeScreenStyled as Styled } from './home.styles';

export const HomeScreen = () => {
  const { charactersData, onPressFavourite, handleScroll, isLoadingCharacters, isFirstLaunch } = useHomeState();

  return (
    <Layout>
      <Styled.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1000}
        onMomentumScrollEnd={({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
          if (!handleScroll) {
            return;
          }
          handleScroll(nativeEvent);
        }}>
        <Styled.FavouriteWrapperBtn onPress={() => onPressFavourite()}>
          <Styled.FavouriteText>Your Favorite Characters</Styled.FavouriteText>
          <Icon type="favorite_document" size={20} />
        </Styled.FavouriteWrapperBtn>
        <Styled.TitleText>Star Wars Character List</Styled.TitleText>
        <View>
          {charactersData?.map((item, _) => (
            <View key={item.name}>
              <CharacterItem character={item} />
            </View>
          ))}
        </View>
        {isLoadingCharacters && isFirstLaunch && <Loading />}
      </Styled.ScrollView>
      {isLoadingCharacters && !isFirstLaunch && <Loading />}
    </Layout>
  );
};
