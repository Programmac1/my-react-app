import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Wrapper from './components/wrapper.js';
import Banner from './components/banner.js';

function App() {
  return (
    <div>
      <Header/>
      <Wrapper>
        <Banner />
      </Wrapper>
    </div>
  );
}

export default App;
