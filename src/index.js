import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div
      className="bg-grey-lighter min-h-screen leading-normal mx-auto"
      style={{ maxWidth: '1000px' }}
    >
      <Header />
      <main className="container mx-auto px-5 py-5">
        <Form />
      </main>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
