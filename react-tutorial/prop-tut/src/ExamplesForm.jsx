import React from "react";

function ExamplesForm() {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
     console.log("Input data")
    //  e.preventDefault();
    // e.stopImmediatePropagation();
  };

  const handleBtnClick = () => {
    console.log("Button Clicked");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
  };
  return (
    <section className="book">
      <form onSubmit={handleFormSubmission}  >
        <h1>Registration</h1>
        <input
          type="text"
          onChange={(e)=> console.log(e.target.value)
          }
        //   onChange={handleFormInput}
          name="example"
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit</button>

      </form>
      <button onClick={()=>console.log("Button Clicked")}  type="submit">CLick Me</button>  
      {/* Shorthand way to add click event */}
    </section>
  );
}

export default ExamplesForm;
