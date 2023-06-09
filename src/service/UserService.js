export const getUser = (id, token) => {
    return fetch(`http://localhost:8015/user-ws/api/user/${id}`,
        {
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + token }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        });
};

export const saveUser = (requestPayload) => {
    return fetch(`http://localhost:8015/user-ws/api/user/signup`,
        {
            method: "POST",
            body: JSON.stringify(requestPayload),
            headers: { 'content-type': 'application/json' }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        });
};

