import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-10941691.okta.com/oauth2/default',
    clientId: '0oahep0i2xMJxUgcC5d7',
    redirectUri: "http://localhost:8084/login/oauth2/code/okta",
});
export const getAccessToken = async () => {
    try {
        const token = await oktaAuth.tokenManager.get('accessToken');
        const idToken = await oktaAuth.tokenManager.get('idToken');
        console.log('Token object:', token);
        console.log("Id Token:", idToken);

        if (!token) {
            console.error('No token found in the token manager');
            return undefined;
        }

        return token.accessToken;
    } catch (error) {
        console.error('Error fetching token:', error);
        return undefined;
    }
};

export default oktaAuth;
