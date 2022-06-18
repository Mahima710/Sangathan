import { React, useState } from "react";
import "../assets/css/homepageorg.css";
import axios from "axios";

function CreatePost() {
  const [Title, setTitle] = useState(null);
  const [Content, setContent] = useState(null);

  const onclick = (e) => {
    e.preventDefault();
    if (!Title || !Content) {
      return alert("All fields are necessary");
    }
    axios.post(
      "http://localhost:5000/createpost",
       {
         Title : Title,
         Content : Content
       },
       { withCredentials: true }
    )
    .then((res) => {
     return alert(res.message? res.message : "Post Successfully Uploaded");
    })
    .catch(err => {
      return alert(err);
    }) 
  };
  return (
    <div
      style={{
        width: "50vw",
        height: "max-content",
        background: "#191a35",
        margin: "auto",
        textAlign: "left",
        padding: "2rem",
        marginTop: "1rem",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center" }}>
        <p>Create Post</p>
      </div>
      <form>
        <div style={{ width: "40vw", margin: "auto", textAlign: "center" }}>
          <input
            placeholder="Title"
            style={{ width: "40vw", marginTop: "1rem", padding: "0.5rem" }}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            placeholder="Create Post"
            style={{
              width: "40vw",
              height: "5rem",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            style={{
              background: "rgba(255, 255, 255, 0.158)",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            type="submit"
            onClick={(e) => onclick(e)}
            className="button"
          >
            <p className="content">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
}
//create event profile donate
export default CreatePost;
