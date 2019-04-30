import React from 'react';

const Validation = props => {
  let lengthText = 'Text is too Short!';
  
  if (props.inputTextLength > 10) {    
    lengthText = 'Text is too Long!';
  }

  return <span>{lengthText}</span>;
};

export default Validation;
