import React from 'react';

import { Layout } from '../../components/templates';
import { useAppDispatch } from '../../services/store';
import { resetBookmarks } from '../../services/store/bookmarks/bookmarks.reducer';
import { useFavoriteCharactersState } from './favorite-characters.state';

import { FavoriteCharactersStyled as Styled } from './favorite-characters.styles';

export const FavoriteCharactersScreen = () => {
  const { totalCounter } = useFavoriteCharactersState();
  const dispatch = useAppDispatch();

  const onPressReset = () => {
    dispatch(resetBookmarks(null));
  };

  return (
    <Layout withTopMargin withPaddingHorizontal>
      <Styled.Wrapper>
        <Styled.Title>Total Favorite Characters:</Styled.Title>
        <Styled.Text>{totalCounter?.totalCharacters}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Title>Total Male:</Styled.Title>
        <Styled.Text>{totalCounter?.maleCount}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Title>Total Female:</Styled.Title>
        <Styled.Text>{totalCounter?.femaleCount}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Title>Total Others:</Styled.Title>
        <Styled.Text>{totalCounter?.otherCount}</Styled.Text>
      </Styled.Wrapper>
      <Styled.ResetBtn onPress={() => onPressReset()}>
        <Styled.ResetText>Reset</Styled.ResetText>
      </Styled.ResetBtn>
    </Layout>
  );
};
