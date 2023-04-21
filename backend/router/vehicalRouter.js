const express = require('express');
const router = express.Router();

const availableVehicle = [
    {
        id: 1, vehicle: 'Two wheel', type: 'cruiser', model: 'KTM' , ratePerhr: '100'
    },
    {
        id: 2, vehicle: 'Two wheel', type: 'sports', model: 'Yahama' , ratePerhr: '150'
    },
    {
        id: 3, vehicle: 'Four wheel', type: 'hatchback', model: 'Toyato' , ratePerhr: '250'
    },
    {
        id: 4, vehicle: 'Four wheel', type: 'suv', model: 'Honda' , ratePerhr: '350'
    },
    {
        id: 5, vehicle: 'Four wheel', type: 'sedan', model: 'BMW' , ratePerhr: '550'
    },
]


router.get("/vehicle",(req,res)=>{
    res.send(availableVehicle);
})