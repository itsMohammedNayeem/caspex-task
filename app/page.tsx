import EpisodeList from "./components/EpisodeList";
import { getEpisodes } from "./lib/api";

export default async function Home() {
  const data = await getEpisodes();

  return (
    <main className="flex min-h-screen font-mono flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <div className="flex">
          <aside className="w-1/5">
            <ul className="border-gray-200 text-balance">

              <h3 className="py-2 pr-6 underline font-bold text-white">
                Episodes
              </h3>

              <EpisodeList episodes={data} />
              
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
