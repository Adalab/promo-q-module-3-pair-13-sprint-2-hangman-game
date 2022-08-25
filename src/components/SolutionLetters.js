import "../styles/Letters.scss";
import Form from "./Form";
const SolutionLetters = (props) => {
  return (
    <section>
      <div className="solution">
        <h2 className="title">Solución:</h2>
        <ul className="letters">{props.renderSolutionLetters}</ul>
      </div>
      <div className="error">
        <h2 className="title">Letras falladas:</h2>
        <ul className="letters">{props.renderErrorLetters}</ul>
      </div>
      <Form 
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
      lastLeters={props.lastLeters}/>
    </section>
  );
};

export default SolutionLetters;
