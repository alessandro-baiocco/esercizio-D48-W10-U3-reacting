import { useState } from "react";

const FormComment = (props) => {
  // state = {
  //   comment: "",
  //   rate: "1",
  // };

  const [commentProp, setCommentProp] = useState({
    comment: "",
    rate: "1",
    elementId: "",
  });

  const invia = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(commentProp),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
        },
      });
      if (response.ok) {
        alert("andato a buon fine");
      } else {
        alert("nope");
        console.log(props.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="" onSubmit={(e) => invia(e)} className="ms-2">
        <input
          type="text"
          value={commentProp.comment}
          onChange={(event) => {
            setCommentProp({ ...commentProp, comment: event.target.value, elementId: props.id });
          }}
          className="p-0 text-light fw-bold d-block"
          style={{ backgroundColor: "#6c757d33", border: "white 2px solid" }}
        />
        <input
          type="number"
          min={1}
          max={5}
          value={commentProp.rate}
          onChange={(event) => {
            setCommentProp({ ...commentProp, rate: event.target.value });
          }}
          className="p-0 text-light fw-bold"
          style={{ backgroundColor: "#6c757d33", border: "white 2px solid", maxWidth: "120px" }}
        />
        <button
          type="submit"
          onClick={(Event) => invia(Event)}
          className="p-0 text-light fw-bold btn p-2"
          style={{ backgroundColor: "#6c757d33", border: "white 2px solid", maxWidth: "120px" }}
        >
          invia
        </button>
      </form>
    </>
  );
};

export default FormComment;
