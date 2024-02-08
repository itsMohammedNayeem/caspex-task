interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
  }
  
  interface Character {
    id: number;
    name: string;
    image: string;
  }
  
  interface HomeProps {
    initialEpisodes: Episode[];
  }
  