module.exports.middlewareGlobal = (req, res, next) => {
    console.log('Midleware Global');
    if (req.body.usuario) {
        console.log(`Esse é o usuário: ${req.body.usuario}`);
    }
    next()
}