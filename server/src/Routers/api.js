const { CreateTask, status, ListByStatus, TotalByStatus } = require('../Controllers/TaskController')
const { RegistrationUser, AllUser, SingleUser, UpdateUser, DeleteUser, LoginUser } = require('../Controllers/UserController')
const verifyToken = require('../Verification/verify')
const routers = require('express').Router()



// user routes
routers.post("/registration", RegistrationUser)
routers.post("/login", LoginUser)

routers.get("/alluser", AllUser)
routers.get("/singleuser/:id", SingleUser)
routers.post("/updateuser", verifyToken, UpdateUser)
// routers.post("/updateuser/:id", UpdateUser)      // with out verifyToken 
routers.get("/removeuser/:id", DeleteUser)



// Task route
routers.post('/createtask', verifyToken, CreateTask)
routers.get('/status/:id/:status', verifyToken, status)
routers.get('/tasklist/:status', verifyToken, ListByStatus)
routers.get('/totalStatus', verifyToken, TotalByStatus)


module.exports = routers