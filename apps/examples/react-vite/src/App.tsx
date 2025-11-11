import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Body from './Body';
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Button, Checkbox, Heading } from '@rijkshuisstijl-community/components-react';
import { Alert } from '@rijkshuisstijl-community/components-react';
import { Icon } from '@rijkshuisstijl-community/components-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="rhc-theme">
        {/* geef alle thema tokens mee aan child components voor styling */}
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>ONBOARDING PROCES BIJ KOOP</h1>
        <Body></Body>
        <Button appearance="primary-action-button">Send</Button>
        <Checkbox aria-label="checkbox-label" disabled />
        <Checkbox></Checkbox>
        <Alert> Volg alle stapjes goed door!</Alert>
        <Alert type="warning">
          {' '}
          <Heading appearanceLevel={5} level={3}>
            Volg alle stapjes goed door!
          </Heading>
        </Alert>
        <Icon></Icon>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
