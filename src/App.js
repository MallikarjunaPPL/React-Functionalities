import Header from "./Components/Header";
import './App.css';
import FormPage from "./Components/FormPage";
import Function from "./Components/Function";
import Armstrong from "./Components/Armstrong";
import Palindrome from "./Components/Palindrome";
import Reverse from "./Components/Reverse"
const App=()=> {
  return (
    <>
    <div className="border_sty">
    <Header/>
    <FormPage/>
    <Function/>
    <Armstrong/>
    <Palindrome/>
    <Reverse/>
    </div>
    </>
  );
}

export default App;
