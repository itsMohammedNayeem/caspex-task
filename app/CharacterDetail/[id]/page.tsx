// app/CharacterDetail/[id]/page.tsx
"use client";
import { CharacterType } from "@/app/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CharacterDetail = () => {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);

  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Use pop() to get the last segment

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
    <>
      <div className="font-mono max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
        {character?.image && (
          <img src={character.image} alt={character.name} className="w-full" />
        )}
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2 text-gray-800">
            {character?.name}
          </h1>
          <p className="text-gray-600 text-base">
            <strong>Status:</strong> {character?.status}
          </p>
          <p className="text-gray-600 text-base">
            <strong>Species:</strong> {character?.species}
          </p>
        </div>
      </div>

      <div className="font-mono mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-slate-300">
          Episodes:
        </h2>
        <div className="flex flex-wrap -mx-2">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="px-6 py-4">
                  <div className="font-bold text-md mb-1 text-red-400">
                    {episode.name}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Air Date: {episode.air_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
