import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCharactersCollection } from './characters.operations';

import { initialGalleryState } from './characters.constants';

import { TCharacter } from '../../../typings';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialGalleryState,
  reducers: {},
  extraReducers: builder => {
    ////Get user via asyncThunk
    builder
      .addCase(fetchCharactersCollection.fulfilled, (state, { payload }: PayloadAction<TCharacter[]>) => {
        if (!state.characters) {
          state.characters = payload;
        } else {
          state.characters = [...state.characters, ...payload];
        }
        state.isLoading = false;
      })
      .addCase(fetchCharactersCollection.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchCharactersCollection.rejected, (state, action) => {
        state.error = action.error.message;

        state.isLoading && (state.isLoading = false);
      });
  },
});

export const charactersReducer = charactersSlice.reducer;
