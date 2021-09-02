import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <>
    <div className='App bg-gray-50'>{<Home />}</div>
    <GlobalStyle />
  </>
);

export default App;
