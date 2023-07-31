import PropTypes from 'prop-types';
import './Viewer.css';

export default function Viewer({ viewerAddress }) {
  return (
    <div className="viewer-wrapper">
      <iframe
        src={viewerAddress}
        className="iframe-container"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

Viewer.propTypes = {
  viewerAddress: PropTypes.string.isRequired,
};
