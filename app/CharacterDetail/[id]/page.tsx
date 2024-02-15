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
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">
        {character?.name}
      </h1>
      <p className="text-md text-gray-800">
        <strong>Status:</strong> {character?.status}
      </p>
      <p className="text-md text-gray-800">
        <strong>Species:</strong> {character?.species}
      </p>
      <h2 className="text-2xl text-green-500 my-4">Episodes:</h2>
      <ul className="list-disc pl-5">
        {episodes.map((episode, index) => (
          <li key={index} className="text-md text-purple-700 mb-1">
            {episode.name} -{" "}
            <span className="text-gray-600">{episode.air_date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
