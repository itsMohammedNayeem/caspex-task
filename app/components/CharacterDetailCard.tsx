import React from "react";
import { CharacterType } from "../types";

export const CharacterDetailCard = ({
  character,
}: {
  character: CharacterType;
}) => {
  return (
    <div className="font-mono max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
      {character?.image && (
        <img src={character.image} alt={character.name} className="w-full" />
      )}

      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 text-red-500">
          {character?.name}
        </h1>

        <p className="text-slate-600 text-base">
          <strong>Status:</strong> {character?.status}
        </p>

        <p className="text-slate-600 text-base">
          <strong>Species:</strong> {character?.species}
        </p>

        {character?.type && (
          <p className="text-slate-600 text-base">
            <strong>Type:</strong> {character?.type}
          </p>
        )}

        <p className="text-slate-600 text-base">
          <strong>Location:</strong> {character?.location?.name}
        </p>

        <p className="text-slate-600 text-base">
          <strong>Gender:</strong> {character?.gender}
        </p>
      </div>
    </div>
  );
};
