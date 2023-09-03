import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className='app'>
      <Route path="/" component={HomePage} exact/>
      <Route path="/chat" component={ChatPage}/>
    </div>
  );
}

export default App;
