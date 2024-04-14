import './App.css';
import CatApiDataFetcher from './components/CatApiDataFetcher';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <CatApiDataFetcher />
      <Footer />
    </Wrapper>
  );
}

export default App;
