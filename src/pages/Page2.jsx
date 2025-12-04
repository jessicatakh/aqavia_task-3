import { useSelector, useDispatch } from "react-redux";
import { updateValue } from "../store";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styleforall.css";

export default function Page2() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.data.value);

  const [text, setText] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateValue(text));
  };

  return (
    <div className="page-box">
      <h1 className="title">Page 2</h1>

      <p className="value-box">
        Current Value: <b>{value}</b>
      </p>

      <form onSubmit={handleSubmit} className="form-area">
        <input
          className="input-field"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn" type="submit">
          Update From Page 2
        </button>
      </form>

      <Link className="link-btn" to="/">
        Back to Page 1
      </Link>
    </div>
  );
}
