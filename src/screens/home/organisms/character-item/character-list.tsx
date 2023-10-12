import React from 'react';
import { Text } from 'react-native';

import { Icon } from '../../../../components/atoms';
import { useCharacterItemState } from './character-item.state';

import { TCharacter } from '../../../../typings';

import { CharacterItemStyled as Styled } from './character-item.styles';

export type TProp = {
  character: TCharacter;
};

export const CharacterItem: React.FC<TProp> = ({ character }) => {
  const { name, onPressBookmark, toggleBookMark, onPressNameCharacter } = useCharacterItemState({ character });

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TextBtnWrapper onPress={() => onPressNameCharacter()}>
          <Text>{name}</Text>
        </Styled.TextBtnWrapper>
        <Styled.FavoriteBtn onPress={() => onPressBookmark()}>
          <Icon
            type={toggleBookMark ? 'book_mark_minus' : 'book_mark_saved'}
            width={25}
            height={25}
            colorIcon={'green'}
          />
        </Styled.FavoriteBtn>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
