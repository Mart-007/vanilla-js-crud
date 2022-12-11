//Create a new record
const createRecord = () => {
    /* Use the SMLHttpRequest object to send a POST request to the server*/
    const request = new XMLHttpRequest();

    request.open('POST', '/api/records', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data))
}

//Read a record
const readRecord = (id) => {
    /* Use the XMLHttpRequest object to send a GET request to the server */
    const request = new XMLHttpRequest();

    request.open('GET', `/api/records/${id}`, true);
    request.send();
}

//Update a record
const updateRecord = (id, data) => {
    /* Use the XMLHttpRequest object to send a PUT request to the server */
    const request = new XMLHttpRequest();

    request.open('PUT', `/api/records/${id}`, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}

//Delete a record
const deleteRecord = (id) => {
    /* Use the XMLHttpRequest object to send a DELETE request to the server */
    const request = new XMLHttpRequest();

    request.open('DELETE', `/api/records/${id}`, true);
    request.send();
}