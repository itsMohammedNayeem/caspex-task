import React from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterGridProps {
  characters: Character[];
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {characters.map((character) => (
        <div key={character.id} className="text-center p-2 border">
          <img src={character.image} alt={character.name} className="mx-auto" />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
