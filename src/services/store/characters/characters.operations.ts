import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getStarWarsCharacterCollection } from '../services.api';

import { TCharacter } from '../../../typings';
import { KnownError, TParamsFetchCharactersCollection } from '../services.types';

export const fetchCharactersCollection = createAsyncThunk<
  TCharacter[],
  TParamsFetchCharactersCollection,
  { rejectValue: KnownError }
>('characters/fetchCharactersCollection', async (charactersParams, { rejectWithValue }) => {
  try {
    const response = await getStarWarsCharacterCollection(charactersParams);

    return response!.data.results;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
