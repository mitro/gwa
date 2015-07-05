import when from 'when';
import request from 'reqwest';

import LoginActions from '../actions/LoginActions.js';

class AuthService {

    login(username, password) {

        return when(request({
            url: "http://localhost:8080/jwt/generate-token",
            method: "post",
            contentType: "application/json",
            dataType: "json",
            crossOrigin: true,
            data: JSON.stringify({
                username,
                password
            })
        }))
        .then(function (response) {

            let jwt = response.token;

            // We trigger the LoginAction with that JWT.
            LoginActions.loginUser(jwt);
            return true;
        });
    }
}

export default new AuthService()