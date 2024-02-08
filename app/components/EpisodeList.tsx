"use client";
import React, { useEffect, useState } from "react";
import { Character, Episode, EpisodeListProps } from "../types";
import CharacterGrid from "./CharacterGrid";

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const [episode, setEpisode] = useState<Episode["id"]>(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/episode/${episode}`
      )
        .then((res) => res.json())
        .then((data) => data.characters);

      const characterData = await Promise.all(
        data.map((character: string) =>
          fetch(character).then((res) => res.json())
        )
      );
      setCharacters(characterData);
    };

    fetchCharacters();
  }, [episode]);

  return (
    <div className="flex">
      <ul className="border-r-2 border-gray-200">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => setEpisode(episode.id)}
            className="p-2 text-sm text-pretty mr-2 cursor-pointer text-white hover:bg-blue-200 hover:text-black active:bg-blue-300 active:text-black transition-colors duration-300 ease-in-out"
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
