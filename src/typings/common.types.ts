export type TStarWarsPeopleResponse = {
  results: TCharacter[] | [];
};

export type TCharacter = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: any[];
  created: string;
  edited: string;
  url: string;
};

export type TPhotoSize = { thumb: string; full: string };
