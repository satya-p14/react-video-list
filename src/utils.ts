import axios from "axios";
import { Video } from "./interfaces";

export const fetchAndSortVideos = async () => {
  const videos = await axios.get<Video[]>("/data.json");

  return videos.data.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
};
