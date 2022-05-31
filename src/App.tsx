import moment from 'moment';
import React, { useState } from 'react';

import { Calendar } from './components'

function App() {
  const [currentDate, setCurrentDate] = useState(moment());

  return (
    <Calendar date={currentDate} onChange={setCurrentDate} />
  );
}

export default App;
