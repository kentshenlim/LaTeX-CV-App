import FormBox from './FormBox';
import PropTypes from 'prop-types';

export default function ExperienceBox({
  experienceDetails,
  setExperienceDetails,
}) {
  function handleChangeExperienceDetails(e, id) {
    const newArr = experienceDetails.map((obj) => {
      if (obj.id !== id) return obj;
      return { ...obj, [e.target.name]: e.target.value };
    });
    setExperienceDetails(newArr);
  }
  const arrJSX = experienceDetails.map((obj) => (
    <div className="experience-box-wrapper" key={obj.id}>
      <FormBox
        ionIconName="locate-outline"
        inputType="text"
        inputID="title"
        labelText="Title"
        placeholderText="The Odin Project"
        isRequired={true}
        value={obj.title}
        handleChange={(e) => handleChangeExperienceDetails(e, obj.id)}
      ></FormBox>
    </div>
  ));
  return <>{arrJSX}</>;
}

ExperienceBox.propTypes = {
  experienceDetails: PropTypes.array.isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
};
