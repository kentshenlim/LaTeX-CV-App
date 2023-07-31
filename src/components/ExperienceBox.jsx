import FormBox from './FormBox';
import PropTypes from 'prop-types';
import Description from './Description';
import './ExperienceBox.css';

export default function ExperienceBox({
  experienceDetails,
  setExperienceDetails,
}) {
  function handleChangeExperienceDetails(e, id) {
    const newState = experienceDetails.map((obj) => {
      if (obj.id !== id) return obj;
      return { ...obj, [e.target.name]: e.target.value };
    });
    setExperienceDetails(newState);
  }

  function getUpdateDescriptionArr(id) {
    return function getUpdateDescriptionArr(newArr) {
      const newState = experienceDetails.map((obj) => {
        if (obj.id !== id) return obj;
        return { ...obj, description: newArr };
      });
      setExperienceDetails(newState);
    };
  }

  const arrJSX = experienceDetails.map((obj) => (
    <div className="experience-box-wrapper" key={obj.id}>
      <FormBox
        ionIconName="locate-outline"
        inputType="text"
        inputName="title"
        inputIDForLabel={`title-${obj.id}`}
        labelText="Title"
        placeholderText="Shopify Web Dev Intern"
        isRequired={true}
        value={obj.title}
        handleChange={(e) => handleChangeExperienceDetails(e, obj.id)}
      ></FormBox>
      <FormBox
        ionIconName="calendar-clear"
        inputType="text"
        inputName="period"
        inputIDForLabel={`exp-period-${obj.id}`}
        labelText="Period"
        placeholderText="Oct 2022 - Present"
        isRequired={true}
        value={obj.period}
        handleChange={(e) => handleChangeExperienceDetails(e, obj.id)}
      ></FormBox>
      <Description
        descriptionArr={obj.description}
        updateDescriptionArr={getUpdateDescriptionArr(obj.id)}
        firstPlaceholder="Developed a web-based e-commerce platform using HTML, CSS, JavaScript, and PHP*"
        secondPlaceholder="Another description*"
      />
    </div>
  ));
  return <>{arrJSX}</>;
}

ExperienceBox.propTypes = {
  experienceDetails: PropTypes.array.isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
};
