import React, { useEffect } from 'react';
import { ReactFlow } from '@xyflow/react';
import { selectElements } from '../../redux/Heroes/heroes.selectors';

import '@xyflow/react/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  exectHeroThunk,
  filmsWithHeroThunk,
  heroStarshipsThunk,
} from '../../redux/Heroes/heroesOperations';
import { handleElements } from '../../redux/Heroes/heroesReduser';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const FullInfoPage = () => {
  const { heroId } = useParams();
  const { nodes, edges } = useSelector(selectElements);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHeroData = async () => {
      await Promise.all([
        dispatch(filmsWithHeroThunk(heroId)),
        dispatch(exectHeroThunk(heroId)),
        dispatch(heroStarshipsThunk(heroId)),
      ]);
      dispatch(handleElements());
    };

    fetchHeroData();
  }, [heroId, dispatch]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
};

export default FullInfoPage;
