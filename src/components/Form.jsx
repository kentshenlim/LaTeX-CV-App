import './Form.css';
import PropTypes from 'prop-types';
import PersonalBox from './PersonalBox';
import EducationBox from './EducationBox';
import ExperienceBox from './ExperienceBox';
import SkillsBox from './SkillsBox';
export default function Form({
  personalDetails, // Object
  setPersonalDetails,
  educationDetails, // Array of objects
  setEducationDetails,
  experienceDetails, // Array of objects
  setExperienceDetails,
  skillsDetails, // Array of objects
  setSkillsDetails,
}) {
  function handleClickCompile(e) {
    e.preventDefault();
    console.log({
      personalDetails: personalDetails,
      educationDetails: educationDetails,
      experienceDetails: experienceDetails,
      skillsDetails: skillsDetails,
    });
  }
  return (
    <form className="form-wrapper">
      <section className="personal-details">
        <h2>Personal Details</h2>
        <PersonalBox
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </section>
      <section className="education">
        <h2>Education</h2>
        <EducationBox
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      </section>
      <section className="experience">
        <h2>Project & Experience</h2>
        <ExperienceBox
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      </section>
      <section className="skills">
        <h2>Skills & Interests</h2>
        <SkillsBox
          skillDetails={skillsDetails}
          setSkillDetails={setSkillsDetails}
        />
      </section>
      <nav>
        <button
          type="submit"
          className="compute-btn"
          onClick={handleClickCompile}
        >
          Compile
        </button>
        <button type="submit">Download</button>
      </nav>
    </form>
  );
}

Form.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
  educationDetails: PropTypes.array.isRequired,
  setEducationDetails: PropTypes.func.isRequired,
  experienceDetails: PropTypes.array.isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
  skillsDetails: PropTypes.array.isRequired,
  setSkillsDetails: PropTypes.func.isRequired,
};
