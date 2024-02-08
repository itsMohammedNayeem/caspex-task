import React, { FC } from 'react';
import { CharacterGridProps } from '../types';


const CharacterGrid: FC<CharacterGridProps> = ({ characters }) => {
    console.log("🚀 ~ characters:", characters)
    
  return (
    <div className="grid gap-4 grid-cols-5">
      {characters.map((character) => (
        <div key={character.id} className="text-center p-2">
              <img src={character.image} alt={character.name} className="rounded-full size-24" />
          <p className='text-white text-xs mt-2'>{character.name}</p>
        </div>
      ))}
      </div>
  );
};

export default CharacterGrid;
