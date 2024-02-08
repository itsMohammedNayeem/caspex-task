'use client';
import React from 'react';
import { CharacterGridProps } from '../types';


const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
    console.log("🚀 ~ characters:", characters)
    
  return (
    <div className="grid grid-cols-4 gap-4">
      {characters.map((character) => (
        <div key={character.id} className="text-center p-2 border">
          <img src="https://rickandmortyapi.com/api/character/avatar/435.jpeg" alt={character.name} className="h-24 w-auto rounded-full" />
          <p className='text-white text-xs mt-2'>{character.name}</p>
        </div>
      ))}
      </div>
  );
};

export default CharacterGrid;
