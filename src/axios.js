import axios from "axios";

const instance = axios.create({
    //THE API (cloud function) URL
    // But first we use a localhost emulation URL
    baseURL: "https://us-central1-challenge-15d22.cloudfunctions.net/api",
    //baseURL: "http://localhost:5001/challenge-15d22/us-central1/api"

});

export default instance;