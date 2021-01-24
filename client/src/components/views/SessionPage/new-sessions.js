import React, { useState } from "react";
import SessionManager from "../../../modules/SessionManager";

const AddSessionForm = (props) => {
  const [session, setSession] = useState({
    title: "",
    date: "",
    time: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...session };
    stateToChange[evt.target.id] = evt.target.value;
    setSession(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create session object, invoke the SessionManager post method, and redirect to the full session list
   */
  const constructNewSession = (evt) => {
    evt.preventDefault();
    if (session.title === "" || session.date === "" || session.time === "") {
    } else {
      setIsLoading(true);
      // Create the session and redirect user to session list
      SessionManager.post(session).then(() =>
        props.history.push("/all-sessions")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Title: </label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="SessionName"
            />
            <label htmlFor="date">Date: </label>

            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="SessionDate"
            />
            <label htmlFor="time">Time: </label>

            <input
              type="time"
              required
              onChange={handleFieldChange}
              id="time"
              placeholder="time"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewSession}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddSessionForm;
