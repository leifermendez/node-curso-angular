const ctrlError = (err, res) => {
    console.log('**** Tienes un error ****', err)
    //TODO:
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}

module.exports = { ctrlError }