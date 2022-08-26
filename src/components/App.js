import { useEffect, useState } from "react";
import { Route, Routes} from 'react-router-dom';

// api
import getWordFromApi from "../services/fetch";

// styles
import "../styles/App.scss";

//components
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import Footer from "./Footer";
import Instructions from "./Instructions";

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events


  const handleChange = (value) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(value)) {
      handleLastLetter(value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ""}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    
    <div className="page">
      <Header />

      <main className="main">
        <SolutionLetters
          handleSubmit={handleSubmit}
          renderErrorLetters={renderErrorLetters()}
          renderSolutionLetters={renderSolutionLetters()}
          lastLetter={lastLetter}
          handleChange={handleChange}
        />
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />

      <Routes>
        <Route 
          path="/instructions"
          element={<Instructions/>}/>
      </Routes>
    </div>    
  );
}

export default App;
