import Navbar from './universalComps/Navbar';
import Routes from './config/routes';
import testjs from './test';


function App() {
  testjs.test1();
  testjs.test2();
  testjs.test3();
  return (
    <div>
      <Navbar />
      <div id="app"><Routes /></div>
    </div>
  );
}

export default App;
