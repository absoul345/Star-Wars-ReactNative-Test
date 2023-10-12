import axios from 'axios';

import { PEOPLE_PATH, SWAPI_BASE_URL } from '../../constants';

import { TCharacterCollectionResponse, TParamsFetchCharactersCollection } from './services.types';

const instance = axios.create({
  baseURL: SWAPI_BASE_URL,
});

export const getStarWarsCharacterCollection = async ({ page }: TParamsFetchCharactersCollection) => {
  try {
    const response = await instance<TCharacterCollectionResponse>({
      url: `${PEOPLE_PATH}?page=${page}`,
      method: 'GET',
    });


    return response;
  } catch (error) {
    console.log('error', error);
  }
};

