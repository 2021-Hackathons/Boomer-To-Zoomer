const remoteURL = "http://localhost:5000";

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

};
  // get(id) {
  //   return fetch(`${remoteURL}/sessions/${id}`).then(result => result.json());
  // },
  // getAll() {
  //   return fetch(`${remoteURL}/sessions`).then(result => result.json());
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

  // getAllSessionsByUser() {
  //   return fetch(`${remoteURL}/sessions?_expand=user`).then(result =>
  //     result.json()
  //   );
  // }