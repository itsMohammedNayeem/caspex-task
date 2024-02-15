export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
}

interface HomeProps {
  initialEpisodes: Episode[];
}

export interface CharacterGridProps {
  characters: Character[];
}

export interface EpisodeListProps {
  episodes: Episode[];
}

export type CharacterType = {
  image: string | undefined;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  location?: {
    name: string;
  };
  episode?: string[];
};

export type EpisodeType = {
  name: string;
  air_date?: string;
  episode?: string;
};
