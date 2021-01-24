import React, { useState } from "react";
import SessionManager from "../../../modules/SessionManager"
// const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

const AddSessionForm = props => {
  const [session, setSession] = useState({
    name: "",
    date: "",
    time:"",
    title:"",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...session };
    stateToChange[evt.target.id] = evt.target.value;
    setSession(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create event      object, invoke the SessionManager post method, and redirect to the full event list
   */
  const constructNewSession = evt => {
    evt.preventDefault();
    if (
      session.name === "" ||
      session.date === "" ||
      session.time === "" ||
      session.title === "" 
    ) {
      window.alert("Please login or fill out all the fields to continue");
    } else {
      setIsLoading(true);
      // Create the session and redirect user to event list
      SessionManager.post(session).then(() => props.history.push("/session"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Name: </label>
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
            <label htmlFor="time">time: </label>

            <input
              type="time"
              required
              onChange={handleFieldChange}
              id="time"
              placeholder="time"
            />
            <label htmlFor="title">Title: </label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="title"
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