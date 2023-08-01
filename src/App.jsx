import Split from 'react-split';
import Form from './components/Form';
import Viewer from './components/Viewer';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(() => {
    const prevData = JSON.parse(localStorage.getItem('latex-cv-forge'));
    if (prevData) return prevData.personalDetails;
    return {
      name: '',
      email: '',
      gitHub: '',
      linkedIn: '',
    };
  });

  const [educationDetails, setEducationDetails] = useState(() => {
    const prevData = JSON.parse(localStorage.getItem('latex-cv-forge'));
    if (prevData) return prevData.educationDetails;
    return [
      // Array of objects
      {
        id: 0,
        institute: '',
        period: '',
        course: '',
        result: '',
        description: [['', 0]], // Array of tuples: [str, id]
      },
    ];
  });

  const [experienceDetails, setExperienceDetails] = useState(() => {
    const prevData = JSON.parse(localStorage.getItem('latex-cv-forge'));
    if (prevData) return prevData.experienceDetails;
    return [
      {
        id: 0,
        title: '',
        period: '',
        description: [['', 0]], // Array of tuples: [str, id]
      },
    ];
  });

  const [skillsDetails, setSkillsDetails] = useState(() => {
    const prevData = JSON.parse(localStorage.getItem('latex-cv-forge'));
    if (prevData) return prevData.skillsDetails;
    return [
      {
        id: 0,
        category: '',
        descriptionStr: '',
      },
    ];
  });

  const [viewerAddress, setViewerAddress] = useState('../LaTeX_CV_Forge.pdf');

  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    const jsonObj = {
      personalDetails: personalDetails,
      educationDetails: educationDetails,
      experienceDetails: experienceDetails,
      skillsDetails: skillsDetails,
    };
    localStorage.setItem('latex-cv-forge', JSON.stringify(jsonObj));
  }, [personalDetails, educationDetails, experienceDetails, skillsDetails]);

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
          skillsDetails={skillsDetails}
          setSkillsDetails={setSkillsDetails}
          setViewerAddress={setViewerAddress}
          isBusy={isBusy}
          setIsBusy={setIsBusy}
        ></Form>
        <Viewer viewerAddress={viewerAddress} setIsBusy={setIsBusy} />
      </Split>
    </main>
  );
}

export default App;
