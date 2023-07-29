import PropTypes from 'prop-types';

export default function FormBox({
  ionIconName,
  inputType,
  inputID,
  labelText,
  placeholderText,
  isRequired,
}) {
  return (
    <div>
      <ion-icon name={ionIconName}></ion-icon>
      <label htmlFor={inputID}>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholderText + (isRequired ? '*' : '')}
        id={inputID}
        required={isRequired}
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
};