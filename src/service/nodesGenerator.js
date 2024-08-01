// utils.js
export const generateElements = (character, films, starships) => {
  const nodes = [
    {
      id: `character-${character.id}`,
      type: 'input',
      data: { label: character.name },
      position: { x: 250, y: 0 },
    },
  ];

  const edges = [];

  character.films.forEach((filmId, index) => {
    const film = films.find(f => f.id === filmId);
    const filmNodeId = `film-${film.id}`;
    nodes.push({
      id: filmNodeId,
      data: { label: film.title },
      position: { x: 100 + index * 200, y: 150 },
    });
    edges.push({
      id: `edge-${character.id}-${film.id}`,
      source: `character-${character.id}`,
      target: filmNodeId,
      animated: true,
    });

    film.starships.forEach((starshipId, sIndex) => {
      if (character.starships.includes(starshipId)) {
        const starship = starships.find(s => s.id === starshipId);
        const starshipNodeId = `starship-${starship.id}`;
        nodes.push({
          id: starshipNodeId,
          data: { label: starship.name },
          position: { x: 50 + sIndex * 150, y: 300 },
        });
        edges.push({
          id: `edge-${film.id}-${starship.id}`,
          source: filmNodeId,
          target: starshipNodeId,
          animated: true,
        });
      }
    });
  });

  return { nodes, edges };
};
