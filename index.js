const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    const date = new Date();
    const formattedDate = date.toISOString().split('.')[0] + 'Z';

    const response = {
        email: "innovatorj01@gmial.com",
        currentTime: formattedDate,
        githubUrl: "https://github.com/innovator-j/hng_firsttask"
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});