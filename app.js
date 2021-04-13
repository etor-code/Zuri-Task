

const fs = require('fs');
const axios = require('axios');

async function getPosts() {
    // Fetch the data
    const output = await axios.get('http://jsonplaceholder.typicode.com/posts');

    // Convert data to json
    const toJson = JSON.stringify(output.data, null, 2);

    fs.writeFile(`${__dirname}/result/posts.json`, toJson, err => {
        if (err) throw err;

        console.log('File successfully written');
    });
}

getPosts();