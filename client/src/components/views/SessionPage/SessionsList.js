import React, { useState, useEffect } from "react";
import SessionCard from "./SessionCard";
import SessionManager from "../../../modules/SessionManager"

const SessionsList = props => {
  const [sessions, setSessions] = useState([]);

  const getAllSessions = () => {
    return SessionManager.getAllSessions().then(sessionsFromDatabase => {
      const sortedSessions = sessionsFromDatabase.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setSessions(sortedSessions.reverse());
    });
  };

  useEffect(() => {
    // console.log("inside useEffect()");
    getAllSessions();
  }, []);

  // console.log("about to return JSX", events);
  // Finally we use map() to "loop over" the events array to show a list of event cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/new-sessions");
          }}
        >
          Create New Sessions
        </button>
      </section>
      <div className="containers-cards">
        {sessions.map(session => (
          <SessionCard
            key={session.id}
            session={session}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default SessionsList;