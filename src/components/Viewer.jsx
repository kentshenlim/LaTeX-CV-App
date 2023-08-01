import PropTypes from 'prop-types';
import './Viewer.css';

export default function Viewer({ viewerAddress, setIsBusy }) {
  function handleLoad() {
    setIsBusy(false);
  }
  return (
    <div className="viewer-wrapper">
      <iframe
        src={viewerAddress}
        className="iframe-container"
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
}

Viewer.propTypes = {
  viewerAddress: PropTypes.string.isRequired,
  setIsBusy: PropTypes.func.isRequired,
};
