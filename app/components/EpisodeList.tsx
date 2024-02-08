// components/EpisodeList.tsx
import React from 'react';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface EpisodeListProps {
  episodes: Episode[];
  selectedEpisode: Episode | null;
  onEpisodeSelect: (episode: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, selectedEpisode, onEpisodeSelect }) => {
  return (
    <ul className="border-r-2 border-gray-200">
      {episodes.map((episode) => (
        <li
          key={episode.id}
          onClick={() => onEpisodeSelect(episode)}
          className={`p-2 cursor-pointer ${selectedEpisode?.id === episode.id ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          {episode.name}
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
