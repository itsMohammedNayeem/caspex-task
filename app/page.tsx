import EpisodeList from "./components/EpisodeList";
import { getEpisodes } from "./lib/api";

export default async function Home() {
  const data = await getEpisodes();

  return (
    <main className="flex max-h-screen font-mono flex-col items-center justify-between mt-8">
      <div className="container mx-auto p-4">
        <div className="flex">
          <ul className="border-gray-200 text-balance">
          <h3 className="text-white text-2xl mb-2">Episodes</h3>
            <EpisodeList episodes={data} />
          </ul>
        </div>
      </div>
    </main>
  );
}
