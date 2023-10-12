import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialBookmarksState } from './bookmarks.constants';

import { TCharacter } from '../../../typings';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: initialBookmarksState,
  reducers: {
    addBookmark: (state, { payload }: PayloadAction<TCharacter>) => {
      if (!state) {
        return [payload];
      }
      state.push(payload);
    },
    removeBookmark: (state, { payload }: PayloadAction<string>) => {
      return state!.filter(bookmark => bookmark.name !== payload);
    },
    resetBookmarks: (state, _) => {
      return (state = null);
    },
  },
});

export const { addBookmark, removeBookmark, resetBookmarks } = bookmarkSlice.actions;
export const bookmarksReducer = bookmarkSlice.reducer;
