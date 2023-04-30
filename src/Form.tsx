import { FormEvent, useRef } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      nameRef.current != null &&
      ageRef.current != null &&
      pRef.current != null
    ) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person);
      pRef.current.innerHTML =
        "Dear, " +
        "<b>" +
        person.name +
        "</b>" +
        " with the age of " +
        "<b>" +
        person.age +
        "</b>";
    }
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const person = { name: "", age: 0 };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <hr />
      <p ref={pRef} id="text"></p>
    </form>
  );
};

export default Form;
