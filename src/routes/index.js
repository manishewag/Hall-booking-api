import {Router} from 'express'
import employeeRoutes from './employee.js'
import roomRoutes from './room.js'
import bookingRoutes from './booking.js'
const routes = Router()

routes.get('/',(req,res)=>{
    res.send(`<div>
        <h1>Welcome Manikandan</h1>
        <h3> Welcome To Backend Of Letchat App </h3>
        <p>Pleace Refer Postman Collection For API Endpoints</p>
        </div>
    `)
    
})

routes.use('/employee',employeeRoutes);
routes.use('/booking',bookingRoutes );
routes.use('/room',roomRoutes);


export default routes