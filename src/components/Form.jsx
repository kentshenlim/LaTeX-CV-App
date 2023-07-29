import './Form.css';
import FormBox from './FormBox';
import EducationBox from './EducationBox';

export default function Form() {
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
        />
        <FormBox
          ionIconName="mail"
          inputType="email"
          inputID="email"
          labelText="Email"
          placeholderText="john.doe@hotmail.com"
          isRequired={true}
        />
        <FormBox
          ionIconName="logo-github"
          inputType="url"
          inputID="github"
          labelText="GitHub"
          placeholderText="https://github.com/johnDoe"
          isRequired={false}
        />
        <FormBox
          ionIconName="logo-linkedin"
          inputType="url"
          inputID="linkedIn"
          labelText="LinkedIn"
          placeholderText="https://www.linkedin.com/in/johnDoe"
          isRequired={false}
        />
      </section>
      <section className="education">
        <h2>Education</h2>
        <EducationBox idPrefix="1" />
      </section>
      <nav>
        <button type="submit">Compile</button>
        <button type="submit">Download</button>
      </nav>
    </form>
  );
}
