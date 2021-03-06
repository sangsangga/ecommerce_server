const express = require('express');
const router = express.Router();
const { CartController } = require('../controllers/controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
router.use(authentication)
router.post('/',CartController.createCart)
router.get('/', CartController.fetchCarts)
router.get('/:productId', CartController.fetchAllCarts)
router.patch('/:id',CartController.updateCart)
router.delete('/',CartController.checkOutCarts)
router.delete('/:id',CartController.destroyCart)




module.exports = router