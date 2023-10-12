import { useEffect, useState } from 'react';
import { NativeScrollEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchCharactersCollection } from '../../services/store/characters/characters.operations';

import { NAV_PATH_NAMES } from '../../constants';

import { TNavHomeProps } from './home.types';

export const useHomeState = () => {
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const dispatch = useAppDispatch();
  const charactersData = useAppSelector(state => state.characters.characters);
  const isLoadingCharacters = useAppSelector(state => state.characters.isLoading);
  const { navigate } = useNavigation<TNavHomeProps>();

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    await dispatch(fetchCharactersCollection({ page: charactersPage }));
    setCharactersPage((prevState: number) => (prevState += 1));
    isFirstLaunch && setIsFirstLaunch(false);
  };

  const onPressFavourite = () => {
    navigate(NAV_PATH_NAMES.Profile);
  };

  const handleLoadMore = () => {
    fetchCharacters();
  };

  const handleScroll = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !isLoadingCharacters) {
      handleLoadMore();
    }
  };

  return {
    charactersData,
    onPressFavourite,
    charactersPage,
    handleScroll,
    handleLoadMore,
    isLoadingCharacters,
    isFirstLaunch,
  };
};
