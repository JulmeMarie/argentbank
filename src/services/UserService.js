class UserService {
    baseUrl = "http://localhost:3001/api/v1";

    getTokenFromBrowser() {
        return localStorage.getItem("argentbank-token");
    }

    setTokenToBrowser(token) {
        localStorage.setItem("argentbank-token", token);
    }

    removeTokenFromBrowser() {
        localStorage.clear();
    }

    /**
     * Allows to perform user login
     * @param {*} form 
     * @returns a Promise
     */
    loginUser(form) {
        return new Promise((resolve, reject) => {

            let formData = new FormData(form);
            if (!formData.get('email') || !formData.get('password')) {
                //Form Validation
                if (!formData.get('email')) {
                    reject("username/email is required");
                }
                if (!formData.get('password')) {
                    reject("password is required");
                }
            }
            else {

                //creating url for the login
                const loginUrl = this.baseUrl + "/user/login";

                //Creating an Object by key-value-entries
                const values = Object.fromEntries(formData.entries());

                //Data to sent to the server
                const data = {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }

                fetch(loginUrl, data).then(response => {
                    response.json().then(jsonData => {
                        if (jsonData.status === 200) { //200 OK
                            resolve(jsonData.body.token);
                        }
                        else {
                            reject(jsonData.message);
                        }
                    })
                }).catch(error => {
                    reject(error);
                })
            }
        });
    }

    getUser(token) {
        return new Promise((resolve, reject) => {
            //creating url to get the user profil
            const userUrl = this.baseUrl + "/user/profile";

            //Data to sent to the server
            const data = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
            fetch(userUrl, data).then(response => {
                response.json().then(jsonData => {
                    if (jsonData.status === 200) {
                        resolve(jsonData.body);
                    }
                    reject(jsonData.message);
                });
            }).catch(error => {
                reject(error);
            })
        });
    }

    updateUser(token, form) {
        return new Promise((resolve, reject) => {
            let formData = new FormData(form);

            //Form Validation
            if (!formData.get('firstName') || !formData.get('lastName')) {

                if (!formData.get('firstName')) {
                    reject("firstname is empty");
                }
                if (!formData.get('lastName')) {
                    reject("lastName is empty");
                }
            }
            else {
                //Creating an Object by key-value-entries
                const values = Object.fromEntries(formData.entries());

                //creating url to get the user profil
                const userUrl = this.baseUrl + "/user/profile";

                //Data to sent to the server
                const data = {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }

                fetch(userUrl, data).then(response => {
                    response.json().then(jsonData => {
                        if (jsonData.status === 200) {
                            resolve(jsonData.body);
                        }
                        else {
                            reject(jsonData.message);
                        }
                    });
                }).catch(error => {
                    reject(error);
                })
            }
        });
    }
}

export default UserService;