
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import StyledButton from './components/StyledButton';
import StyledButton1 from './components/StyledButton1';
import SButton from './components/SButton'; // external CSS
import LifecycleDemo from './components/LifecycleDemo';
import CounterUseState from './components/CounterUseState';
import CounterUseReducer from './components/CounterUseReducer';
import JokeFetcher from './components/JokeFetcher';
import InputFocus from './components/InputFocus';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './components/ThemeContext';
import Parent from './components/Parent';
import FormUseState from './components/FormUseState';
import FormUseRef from './components/FormUseRef';

function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <Header title="React App Overview - 23BCE1216" />
        <Content />
        
        
        <h2>2-4. Styled Buttons (CSS Techniques)</h2>
        <SButton />
        <StyledButton />
        <StyledButton1 />
        
        <h2>5. Lifecycle Demo</h2>
        {showLifecycle && <LifecycleDemo unmount={() => setShowLifecycle(false)} />}
        <button onClick={() => setShowLifecycle(!showLifecycle)}>
          Toggle LifecycleDemo
        </button>
        
        <h2>6. useState and useReducer</h2>
        <CounterUseState />
        <CounterUseReducer />
        
        <h2>7. useEffect - Joke API</h2>
        <JokeFetcher />
        
        <h2>8. useRef - Input Focus</h2>
        <InputFocus />
        
        <h2>9. useContext - Theme</h2>
        <ThemeToggle />
        
        <h2>10-11. Props and PropTypes</h2>
        <Parent />
        
        <h2>12(i). Form with useState</h2>
        <FormUseState />
        
        <h2>12(ii). Form with useRef</h2>
        <FormUseRef />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;