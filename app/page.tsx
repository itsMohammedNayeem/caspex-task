import { getEpisodes } from './lib/api';

export default async function Home() {
  
  const data = await getEpisodes();
  console.log("🚀 ~ Home ~ data:", data)

  const [episodes, setEpisodes] = useState<Episode[]>(initialEpisodes);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  // Fetch characters when the component mounts
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
    };

    fetchCharacters();
  }, []);

  // Fetch characters for the selected episode
  const selectEpisode = async (episode: Episode) => {
    setSelectedEpisode(episode);
    const charactersData = await Promise.all(
      episode.characters.map((url) =>
        fetch(url).then((response) => response.json())
      )
    );
    setCharacters(charactersData);
  };

  return (
    <main className="flex min-h-screen font-mono flex-col items-center justify-between p-24">
          <div className="container mx-auto p-4">
      <div className="flex">
        <aside className="w-1/5">
            <ul className="border-r-2 border-gray-200">
            <li className="p-2 cursor-pointer bg-blue-500 text-white">
                Episodes
              </li>
            {/* {episodes.map((episode) => (
              <li
                key={episode.id}
                onClick={() => selectEpisode(episode)}
                className={`p-2 cursor-pointer ${selectedEpisode?.id === episode.id ? 'bg-blue-500 text-white' : 'bg-white'}`}
              >
                {episode.name}
              </li>
            ))} */}
          </ul>
        </aside>
        <main className="w-4/5 p-4">
            <div className="grid grid-cols-4 gap-4">
              
            {/* {characters.map((character) => (
              <div key={character.id} className="text-center p-2 border">
                <img src={character.image} alt={character.name} className="mx-auto" />
                <p>{character.name}</p>
              </div>
            ))} */}
          </div>
        </main>
      </div>
    </div>
    </main>
  );
}
