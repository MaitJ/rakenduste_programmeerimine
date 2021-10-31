const router = require('express').Router();
const postController = require('../controllers/postController');
const validationMiddleware = require('../middleware/validationMiddleware');
const {check} = require('express-validator');

router.post(
    '/add',
    [
        check("firstName")
            .isLength({min: 3})
            .withMessage("Must be atleast 3 char's long")
            .exists()
            .trim()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Must be alphabetic"),
        check("lastName")
            .isLength({min: 3})
            .withMessage("Must be atleast 3 char's long")
            .exists()
            .trim()
            .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
            .withMessage("Must be alphabetic"),
        check("data")
            .isLength({min: 10})
            .withMessage("Must be atleast 10 char's long")
            .exists()
            .trim()
    ],
    validationMiddleware,
    postController.addPost
);

router.get(
    "/",
    postController.getPost
)

router.put('/update/:id', postController.updatePost);
router.delete('/delete/:id', postController.deletePost);

module.exports = router;