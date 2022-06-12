import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import styled from 'styled-components';
import Button from './components/button/Button';
import headerPic from './assets/image-hero-desktop.png';
import CardList from './components/card/CardList';

const AppStyle = styled.div`
  .top-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  img {
    position: absolute;
    left: 650px;
    bottom: -120px;
    /* bottom: -300px; */
    width: 791px;
    height: 736px;
  }
  .button-des {
    margin-top: 100px;
  }

  .description-title {
    width: 457px;
    height: 359px;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin-right: 500px;
    .header-des {
      font-size: 56px;
    }
    .description {
      font-size: 18px;
      margin: 5px 0 10px 0;
    }
  }

  .bottom-content {
    margin-top: 300px;
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 748px;
    background: linear-gradient(#ffffff, #f1f2ff);
  }
`;
function App() {
  return (
    <AppStyle className='App'>
      <Header>
        <h1>Skilled</h1>
        <Button type={4}>Get Started</Button>
      </Header>
      <Content>
        <div className='top-content'>
          <div className='description-title'>
            <div className='header-des'>Maximize skill, minimize budget</div>
            <div className='description'>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </div>
            <Button type={2}>Get Started</Button>
          </div>

          <img src={headerPic} />
        </div>
        <div className='bottom-content'>
          <CardList cardType={1}>Check out our most popular courses! </CardList>
          <CardList cardType={2}>
            <h1>Animation</h1>

            <p>
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <h5>Get Started</h5>
          </CardList>

          <CardList cardType={2}>
            <h1>Design</h1>
            <p>
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
              <br />
            </p>
            <h5>Get Started</h5>
          </CardList>
          <CardList cardType={2}>
            <h1>Photography</h1>

            <p>
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <h5>Get Started</h5>
          </CardList>

          <CardList cardType={2}>
            <h1>Crypto</h1>
            <p>
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <h5>Get Started</h5>
          </CardList>
          <CardList cardType={2}>
            <h1>Business</h1>
            <p>
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>

            <h5>Get Started</h5>
          </CardList>
        </div>
      </Content>
      <Footer>
        <h1>Skilled</h1>
        <Button type={1}>Get Started</Button>
      </Footer>
    </AppStyle>
  );
}

export default App;
