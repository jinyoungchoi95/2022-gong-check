/**  @jsxImportSource @emotion/react */
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

const App = () => {
  const content = useRoutes(routes);

  return <div id="app">{content}</div>;
};

export default App;
