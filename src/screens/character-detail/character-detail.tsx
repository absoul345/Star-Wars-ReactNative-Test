import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Layout } from '../../components/templates';

import { TCharacter } from '../../typings';

import { CharacterDetailScreenStyled as Styled } from './character-detail.styles';

type TParams = { character: TCharacter };

export const CharacterDetailScreen = () => {
  const { params } = useRoute();
  const { character } = params as TParams;

  return (
    <Layout withTopMargin withPaddingHorizontal>
      <Styled.Wrapper>
        <Styled.SubTitleText>Name:</Styled.SubTitleText>
        <Styled.Text>{character.name}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Birth Day:</Styled.SubTitleText>
        <Styled.Text>{character.birth_year}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Height:</Styled.SubTitleText>
        <Styled.Text>{character.height}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Weight:</Styled.SubTitleText>
        <Styled.Text>{character.mass}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Eye Color:</Styled.SubTitleText>
        <Styled.Text>{character.eye_color}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Hair Color:</Styled.SubTitleText>
        <Styled.Text>{character.hair_color}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.SubTitleText>Gender:</Styled.SubTitleText>
        <Styled.Text>{character.gender}</Styled.Text>
      </Styled.Wrapper>
    </Layout>
  );
};
