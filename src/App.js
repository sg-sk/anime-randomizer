import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <>
    <div className='App'>{<Home />}</div>
    <GlobalStyle />
  </>
);

export default App;
