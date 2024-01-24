
const express=require('express')

const userController=require('../controllers/userController')

// import multer config

const multerConfig=require('../middleware/multer-middleware')

// create an object for router class inside express

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

// api for getting data from backend

router.get('/get-all-users',userController.getallUsers)

router.delete('/delete-user/:id',userController.deleteUser)


// api for edit 

router.put('/edit-user/:id',multerConfig.single("profile"),userController.editUser)

module.exports=router