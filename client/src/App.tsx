import './App.css';
import { BracketChecker } from './components/BracketChecker/BracketChecker';
import { Calculator } from './components/Calculator/Calculator';
import { Palindrom } from './components/Palindrom/Palindrom';
import { RotationM } from './components/RotationM/RotationM';
function App() {
  return (
    <>
      <div className="card">
        <Palindrom />
      </div>
      <div className="card">
        <RotationM />
      </div>
      <div className="card">
        <Calculator />
      </div>
      <div>
      <h1>Проверка скобок</h1>
      <BracketChecker />
    </div>
    </>
  );
}

export default App;
