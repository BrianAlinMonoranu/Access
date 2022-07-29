import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'app__body' > { /* SideBar*/ } <
        Sidebar / > { /* Chat */ } <
        Chat / >
        <
        /div> <
        /div>
    );
}

export default App;