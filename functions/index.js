const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HRc9jE5G4blOvWjsHi5H0pDB6nS1XPJMvw0ktdczOLXSKMgs1FJAnl6corRzUH0JpSIexnx5ypBklXCsgXvfzaW00fkbuof4j");

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// DEMO
app.get("/", (request, response) => response.status(200).send("Hello Worldy!"));
// The Good!
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;


    console.log("Payment Request Recieved BOOM! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "gbp",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});


// - Listen command
exports.api = functions.https.onRequest(app);
