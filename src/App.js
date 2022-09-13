
import './App.css';

function App() {
  const digit = []
    const createDigits = () => {
      for (let index = 0; index < 9; index++) {
        digit[index] = index+1
      }
    }
    createDigits()
  return (
    <div className="App">
     <div className="fi-calc">
        <div className="fi-disp">
            <span>(0)0</span>
        </div>
        <div className="fi-oprators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
          <div className="fi-digits">
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
