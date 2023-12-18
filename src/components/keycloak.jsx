// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'sso-demo',
  clientId: 'employee-portal',
  clientSecret: '7Zp9NGacgBEFAZNcsMLQaFKPcAvfOY0r'
};

const keycloakInst = new Keycloak(keycloakConfig);

export default keycloakInst;
