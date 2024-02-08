import React, { FC, memo } from "react";
import { CharacterGridProps } from "../types";

const CharacterGrid: FC<CharacterGridProps> = memo(({ characters }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {characters.map(character => (
        <div key={character.id} className="p-4 flex flex-col items-center bg-gray-700 rounded-lg">
          <img src={character.image} alt={character.name} loading="lazy" className="rounded-full w-24 h-24 object-cover" />
          <p className="text-white mt-2">{character.name}</p>
        </div>
      ))}
    </div>
  );
});

CharacterGrid.displayName = "CharacterGrid";

export default CharacterGrid;
