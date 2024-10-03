import {Header, Sidebar} from './Component';
import Route from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css'

function App() {
    if(window.location.pathname != '/' &&
        window.location.pathname != '/login' &&
        window.location.pathname != '/daftar' &&
        window.location.pathname != '/ubah-password' &&
        window.location.pathname != '/lupa-password') {
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
                <div className='mx-2'>© 2023 AMS. All Rights Reserved.</div>
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
