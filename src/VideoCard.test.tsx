import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';
import { Video } from './interfaces';

describe('VideoCard', () => {
    const mockVideo: Video = {
        id: '1',
        title: 'Test Video Title',
        thumbnail: 'https://example.com/thumb.jpg',
    };

    it('renders the video title', () => {
        render(<VideoCard video={mockVideo} key={undefined} />);
        expect(screen.getByText('Test Video Title')).toBeInTheDocument();
    });

    it('renders the thumbnail image with correct src and alt', () => {
        render(<VideoCard video={mockVideo} />);
        const img = screen.getByAltText('Test Video Title') as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toBe('https://example.com/thumb.jpg');
    });
});
