import PropTypes from 'prop-types';

export default function ExperienceBox({
  experienceDetails,
  setExperienceDetails,
}) {
  console.log(experienceDetails, setExperienceDetails);
  return <>Hi</>;
}

ExperienceBox.propTypes = {
  experienceDetails: PropTypes.array.isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
};
