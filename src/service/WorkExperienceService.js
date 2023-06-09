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

export const deleteById = (id, token) => {
    return fetch(`http://localhost:8015/user-ws/api/work/experience/${id}`,
        {
            method: "DELETE",
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

export const upateExperience = (id, requestPayload, token) => {
    return fetch(`http://localhost:8015/user-ws/api/work/experience/${id}`,
        {
            method: "PUT",
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

