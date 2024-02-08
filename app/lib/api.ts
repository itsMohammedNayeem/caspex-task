export async function getEpisodes() {
    const res = await fetch('https://rickandmortyapi.com/api/episode');
  
    if (!res.ok) {
      throw new Error('Failed to fetch episodes');
    }
  
    const { results: initialEpisodes } = await res.json();
  
    return {
      props: {
        initialEpisodes,
      },
    };
  }
  