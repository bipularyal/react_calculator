
import './App.css';

function App() {
  const digit = []
    const createDigits = () => {
      for (let index = 0; index < 10; index++) {
        digit[index] = index+1
      }
    }
    createDigits()
  return (
    <div className="App">
     <div className="fi-calc">
        <div className="fi-disp">
            <span>(0)</span> 0
        </div>
        <div className="fi-oprator">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
          <div className="fi-digit">
            {digit.map((val) => <button> {val}</button>)}
            <button>0</button>
            <button>.</button>
            <button>=</button>

          </div>
     </div>
    </div>
  );
}

export default App;
