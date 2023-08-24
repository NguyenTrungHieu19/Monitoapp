import { RouterProvider } from 'react-router-dom';
import appRoutes from './route/appRouter';
function App() {
  return (
  <div>
    <RouterProvider router={appRoutes}/>
  </div>
  );
}

export default App;
