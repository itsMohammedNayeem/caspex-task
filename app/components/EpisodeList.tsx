'use client';
import React, { FC, memo, useEffect, useState } from "react";
import { Character, EpisodeListProps } from "../types";
import CharacterGrid from "./CharacterGrid";

const EpisodeList: FC<EpisodeListProps> = memo(({ episodes }) => {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const episodeData = episodes.find(ep => ep.id === selectedEpisodeId);
      if (!episodeData) return;

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
    <div className="flex justify-center items-start mt-8">
      <ul className="w-1/4 bg-gray-800 text-white max-h-[700px] overflow-y-scroll">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => setSelectedEpisodeId(episode.id === selectedEpisodeId ? 1 : episode.id)}
            className={`p-4 cursor-pointer hover:bg-red-200 hover:text-black ${
              episode.id === selectedEpisodeId ? 'bg-red-500 text-black' : ''
            }`}
          >
            {episode.name}
          </li>
        ))}
      </ul>

      <div className="flex-1 p-4">
        <h2 className="text-white text-lg mb-4">
          {characters.length} characters in episode "{episodes.find(ep => ep.id === selectedEpisodeId)?.name}"
        </h2>
        <CharacterGrid characters={characters} />
      </div>
    </div>
  );
});

export default EpisodeList;
