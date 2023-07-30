import FormBox from './FormBox';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './EducationBox.css';

export default function EducationBox({
  educationDetails,
  setEducationDetails,
}) {
  function handleChangeEducationDetails(e, id) {
    const newState = educationDetails.map((obj) => {
      if (obj.id !== id) return obj;
      return { ...obj, [e.target.name]: e.target.value };
    });
    setEducationDetails(newState);
  }

  function handleClickAdd() {
    const newObj = {
      id: nanoid(), // Might need later
      institute: '',
      period: '',
      course: '',
      result: '',
      description: [], // List of strings
    };
    setEducationDetails([...educationDetails, newObj]);
  }

  function handleClickDelete(id) {
    const newState = educationDetails.filter((obj) => obj.id !== id);
    setEducationDetails(newState);
  }

  const arrJSX = educationDetails.map((obj, idx) => (
    <div className="education-box-wrapper" key={obj.id}>
      <FormBox
        ionIconName="school"
        inputType="text"
        inputID="institute"
        labelText="Institute"
        placeholderText="University of Oxford"
        isRequired={true}
        value={educationDetails[idx].institute}
        handleChange={(e) => handleChangeEducationDetails(e, obj.id)}
      />
      <FormBox
        ionIconName="calendar-clear"
        inputType="text"
        inputID="period"
        labelText="Period"
        placeholderText="Oct 2019 - June 2023"
        isRequired={true}
        value={educationDetails[idx].period}
        handleChange={(e) => handleChangeEducationDetails(e, obj.id)}
      />
      <FormBox
        ionIconName="book"
        inputType="text"
        inputID="course"
        labelText="Course"
        placeholderText="MSc, Computer Science"
        isRequired={true}
        value={educationDetails[idx].course}
        handleChange={(e) => handleChangeEducationDetails(e, obj.id)}
      />
      <FormBox
        ionIconName="trophy"
        inputType="text"
        inputID="result"
        labelText="Result"
        placeholderText="Predicted 1:1"
        isRequired={false}
        value={educationDetails[idx].result}
        handleChange={(e) => handleChangeEducationDetails(e, obj.id)}
      />
      <div className="description-header">
        <ion-icon name="list"></ion-icon>
        <h4>Description</h4>
        <ion-icon name="add-circle"></ion-icon>
      </div>
      {/* <div>
        <input
          type="text"
          name="de"
          id="de"
          placeholder="Specialized in artificial intelligence, machine learning and data analysis"
        />
      </div>
      <div className="optional">
        <ion-icon name="close"></ion-icon>
        <input type="text" name="de" id="de" className="optional" />
      </div>
      <div className="optional">
        <ion-icon name="close"></ion-icon>
        <input type="text" name="de" id="de" className="optional" />
      </div> */}
      {idx !== 0 && (
        <button
          type="button"
          className="delete-education"
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
      <button type="button" className="add-education" onClick={handleClickAdd}>
        Add
      </button>
    </>
  );
}

EducationBox.propTypes = {
  educationDetails: PropTypes.array.isRequired,
  setEducationDetails: PropTypes.func.isRequired,
};
