import './Form.css';
import PropTypes from 'prop-types';
import PersonalBox from './PersonalBox';
import EducationBox from './EducationBox';
import ExperienceBox from './ExperienceBox';
import SkillsBox from './SkillsBox';
import texStringCreator from '../utils/texStringCreator';
import getTexFile from '../utils/texFileCreator';
import fetchPDF from '../utils/fetchPDF';
export default function Form({
  personalDetails, // Object
  setPersonalDetails,
  educationDetails, // Array of objects
  setEducationDetails,
  experienceDetails, // Array of objects
  setExperienceDetails,
  skillsDetails, // Array of objects
  setSkillsDetails,
  setViewerAddress,
  isBusy, // Bool
  setIsBusy,
}) {
  async function handleClickCompile(e) {
    e.preventDefault();
    setIsBusy(true);
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.checkValidity();
    }); // Validation has been prevented by preventDefault
    const personalDetailsStr = texStringCreator.getPersonal(personalDetails);
    const educationDetailsStr = texStringCreator.getEducation(educationDetails);
    const experienceDetailsStr =
      texStringCreator.getExperience(experienceDetails);
    const skillsDetailsStr = texStringCreator.getSkills(skillsDetails);
    const blobStr =
      texStringCreator.getPreamble() +
      personalDetailsStr +
      educationDetailsStr +
      experienceDetailsStr +
      skillsDetailsStr +
      texStringCreator.getEndDocument();
    const file = getTexFile(blobStr);
    const url = await fetchPDF(file);
    setViewerAddress(url);
  }

  return (
    <form className="form-wrapper" onSubmit={handleClickCompile}>
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
      <nav className="key-btn">
        <button type="submit" className="compute-btn" disabled={isBusy}>
          Compile
        </button>
        <button type="button" disabled={isBusy}>
          Clear
        </button>
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
  setViewerAddress: PropTypes.func.isRequired,
  isBusy: PropTypes.bool.isRequired,
  setIsBusy: PropTypes.func.isRequired,
};
