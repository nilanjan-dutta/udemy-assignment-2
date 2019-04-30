import React, { useState } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

function App() {
  const [inputTextLengthState, setInputTextLengthState] = useState({
    inputTextLength: 0
  });

  const [inputTextState, setInputText] = useState({
    inputText: ''
  });

  const inputChangeHandler = event => {
    setInputTextLengthState({ inputTextLength: event.target.value.length });
    setInputText({ inputText: event.target.value });
  };

  const charCardClickHandler = index => {
    
    let inputTextArray = inputTextState.inputText.split('');

    inputTextArray.splice(index, 1);
    setInputText({ inputText: inputTextArray.join('') });
  };

  return (
    <div className="App">
      <input type="text" onChange={inputChangeHandler} value = {inputTextState.inputText} />
      <Validation inputTextLength={inputTextLengthState.inputTextLength} />
      {inputTextState.inputText.split('').map((char, index) => {
        return (
          <Char
            char={char}
            click={() => charCardClickHandler(index)}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
