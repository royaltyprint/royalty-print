const admin = require("firebase-admin");
const serviceAccount = require("./firebase-admin-key.json");
admin.initializeApp({
    Credential:
    admin.Credential.cert(serviceAccount),
});