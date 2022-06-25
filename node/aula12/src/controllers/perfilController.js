module.exports.getById = (req, res) => {
    res.send(`O id solicitado foi o: ${req.params.id}`)
}