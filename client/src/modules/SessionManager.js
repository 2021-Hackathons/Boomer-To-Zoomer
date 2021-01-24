const remoteURL = "http://localhost:8080";

export default {

  get(id) {
    return fetch(`${remoteURL}/sessions/${id}`).then(result => result.json());
  },

  post(newSession) {
    return fetch(`${remoteURL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSession)
    }).then(data => data.json());
  },
  getAllSessions() {
    return fetch(`${remoteURL}/sessions`).then(result => result.json());
  },

  update(editedSession) {
    return fetch(`${remoteURL}/sessions/${editedSession.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSession)
    }).then(data => data.json());
  },

  delete(id) {
    return fetch(`${remoteURL}/sessions/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  }


};





