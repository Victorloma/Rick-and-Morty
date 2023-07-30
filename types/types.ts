export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string
  };
  location: {
    name: string;
    url: string
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Statistics = {
    top3Characters: Character[],
    mostAssignedStatus: string,
    popularHumanLocation: string,
    mostMales: string,
}