import Navbar from './universalComps/Navbar';
import Routes from './config/routes';

function App() {
  return (
    <div>
      <Navbar />
      <div id="app"><Routes /></div>
    </div>
  );
}

export default App;
