import './App.css';
import HomePage from './components/pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}
export default App;
