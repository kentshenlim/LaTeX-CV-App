import PropTypes from 'prop-types';
import './FormBox.css';

export default function FormBox({
  ionIconName,
  inputType,
  inputName,
  inputIDForLabel,
  labelText,
  placeholderText,
  isRequired,
  value = '',
  handleChange,
}) {
  return (
    <div className="form-box-wrapper">
      <ion-icon name={ionIconName}></ion-icon>
      <label htmlFor={inputIDForLabel ? inputIDForLabel : inputName}>
        {labelText}
      </label>
      <input
        type={inputType}
        placeholder={placeholderText + (isRequired ? '*' : '')}
        id={inputIDForLabel ? inputIDForLabel : inputName}
        name={inputName}
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
  inputName: PropTypes.string.isRequired,
  inputIDForLabel: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
};
