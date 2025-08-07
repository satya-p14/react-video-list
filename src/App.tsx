//  *  As a user I would like to view a "News All Day" swimlane that lists
//  * video thumbnails with their titles.
//  *
//  * Acceptance Criteria
//  * - Has a header titled "News All Day"
//  * - Calls videos api endpoint to fetch video items
//  * - Renders a list of VideoCards with the data returned from the api
//  * - Layout matches the design provided
//  * - Every 5 minutes check and see if we have new content to display, and only re-render the page if we do.
//  * - Only check for new content if the user remains on this page.
//  * Stretch goals
//  * - write a unit test with jest for your component(s) 

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Header';
import { Video } from './interfaces';
import VideoCard from './VideoCard';
import { fetchAndSortVideos } from './utils';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const previousDataRef = useRef<string>('');
  const isMountedRef = useRef(true);

  const updateVideos = async () => {
    try {
      const newVideos = await fetchAndSortVideos();
      const newDataString = JSON.stringify(newVideos);

      if (newDataString !== previousDataRef.current) {
        previousDataRef.current = newDataString;
        setVideos(newVideos);
        console.log(newVideos);
      }
    } catch (err) {
      console.error('Error updating videos:', err);
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    updateVideos();

    const interval = setInterval(() => {
      if (isMountedRef.current) {
        updateVideos();
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => {
      isMountedRef.current = false;
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <Header title='News All Day' />
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default App;
