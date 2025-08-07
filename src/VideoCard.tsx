import { Video } from "./interfaces";

interface VideoProps {
    video: Video;
};

const VideoCard: React.FC<VideoProps> = ({ video }) => (
    <div style={{ display: 'inline-block', padding: '2rem' }}>
        <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded" width={200} height="auto" /><br />
        <p className="mt-2 text-sm">{video.title}</p>
    </div>
);
export default VideoCard;