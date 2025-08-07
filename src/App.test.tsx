import { render, screen } from '@testing-library/react';
import Header from './Header';


const mockVideos = [
  { id: '1', title: 'Mock Title 1', thumbnailUrl: 'mock1.jpg' },
];

beforeEach(() => {
  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockVideos),
    })
  );
});


describe('NewsAllDay', () => {
  it('renders the header', async () => {
    render(<Header title='News All Day' />);
    expect(screen.getByText(/News All Day/i)).toBeInTheDocument();
  });
});

// describe('NewsAllDay - updateVideos logic', () => {
//   it('fetches videos and renders them on mount', async () => {
//     render(<App />);
//     await waitFor(() => {
//       expect(screen.getByText('Mock Title 1')).toBeInTheDocument();
//       expect(screen.getByAltText('Mock Title 1')).toHaveAttribute('src', 'mock1.jpg');
//     });
//   });
// });

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve([
//       { id: '1', title: 'Test Video', thumbnail: 'test.jpg' }
//     ]),
//   })
// ) as jest.Mock;

