import { useState } from 'react';
import './BracketChecker.module.css';

function checkBrackets(str: string): boolean {
  const stack: string[] = [];
  const bracketsMap: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const char of str) {
    if (char in bracketsMap) {
      /*
      является ли текущий символ char одним из
       ключей в объекте bracketsMap. Если это так, 
       это означает, что это открывающая скобка.
      */
      stack.push(char); //добавляем в stack
    } else if (char === ')' || char === '}' || char === ']') {
      /*
        Если текущий символ не является открывающей скобкой, 
        программа проверяет, является ли символ одной из трех 
        закрывающих скобок 
      */
      if (bracketsMap[stack.pop() as string] !== char) {
        /*
          сопоставляем текущую 
          закрывающую скобку char с последней открывающей скобкой 
        */
        return false;
      }
    }
  }
  /*
    если стек пустой, это означает, что все скобки были правильно закрыты и парные 
  */
  return stack.length === 0;
}

export function BracketChecker(): JSX.Element {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    setMessage(
      checkBrackets(inputValue) ? 'Все скобки закрыты' : 'Скобки не закрыты'
    );
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Введите строку с скобками"
        value={input}
        onChange={handleInputChange}
        className="input"
      />
      <div className="message">{message}</div>
    </div>
  );
}
