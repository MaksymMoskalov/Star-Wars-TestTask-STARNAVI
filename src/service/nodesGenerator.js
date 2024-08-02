export const generateElements = (character, films, starships) => {
  const nodes = [
    {
      id: `character-${character.id}`,
      type: 'customNode',
      data: {
        label: character.name,
        image: `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`,
      },
      position: { x: 400, y: 0 },
    },
  ];

  const edges = [];

  character.films.forEach((filmId, filmindex) => {
    const film = films.find(f => f.id === filmId);
    const filmNodeId = `film-${film.id}`;
    nodes.push({
      id: filmNodeId,
      type: 'customNode',
      data: {
        label: film.title,
        image: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
      },
      position: { x: 100 + filmindex * 200, y: 250 },
    });
    edges.push({
      id: `edge-${character.id}-${film.id}`,
      source: `character-${character.id}`,
      target: filmNodeId,
      animated: true,
      style: { stroke: 'yellow' },
    });

    film.starships.forEach((starshipId, starshipIndex) => {
      if (character.starships.includes(starshipId)) {
        const starship = starships.find(s => s.id === starshipId);
        const starshipNodeId = `starship-${starship.id}`;
        nodes.push({
          id: starshipNodeId,
          type: 'customNode',
          data: {
            label: starship.name,
            image: `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`,
          },
          position: { x: 50 + starshipIndex * 150, y: 550 },
        });
        edges.push({
          id: `edge-${film.id}-${starship.id}`,
          source: filmNodeId,
          target: starshipNodeId,
          animated: true,
          style: { stroke: 'yellow' },
        });
      }
    });
  });

  return { nodes, edges };
};
