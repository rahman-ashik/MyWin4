import logo from './logo.svg';
import './App.css';

function App() {

  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://nylottery.ny.gov/draw-game?game=win4');
    // await page.screenshot({ path: 'example.png' });
    const title = await page.title();
    console.log(title);
    await browser.close();
  })();



  return (
    <>
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <img src="example.png" className="App-logo" alt="logo" />
      </Container>
    </>
  );
}

export default App;
