export const logIn = (requestPayload) => {
    return fetch("http://localhost:8015/user-ws/api/login",
        { method: "POST", body: JSON.stringify(requestPayload) })
        .then((response) => {
            if (response.ok) {
                return response;
            } else throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        });
};

export const logOut = (token) => {
    return fetch("http://localhost:8015/user-ws/api/logout",
        {
            method: "POST",
            headers: { 'Authorization': 'Bearer ' + token }
        })
        .then((response) => {
            if (response.ok) {
                return response;
            } else throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        });
};
