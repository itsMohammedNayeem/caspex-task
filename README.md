# Rick and Morty Character Viewer

This project is a simple web application that allows users to browse characters from the "Rick and Morty" TV series by episode.

## Features

- View a list of episodes from the "Rick and Morty" series.
- Select an episode to see the characters featured in that episode.
- Characters are displayed in a grid layout with their name and image.

## Technologies stack

- **Next.js**: A React framework for building single-page JavaScript applications with server-side rendering and route pre-fetching.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Rick and Morty API**: Public API for fetching data about characters and episodes from the "Rick and Morty" series.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/itsMohammedNayeem/caspex-task.git
```

2. Install dependencies:

```bash
cd caspex-task
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Usage

- Navigate to the home page to see a list of episodes.
- Scroll through the list of characters to see their names and images.
- Initially, the first episode is selected and the characters of that episode are displayed.
  - Click on the episode name to view the characters of that episode.
  - Unselect the episode to view the characters of first episode.
- Click on a character to view more details about that character.

## Code Structure

- `app/components/EpisodeList.tsx`: React component for displaying the list of episodes and handling episode selection.
- `app/components/CharacterGrid.tsx`: React component for displaying the grid of characters.
- `app/components/CharacterCard.tsx`: React component for displaying a single character card.
- `app/components/CharacterDetailCard.tsx`: React component for displaying a single character detail.
- `app/types.ts`: TypeScript type definitions for episode and character data structures.
- `app/lib/api.ts`: Functions for fetching episode data from the Rick and Morty API.
- `app/page.tsx`: Entry point of the application, renders the `EpisodeList` component.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## Screenshot

<img width="1292" alt="Screenshot 2024-02-08 at 11 40 49 PM" src="https://github.com/itsMohammedNayeem/caspex-task/assets/127741549/c8f681ce-a50e-4ac7-b0c5-0a9fc45e4bc2">
