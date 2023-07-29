import './Form.css';
import PropTypes from 'prop-types';
import FormBox from './FormBox';
import EducationBox from './EducationBox';

export default function Form({ personalDetails, handleChangePersonalDetails }) {
  return (
    <form className="form-wrapper">
      <section className="personal-details">
        <h2>Personal Details</h2>
        <FormBox
          ionIconName="person-circle"
          inputType="text"
          inputID="name"
          labelText="Name"
          placeholderText="John Doe"
          isRequired={true}
          value={personalDetails.name}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="mail"
          inputType="email"
          inputID="email"
          labelText="Email"
          placeholderText="john.doe@hotmail.com"
          isRequired={true}
          value={personalDetails.email}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="logo-github"
          inputType="url"
          inputID="gitHub"
          labelText="GitHub"
          placeholderText="https://github.com/johnDoe"
          isRequired={false}
          value={personalDetails.gitHub}
          handleChange={handleChangePersonalDetails}
        />
        <FormBox
          ionIconName="logo-linkedin"
          inputType="url"
          inputID="linkedIn"
          labelText="LinkedIn"
          placeholderText="https://www.linkedin.com/in/johnDoe"
          isRequired={false}
          value={personalDetails.linkedIn}
          handleChange={handleChangePersonalDetails}
        />
      </section>
      {/* <section className="education">
        <h2>Education</h2>
        <EducationBox idPrefix="1" />
      </section> */}
      <nav>
        <button type="submit">Compile</button>
        <button type="submit">Download</button>
      </nav>
    </form>
  );
}

Form.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  handleChangePersonalDetails: PropTypes.func.isRequired,
};
