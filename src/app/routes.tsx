import { useRoutes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.tsx';
import NotFound from '../components/NotFound.tsx';
import AuthScreen from '../features/auth/AuthScreen.tsx';

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <AuthScreen />
    },
    { path: '*', element: <NotFound /> }
  ]);

  return (
    <>
      <ScrollToTop />
      {routes}
    </>
  );
}
