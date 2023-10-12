import { TCharacter } from '../../typings';

export interface TParamsFetchCharactersCollection {
  page: number;
}

export type TCharacterState = {
  characters: TCharacter[] | null;
  isLoading: boolean;
  error: string | null | undefined;
};

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export type TCharacterCollectionResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: TCharacter[];
};

export type RootState = { characters: TCharacterState; bookmarks: TCharacter[] };
