import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Todos from './Todos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todos />
  </StrictMode>,
);
