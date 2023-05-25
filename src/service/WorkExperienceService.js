export const addExperience = (requestPayload, token) => {
    return fetch(`http://localhost:8015/user-ws/api/work/experience`,
        {
            method: "POST",
            body: JSON.stringify(requestPayload),
            headers: { 'Authorization': 'Bearer ' + token, 'content-type': 'application/json' }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        });
};

