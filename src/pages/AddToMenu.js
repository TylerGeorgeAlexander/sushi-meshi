// import React from "react";

// export default function AddToMenu() {
//   return <div>AddToMenu</div>;
// }

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem, createMenuItem, updateItem } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

export default function AddToMenu() {
  const [item, setItem] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [itemError, setItemError] = useState(null);

  const { item_id } = useParams();
  const navigate = useNavigate();

  useEffect(loadItem, [item_id]);

  function loadItem() {
    const abortController = new AbortController();
    setItemError(null);
    getItem(item_id, abortController.signal).then(setItem).catch(setItemError);
    return () => abortController.abort();
  }

  function cancelHandler(event) {
    event.preventDefault();
    navigate.go(-1);
  }

  function changeHandler({ target: { name, value } }) {
    setItem({ ...item, [name]: value });
  }

  async function submitHandler(event) {
    const abortController = new AbortController();
    event.preventDefault();
    await createMenuItem(item).catch(setError);

    return () => abortController.abort();
  }

  return (
    <div>
      <ErrorAlert error={error} />
      <ErrorAlert error={itemError} />
      {/*           
          name: "Rainbow Roll",
          price: 11.99,
          img: "./assets/horizontal-pictures/rainbow-roll.jpg",
          desc:  ""
          */}
      <main>
        <h1>Create Menu Item</h1>
        <form onSubmit={submitHandler}>
          <fieldset>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="name">Name of Item</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Salmon Roll"
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group col">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="form-control"
                  placeholder="$9.99"
                  // onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group col">
                <label htmlFor="img">Image Path/Location</label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  className="form-control"
                  placeholder="Image Path/Location"
                  // onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="desc">Description</label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  className="form-control"
                  placeholder="Description"
                  // onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary mr-2 cancel"
              onClick={cancelHandler}
            >
              <span className="oi oi-x"></span> Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <span className="oi oi-check"></span> Submit
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}
