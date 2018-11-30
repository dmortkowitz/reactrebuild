import React from 'react';
import PropTypes from 'prop-types';

function QualityCheck(props){
  return (
    <div>
      <p>Is this book in objectively good condition?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

QualityCheck.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func,
};

export default QualityCheck;
