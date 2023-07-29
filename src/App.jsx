import Split from 'react-split';
import Form from './components/Form';
import Viewer from './components/Viewer';
import { useState } from 'react';
import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    gitHub: '',
    linkedIn: '',
  });
  function handleChangePersonalDetails(e) {
    setPersonalDetails(() => {
      const field = e.target.name;
      const newState = { ...personalDetails, [field]: e.target.value };
      return newState;
    });
  }
  return (
    <main className="app-wrapper">
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Form
          personalDetails={personalDetails}
          handleChangePersonalDetails={handleChangePersonalDetails}
        ></Form>
        <Viewer></Viewer>
      </Split>
    </main>
  );
}

export default App;
