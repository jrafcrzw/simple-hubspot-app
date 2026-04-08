require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

app.get('/', async (req, res) => {
    const companies = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(companies, { headers });
        res.json(response.data.results);    
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
