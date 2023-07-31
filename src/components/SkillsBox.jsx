import PropTypes from 'prop-types';

export default function SkillsBox({ skillDetails, setSkillDetails }) {
  return <div> Hi</div>;
}

SkillsBox.propTypes = {
  skillDetails: PropTypes.array.isRequired,
  setSkillDetails: PropTypes.func.isRequired,
};
