import PropTypes from 'prop-types';
import FormBox from './FormBox';
import { nanoid } from 'nanoid';
import './SkillsBox.css';

export default function SkillsBox({ skillDetails, setSkillDetails }) {
  function handleChange(e, id) {
    const newState = skillDetails.map((obj) => {
      if (obj.id !== id) return obj;
      return { ...obj, [e.target.name]: e.target.value };
    });
    setSkillDetails(newState);
  }

  function handleClickAdd() {
    const newObj = {
      id: nanoid(),
      category: '',
      descriptionStr: '',
    };
    setSkillDetails([...skillDetails, newObj]);
  }

  function handleClickDelete(id) {
    const newState = skillDetails.filter((obj) => obj.id !== id);
    setSkillDetails(newState);
  }

  const arrJSX = skillDetails.map((obj, idx) => (
    <div className="skills-box-wrapper" key={obj.id}>
      <FormBox
        ionIconName="file-tray-full-outline"
        inputType="text"
        inputName="category"
        inputIDForLabel={`category-${obj.id}`}
        labelText="Category"
        placeholderText="Languages"
        isRequired={true}
        value={obj.category}
        handleChange={(e) => handleChange(e, obj.id)}
      />
      <FormBox
        ionIconName="pricetags-outline"
        inputType="text"
        inputName="descriptionStr"
        inputIDForLabel={`descriptionStr-${obj.id}`}
        labelText="Items"
        placeholderText="English, Spanish, Hindi"
        isRequired={true}
        value={obj.descriptionStr}
        handleChange={(e) => handleChange(e, obj.id)}
      />
      {idx !== 0 && (
        <button
          type="button"
          className="delete-skills"
          onClick={() => handleClickDelete(obj.id)}
        >
          Delete
        </button>
      )}
    </div>
  ));
  return (
    <>
      {arrJSX}
      <button type="button" className="add-skills" onClick={handleClickAdd}>
        Add More
      </button>
    </>
  );
}

SkillsBox.propTypes = {
  skillDetails: PropTypes.array.isRequired,
  setSkillDetails: PropTypes.func.isRequired,
};
