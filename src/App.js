import Header from "./Components/Header";
import './App.css';
import FormPage from "./Components/FormPage";
import Function from "./Components/Function";
import Armstrong from "./Components/Armstrong";
import Palindrome from "./Components/Palindrome";
const App=()=> {
  return (
    <>
    <div className="border_sty">
    <Header/>
    <FormPage/>
    <Function/>
    <Armstrong/>
    <Palindrome/>
    </div>
    </>
  );
}

export default App;
