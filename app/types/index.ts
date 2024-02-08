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
  