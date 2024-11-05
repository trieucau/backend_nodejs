//chuc nang cua trang web
const express = require('express')
const router = express.Router()
const { getHomepage, getACBpage, getprofilePage, postcreateUser, getcreatePage, getcontactPage, getaboutPage, getUpdatePage, postupdateUser, getDeleteUser } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/abc', getACBpage)
router.get('/profiles', getprofilePage)
router.post('/create-user', postcreateUser)
router.post('/update-user', postupdateUser)
router.get('/create', getcreatePage)
router.get('/contact', getcontactPage)
router.get('/about', getaboutPage)
router.get('/update/:userID', getUpdatePage)
router.get('/delete/:userID', getDeleteUser)


module.exports = router