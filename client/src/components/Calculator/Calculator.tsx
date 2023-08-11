import { useState } from 'react';
import classes from './Calculator.module.css';
import { Button } from '../Button/Button';

export function Calculator(): JSX.Element {
  const [currentInput, setCurrentInput] = useState<string>('');
  const [currentOperator, setCurrentOperator] = useState<string>('');

  const numbersAndOperators = [
    '1',
    '2',
    '3',
    '/',
    '4',
    '5',
    '6',
    '*',
    '7',
    '8',
    '9',
    '-',
    '0',
    '=',
    '+',
  ];

  const buttons = numbersAndOperators.map((value) => (
    <Button
      key={value}
      value={value}
      onClick={() => handleButtonClick(value)}
    />
  ));

  const handleButtonClick = (value: string) => {
    switch (value) {
      case '=':
        calculateResult("");
        break;
      case 'CLEAR':
        clearInput();
        break;
      case 'DEL':
        deleteLastInput();
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        handleOperator(value);
        break;
      default:
        updateCurrentInput(value);
    }
  };

  const calculateResult = (operator: string) => {
    if (currentOperator && currentInput) {
      const num1 = parseFloat(currentInput);
      const num2 = parseFloat(
        currentInput.slice(currentInput.indexOf(currentOperator) + 1)
      );
      let result: number;

      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          result = num1;
      }

      setCurrentInput(result.toString()+operator);
      setCurrentOperator('');
    }
  };

  const clearInput = () => {
    setCurrentInput('');
    setCurrentOperator('');
  };

  const deleteLastInput = () => {
    setCurrentInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleOperator = (operator: string) => {
    if (currentInput && !currentOperator) {
      setCurrentInput((prevInput) => `${prevInput}${operator}`);
      setCurrentOperator(operator);
    } else if (currentInput && currentOperator) {
      setCurrentInput((prevInput) => {
        if (prevInput.endsWith(currentOperator)) {
          return `${prevInput.slice(0, -1)}${operator}`;
        } else {
          setCurrentOperator(operator);
          calculateResult(operator);
          return `${currentInput}${operator}`;
        }
      });
      setCurrentOperator(operator);
    }
  };

  const updateCurrentInput = (value: string) => {
    setCurrentInput((prevInput) => `${prevInput}${value}`);
  };

  return (
    <div className={classes.calculator}>
      <div className={classes.display}>
        <div className={classes.input}>
          <input type="text" value={currentInput} readOnly />
        </div>
      </div>
      <div className={classes.butdelcler}>
        <Button
          key="CLEAR"
          value="CLEAR"
          onClick={() => handleButtonClick('CLEAR')}
        />
        <Button
          key="DEL"
          value="DEL"
          onClick={() => handleButtonClick('DEL')}
        />
      </div>
      <div className={classes.buttons}>{buttons}</div>
    </div>
  );
}
