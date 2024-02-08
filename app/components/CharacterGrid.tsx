import React, { FC, memo } from "react";
import { CharacterGridProps } from "../types";

const CharacterGrid: FC<CharacterGridProps> = memo(({ characters }) => {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map(character => (
          <div key={character.id} className="p-4 flex flex-col items-center">
            <img src={character.image} alt={character.name} loading="lazy" className="rounded-full w-24 h-24 object-cover" />
            <p className="text-white mt-2">{character.name}</p>
          </div>
        ))}
      </div>
    );
  });

  
export default CharacterGrid;
