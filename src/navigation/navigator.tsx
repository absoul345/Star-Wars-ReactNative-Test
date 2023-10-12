import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CharacterDetailScreen } from '../screens/character-detail';
import { FavoriteCharactersScreen } from '../screens/favorite-characters/favorite-characters';
import { HomeScreen } from '../screens/home';

import { NAV_PATH_NAMES } from '../constants';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAV_PATH_NAMES.Home}>
      <Stack.Screen name={NAV_PATH_NAMES.Home} component={HomeScreen} />
      <Stack.Screen name={NAV_PATH_NAMES.CharacterDetail} component={CharacterDetailScreen} />
      <Stack.Screen name={NAV_PATH_NAMES.Profile} component={FavoriteCharactersScreen} />
    </Stack.Navigator>
  );
};
