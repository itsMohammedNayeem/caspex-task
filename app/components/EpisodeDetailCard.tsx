import React from "react";
import { EpisodeType } from "../types";

export const EpisodeDetailCard = ({
  episode,
  index,
}: {
  episode: EpisodeType;
  index: number;
}) => {
  return (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <div className="font-bold text-md mb-1 text-red-400">
            {episode.name}
          </div>
          <p className="text-gray-600 text-sm">Episode: {episode.episode}</p>
          <p className="text-gray-600 text-sm">Air Date: {episode.air_date}</p>
        </div>
      </div>
    </div>
  );
};
