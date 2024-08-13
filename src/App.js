
import {Sidebar, Header } from './Component';
import Route  from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content p-4" style={{ flexGrow: 1 }}>
        <Route />
      </div>
    </div>
  );
}

export default App;
