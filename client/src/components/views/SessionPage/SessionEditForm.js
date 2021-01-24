import React, { useState, useEffect } from "react";
import SessionManager from "../../../modules/SessionManager";

const SessionEditForm = props => {
    const [sessions, setSessions] = useState({
        title: "",
        date: "",
        time: "",
    });


    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = (evt) => {
        const stateToChange = { ...sessions };
        stateToChange[evt.target.id] = evt.target.value;
        setSessions(stateToChange);
    };

    const updateExistingSession = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedSession = {
            id: props.match.params.sessionId,
            title: sessions.title,
            date: sessions.date,
            time: sessions.time
        };

        SessionManager.update(editedSession)
            .then(() => props.history.push("/all-sessions"))

    }

    useEffect(() => {
        SessionManager.get(props.match.params.sessionId)
            .then(sessions => {
                setSessions(sessions);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            value={sessions.title}
                        />

                        <label htmlFor="date">Date: </label>
                        <input
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            value={sessions.date}
                        />

                        <label htmlFor="time">Time: </label>
                        <input
                            type="time"
                            required
                            onChange={handleFieldChange}
                            id="time"
                            value={sessions.time}
                        />

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingSession}
                        > Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default SessionEditForm;