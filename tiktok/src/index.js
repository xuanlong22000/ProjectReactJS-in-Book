import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Effect } from './Effect';
import { ToDoList } from './ToDoList';

import { Twobinding } from './Twobinding';


function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung detail ${id}`
      })
    )
  }, 2000)

}

emitComment(1)
emitComment(2)
emitComment(3)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



