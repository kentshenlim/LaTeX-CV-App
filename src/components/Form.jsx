import './Form.css';
import PropTypes from 'prop-types';
import FormBox from './FormBox';
import EducationBox from './EducationBox';
import ExperienceBox from './ExperienceBox';
export default function Form({
  personalDetails, // Object
  setPersonalDetails,
  educationDetails, // Array of objects
  setEducationDetails,
  experienceDetails, // Array of objects
  setExperienceDetails,
}) {
  function handleChangePersonalDetails(e) {
    const field = e.target.name;
    const newState = { ...personalDetails, [field]: e.target.value };
    setPersonalDetails(newState);
  }

  return (
    <form className="form-wrapper">
      <section className="personal-details">
        <h2>Personal Details</h2>
        <FormBox
          ionIconName="person-circle"
          inputType="text"
          inputName="name"
          labelText="Name"
          placeholderText="John Doe"
          isRequired={true}
          value={personalDetails.name}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="mail"
          inputType="email"
          inputName="email"
          labelText="Email"
          placeholderText="john.doe@hotmail.com"
          isRequired={true}
          value={personalDetails.email}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="logo-github"
          inputType="url"
          inputName="gitHub"
          labelText="GitHub"
          placeholderText="https://github.com/johnDoe"
          isRequired={false}
          value={personalDetails.gitHub}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="logo-linkedin"
          inputType="url"
          inputName="linkedIn"
          labelText="LinkedIn"
          placeholderText="https://www.linkedin.com/in/johnDoe"
          isRequired={false}
          value={personalDetails.linkedIn}
          handleChange={handleChangePersonalDetails}
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
      <nav>
        <button type="submit">Compile</button>
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
};
