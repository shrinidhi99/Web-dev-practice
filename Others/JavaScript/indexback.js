const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');
    res.send(course);

});

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // const result = Joi.validate(req.body, schema);
    const { error } = schema.validate(req.body);
    // console.log(result);

    if (error) {
        // res.status(400).send('Name is required and should be minimum 3 characters');
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
    // look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');

    const { error } = validateCourse(req.body);

    if (error) {
        // res.status(400).send('Name is required and should be minimum 3 characters');
        return res.status(400).send(error.details[0].message);
    }

    // update course

    course.name = req.body.name;

    // return the updates course
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    // res.send(req.params);
    res.send(req.query);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
    // return Joi.valid(course, schema);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));