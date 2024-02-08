'use client';
import React, { FC, useEffect, useState } from "react";
import { Character, EpisodeListProps } from "../types"; // Ensure correct import paths
import CharacterGrid from "./CharacterGrid";

const EpisodeList: FC<EpisodeListProps> = ({ episodes }) => {
  // Set the default selected episode to 1
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      // Find the episode by the selectedEpisodeId
      const episodeData = episodes.find(ep => ep.id === selectedEpisodeId);
      if (!episodeData) return;

      // Fetch characters for the selected episode
      const characterData = await Promise.all(
        episodeData.characters.map((characterUrl: string) =>
          fetch(characterUrl).then(res => res.json())
        )
      );

      setCharacters(characterData);
    };

    fetchCharacters();
  }, [selectedEpisodeId, episodes]);

  return (
    <div className="flex">
      <ul className="border-r-2 border-gray-200 max-h-[700px] overflow-y-scroll">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => setSelectedEpisodeId(episode.id === selectedEpisodeId ? 1 : episode.id)} // Revert to episode 1 if the same episode is clicked
            className={`p-2 text-sm cursor-pointer text-white hover:bg-blue-200 hover:text-black ${episode.id === selectedEpisodeId ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            {episode.name}
          </li>
        ))}
      </ul>
      <CharacterGrid characters={characters} />
    </div>
  );
};

export default EpisodeList;
