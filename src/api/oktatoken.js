import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-10941691.okta.com/oauth2/default',
    clientId: '0oahep0i2xMJxUgcC5d7',
    redirectUri: "http://localhost:8084/login/oauth2/code/okta" 
});

export const getAccessToken = async () => {
    if (oktaAuth.tokenManager.get('accessToken')) {
        const token = await oktaAuth.tokenManager.get('accessToken');
        return token.accessToken;
    }
    return null;
};

export default oktaAuth;
