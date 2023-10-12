import { useEffect, useState } from 'react';

import { useAppSelector } from '../../services/store';

import { INITIAL_TOTAL_COUNTER } from './favorite-characters.constants';

export const useFavoriteCharactersState = () => {
  const [totalCounter, setTotalCounter] = useState<any>(INITIAL_TOTAL_COUNTER);

  const bookmarksCharacters = useAppSelector(state => state.bookmarks);

  useEffect(() => {
    if (!bookmarksCharacters) {
      setTotalCounter(INITIAL_TOTAL_COUNTER);
      return;
    }

    calculateGenders();
  }, [bookmarksCharacters]);

  const calculateGenders = () => {
    let maleCount = 0;
    let femaleCount = 0;
    let otherCount = 0;

    const totalCharactersLength = bookmarksCharacters?.length;

    bookmarksCharacters?.forEach(character => {
      switch (character.gender) {
        case 'male':
          maleCount++;
          break;
        case 'female':
          femaleCount++;
          break;
        default:
          otherCount++;
          break;
      }
    });
    setTotalCounter({ totalCharacters: totalCharactersLength, maleCount, femaleCount, otherCount });
  };

  return { bookmarksCharacters, totalCounter };
};
