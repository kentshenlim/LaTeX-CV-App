import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './Description.css';

export default function Description({
  descriptionArr,
  updateDescriptionArr,
  firstPlaceholder,
  secondPlaceholder,
}) {
  function handleChange(e, id) {
    const newArr = descriptionArr.map((tuple) => {
      if (tuple[1] !== id) return tuple;
      return [e.target.value, id];
    });
    updateDescriptionArr(newArr);
  }

  function handleClickAdd() {
    const newArr = [...descriptionArr, ['', nanoid()]];
    updateDescriptionArr(newArr);
  }

  function handleClickDelete(id) {
    const newArr = descriptionArr.filter((tuple) => tuple[1] !== id);
    updateDescriptionArr(newArr);
  }

  const arrJSX = descriptionArr.map(([text, id], idx) => (
    <div key={id} className="input-cross">
      <input
        type="text"
        placeholder={idx === 0 ? firstPlaceholder : secondPlaceholder}
        required={true}
        value={text}
        onChange={(e) => handleChange(e, id)}
      />
      {idx !== 0 && (
        <ion-icon
          name="close-outline"
          onClick={() => handleClickDelete(id)}
        ></ion-icon>
      )}
    </div>
  ));

  return (
    <>
      <div className="description-header">
        <ion-icon name="list"></ion-icon>
        <h4>Description</h4>
        <ion-icon name="add-circle" onClick={handleClickAdd}></ion-icon>
      </div>
      {arrJSX}
    </>
  );
}

Description.propTypes = {
  descriptionArr: PropTypes.array.isRequired,
  updateDescriptionArr: PropTypes.func.isRequired,
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
};
