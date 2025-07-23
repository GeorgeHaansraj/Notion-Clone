// firebase-admin.ts
// Import the necessary functions from Firebase Admin SDK
import { 
    initializeApp,
    cert,
    getApps,
    App,
    getApp
} from 'firebase-admin/app';
// Import Firestore from Firebase Admin SDK
import { getFirestore } from 'firebase-admin/firestore';

// Import the service key for Firebase Admin SDK
// Ensure you have the service key JSON file in your project
const serviceKey = require( "@/service_key.json" );

// Define the app variable to hold the initialized Firebase Admin app
let app: App;
// Initialize Firebase Admin SDK
// Check if there are any initialized apps, if not, initialize with service key
if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey)
    });
} else { 
    app = getApp();
}

// Get Firestore instance from the initialized app
// This will allow you to interact with Firestore using the Admin SDK
const adminDb = getFirestore(app);

// Export the initialized app and Firestore instance
export { app as adminApp, adminDb };