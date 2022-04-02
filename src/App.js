import { createContext, useState } from 'react';
import './App.css';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';
// createContext তৈরী করার জন্য
export const CountContext = createContext();

function App() {
  // কন্টেক্স সেট করার জন্য 
  const [count, setCount] = useState(0);
  return (
    // প্রভাইডার দিয়া র‌্যাপ করতে হবে যাদেরকে কন্টেক্স ব্যবহার করা হবে
    <CountContext.Provider value = {[count, setCount]} >
      <div className="App">
        <h2> context api example</h2>
        // অন ক্লিক এ সেট কাউন্টার সেট করতে হবে
        <button onClick={() => setCount(count + 1)} > + </button>
        // ডায়নামিক কাউন্ট
        Count : {count}
        <button onClick={() => setCount(count - 1)} > - </button>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    </CountContext.Provider>
  );
}
export default App;
