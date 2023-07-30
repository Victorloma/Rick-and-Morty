export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "unknown";
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