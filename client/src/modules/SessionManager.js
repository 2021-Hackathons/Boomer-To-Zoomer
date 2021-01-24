const remoteURL = "http://localhost:8080";

export default {

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

};
  // get(id) {
  //   return fetch(`${remoteURL}/sessions/${id}`).then(result => result.json());
  // },

  // delete(id) {
  //   return fetch(`${remoteURL}/sessions/${id}`, {
  //     method: "DELETE"
  //   }).then(result => result.json());
  // },


  // update(editedEvent) {
  //   return fetch(`${remoteURL}/sessions/${editedEvent.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(editedEvent)
  //   }).then(data => data.json());
  // },

