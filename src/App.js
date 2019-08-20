import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import CourseList from "./components/CourseList";

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CourseList />
      </div>
    </Provider>
  )
}

export default App;
