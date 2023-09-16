// @desc   Logsd request to cosnole

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${re1.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger ;