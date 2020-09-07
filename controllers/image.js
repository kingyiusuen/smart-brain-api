const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'd4e932ea23f6406abd827836fbd1f663'
});

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('unable to work with API'))
};

module.exports = {
    handleApiCall
}
