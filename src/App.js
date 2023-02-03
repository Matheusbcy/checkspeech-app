import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';
import Formulario from './components/Formulario';

function App() {
  return (
    <div id="home">
      <GlobalStyle />
      <Header />
      <Main />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
