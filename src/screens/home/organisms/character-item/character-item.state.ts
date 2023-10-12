import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { addBookmark, removeBookmark } from '../../../../services/store/bookmarks/bookmarks.reducer';
import { TProp } from './character-list';

import { NAV_PATH_NAMES } from '../../../../constants';

import { TCharacter } from '../../../../typings';
import { TNavCharacterDetailProps } from '../../../../typings';

export const useCharacterItemState = ({ character }: TProp) => {
  const [toggleBookMark, setToggleBookMark] = useState<boolean>(false);
  const bookmarks = useAppSelector(state => state.bookmarks);
  const { name } = character as TCharacter;
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<TNavCharacterDetailProps>();

  useEffect(() => {
    changeInitialToggleBookmark();
  }, []);

  useEffect(() => {
    if (!bookmarks) {
      setToggleBookMark(false);
    }
  }, [bookmarks]);

  const onPressBookmark = () => {
    bookmarkOperation();
    setToggleBookMark(!toggleBookMark);
  };

  const onPressNameCharacter = () => {
    navigate(NAV_PATH_NAMES.CharacterDetail, { character });
  };

  const bookmarkOperation = () => {
    if (!toggleBookMark) {
      dispatch(addBookmark(character));
    } else {
      dispatch(removeBookmark(name));
    }
  };

  const changeInitialToggleBookmark = () => {
    bookmarks?.map(bookmark => bookmark.name === name && setToggleBookMark(true));
  };

  return { name, onPressBookmark, toggleBookMark, onPressNameCharacter };
};
