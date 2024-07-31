import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import Header from './Header/Header';
import { useDispatch } from 'react-redux';

const FullInfoPage = lazy(() => import('pages/FullInfoPage/fullInfoPage'));
const HomePage = lazy(() => import('pages/HomePage/homePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  return (
    <>
      {/* <Header /> */}
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero/:heroId/*" element={<FullInfoPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
