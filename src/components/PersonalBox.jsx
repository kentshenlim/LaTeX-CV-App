import PropTypes from 'prop-types';
import FormBox from './FormBox';

export default function PersonalBox({ personalDetails, setPersonalDetails }) {
  function handleChangePersonalDetails(e) {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  }
  return (
    <>
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
    </>
  );
}

PersonalBox.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};
