require('dotenv').config();
const fs = require('fs')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai
    .listEngines()
    .then((response) => {
        const data = JSON.stringify(response?.data);
        fs.writeFileSync("List_ChatGPT_Engines.json", data);
    });
