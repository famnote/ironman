const firebaseConfig = {

};

// Cloud Functions
const backendUrl = `https://asia-northeast1-${firebaseConfig.projectId}.cloudfunctions.net/api/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
