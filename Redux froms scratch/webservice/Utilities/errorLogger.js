const fs=require('fs')

let errorLogger = (err, req, res, next) => {
    if (err) {
        let data = new Date()+'--' + err.stack +'\n' 
        fs.appendFile('Errorlogger.txt', data, (err) => {
            if (err) {
                console.log('failed')
            }
        })
        if (err.status) {
            res.status(err.status)
        }
        else {
            res.status(500)
        }
        res.json({ message: err.message })
    }
    next()
}

module.exports = errorLogger;