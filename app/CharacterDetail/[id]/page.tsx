// app/CharacterDetail/[id]/page.tsx
"use client";
import { CharacterDetailCard } from "@/app/components/CharacterDetailCard";
import { EpisodeDetailCard } from "@/app/components/EpisodeDetailCard";
import { CharacterType } from "@/app/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CharacterDetail = () => {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true); // Set loading to true at the start of the fetch operation

        const characterRes = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        if (!characterRes.ok) {
          throw new Error(`Failed to fetch character: ${characterRes.status}`);
        }

        const characterData = await characterRes.json();
        setCharacter(characterData);

        if (characterData.episode.length > 0) {
          const episodesData = await Promise.all(
            characterData.episode.map(async (url: string) => {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error("Failed to fetch episode");
              }
              return response.json();
            })
          );
          setEpisodes(episodesData);
        }

        setLoading(false); // Set loading to false after the data is fetched
      } catch (err: any) {
        setError(err.message);
        setLoading(false); // Ensure loading is set to false even if an error occurs
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center text-lg">{error}</p>;

  return (
    <div className="p-4 space-y-6 bg-gray-400">
      {character && <CharacterDetailCard character={character} />}

      <div className="font-mono mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-slate-700">
          Episodes:
        </h2>
        <div className="flex flex-wrap -mx-2">
          {episodes.map((episode, index) => (
            <EpisodeDetailCard index={index} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
