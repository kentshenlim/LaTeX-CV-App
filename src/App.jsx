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

  const [educationDetails, setEducationDetails] = useState([
    // List of objects
    {
      id: 0,
      institute: '',
      period: '',
      course: '',
      result: '',
      description: [['', 0]], // Array of tuples: [str, id]
    },
  ]);

  const [experienceDetails, setExperienceDetails] = useState([
    {
      id: 0,
      title: '',
      period: '',
      description: [['', 0]], // Array of tuples: [str, id]
    },
  ]);

  console.log(experienceDetails);

  return (
    <main className="app-wrapper">
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={16}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Form
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        ></Form>
        <Viewer></Viewer>
      </Split>
    </main>
  );
}

export default App;
