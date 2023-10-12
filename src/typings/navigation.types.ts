import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NAV_PATH_NAMES } from './../constants/constants';

export type TNavCharacterDetailProps = NativeStackNavigationProp<any, keyof typeof NAV_PATH_NAMES.CharacterDetail>;
