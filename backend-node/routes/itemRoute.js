const router = require('express').Router();
const itemController = require("../controllers/itemController");

router.get('/', itemController.getItems);
router.post('/create', itemController.createItem);
router.put('/update/:id', itemController.updateItem);
router.delete('/delete/:id', itemController.deleteItem);


module.exports = router;