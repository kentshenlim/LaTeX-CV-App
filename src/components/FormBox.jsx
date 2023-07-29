import PropTypes from 'prop-types';
import './FormBox.css';

export default function FormBox({
  ionIconName,
  inputType,
  inputID,
  labelText,
  placeholderText,
  isRequired,
  value = '',
  handleChange,
}) {
  return (
    <div className="form-box-wrapper">
      <ion-icon name={ionIconName}></ion-icon>
      <label htmlFor={inputID}>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholderText + (isRequired ? '*' : '')}
        id={inputID}
        name={inputID}
        required={isRequired}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

FormBox.propTypes = {
  ionIconName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputID: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
};
