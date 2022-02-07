import React, { Suspense } from 'react'
import Preloader from './components/preloader/Preloader'

const AppRoutes = React.lazy(() => import('./components/appRoutes/Routes'))



function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
