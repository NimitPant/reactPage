

import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'
import TabButton from './components/TabButton'

import {EXAMPLES} from './data.js'


function App() {

  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
