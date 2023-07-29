import FormBox from './FormBox';
import PropTypes from 'prop-types';
import './EducationBox.css';

export default function EducationBox({ idPrefix }) {
  return (
    <div className="education-box-wrapper">
      <FormBox
        ionIconName="school"
        inputType="text"
        inputID={`institute_${idPrefix}`}
        labelText="Institute"
        placeholderText="University of Cambridge"
        isRequired={true}
      />
      <FormBox
        ionIconName="calendar-clear"
        inputType="text"
        inputID={`period${idPrefix}`}
        labelText="Period"
        placeholderText="Oct 2019 - June 2023"
        isRequired={true}
      />
      <FormBox
        ionIconName="book"
        inputType="text"
        inputID={`course_${idPrefix}`}
        labelText="Course"
        placeholderText="MSc, Adv. Computer Science"
        isRequired={true}
      />
      <FormBox
        ionIconName="trophy"
        inputType="text"
        inputID={`result_${idPrefix}`}
        labelText="Result"
        placeholderText="Predicted 1:1"
        isRequired={false}
      />
      <div className="description-header">
        <ion-icon name="list"></ion-icon>
        <h4>Description</h4>
        <ion-icon name="add-circle"></ion-icon>
      </div>
      <div>
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
      </div>
    </div>
  );
}

EducationBox.propTypes = {
  idPrefix: PropTypes.string.isRequired,
};
