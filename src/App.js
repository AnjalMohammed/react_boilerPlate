import React from 'react';

import "./styles/index.less";
import Routes from './Routes';
import { CounterProvider } from './contexts/counterContext';

const App = () => (
    <CounterProvider>
        <h1>Hello World, React!</h1>
        <Routes />
    </CounterProvider>

)

export default App;