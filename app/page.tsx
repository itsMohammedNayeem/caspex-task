import EpisodeList from "./components/EpisodeList";
import { getEpisodes } from "./lib/api";

export default async function Home() {
  const data = await getEpisodes();

  return (
    <main className="flex min-h-screen font-mono flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <div className="flex">
          <ul className="border-gray-200 text-balance">
            <EpisodeList episodes={data} />
          </ul>
        </div>
      </div>
    </main>
  );
}
