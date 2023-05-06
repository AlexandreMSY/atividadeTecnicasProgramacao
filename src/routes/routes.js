const router = require('express').Router()
const { show, index, create, update, dlt} = require('../controller/controller')

// Retorna todos fatos
router.get('/', show)
// Retorna um fato
router.get('/:id', index)
// Cria um novo fato
router.post('/', create)
// Edita um fato
router.put('/:id', update)
// Deleta um fato
router.delete('/:id', dlt)

module.exports = router