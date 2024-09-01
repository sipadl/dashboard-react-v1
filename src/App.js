import {Header, Sidebar} from './Component';
import Route from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css'

function App() {
    if(window.location.href == '') {
        return (
            <div className="d-flex">
            <div>
                <Sidebar/>
            </div>
            <div className="content">
                <Header />
                <div className='p-3'>
                <Route/>
                </div>
            </div>
        </div>
    );
    } else {
        return (
            <Route />
        )
    }
}

export default App;
