"use client";
import { CharacterType } from "@/app/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CharacterDetail = () => {
  const [character, setCharacter] = useState<CharacterType>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [episodes, setEpisodes] = useState<any[]>([]);

  const pathname = usePathname();
  const id = pathname.split("/").length - 1;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!id) return;

        const characterRes = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        if (!characterRes.ok) {
          throw new Error(`Failed to fetch character: ${characterRes.status}`);
        }

        const characterData = await characterRes.json();
        setCharacter(characterData);

        // Fetch episodes details if characterData.episode contains URLs
        if (characterData.episode.length > 0) {
          const episodesData = await Promise.all(
            characterData.episode.map((url: string) =>
              fetch(url)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Failed to fetch episode");
                  }
                  return response.json();
                })
                .catch((err) => {
                  throw new Error(err.message);
                })
            )
          );
          setEpisodes(episodesData);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <div>
      <h1>{character?.name}</h1>
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <h2>Episodes:</h2>
      <ul>
        {episodes.map((episode, index) => (
          <li key={index}>
            {episode.name} - {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
