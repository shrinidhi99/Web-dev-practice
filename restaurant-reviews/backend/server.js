import express from 'express';
import cors from 'cors';
import restaurants from './api/restaurants.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);

// any other request with URI not matching would receive 404 response
app.use("*", (req, res) => {
    res.status(404).json(
        {
            error: "not found"
        }
    )
});

// exporting app as a module
export default app;