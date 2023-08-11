import { useState } from 'react';
import classes from './Palindrom.module.css';

export function Palindrom(): JSX.Element {
  // Созданем состояние для хранения информации
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const checkPalindrome = (text: string): null | boolean => {
    if (
      text.length < 2 ||
      text === '0' ||
      text.trim() === '' ||
      text.trim() === '0'
    ) {
      return null;
    }
    // С помощью регулярного выражения очищаем текст от всех символов, кроме букв и цифр, и переводим в нижний регистр
    const cleanedText = text.replace(/[^\w]/g, '').toLowerCase(); /*
     Метод split() разбивает объект String на массив строк путем разделения строки на подстроки.
     Способ reverse() возвращает массив на место. Первый элемент массива становится последним, а последний – первым.
     Метод join() объединяет все элементы массива в строку.
    */
    const reversedText = cleanedText.split('').reverse().join('');

    // Сравниваем очищенный текст с развернутым текстом, чтобы определить, является ли он палиндромом
    return cleanedText === reversedText;
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    // Получаем текст и обновляем состояние
    const text = event.target.value;
    setInputText(text);
    setIsPalindrome(checkPalindrome(text));
  };

  return (
    <div className="App">
      <h4>Palindrome Checker</h4>
      <input
        type="text"
        placeholder="Enter a string or number..."
        value={inputText}
        onChange={handleInputChange}
      />
      <p
        className={
          isPalindrome !== null
            ? isPalindrome
              ? classes.result
              : classes.notresult
            : ''
        }
      >
        {isPalindrome !== null
          ? `String ${isPalindrome ? 'is' : 'is not'} a palindrome!`
          : ''}
      </p>
    </div>
  );
}
