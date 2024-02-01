const ReviewService = require('./review.service')

//express router instance for creating routing
const router=require('express').Router()

//service instance
const service=new ReviewService()

//#region  get review list
router.get('/',(req,res)=>{
    const data=service.reviewList(req.body)
    return res.json(data)
})
//#endregion

//#region  create new  review
router.get('/new',(req,res)=>{
    const data=service.reviewList(req.body)
    return res.json(data)
})
//#endregion

//#region  edit review
router.put('/:id',(req,res)=>{
    const data=service.reviewList({...req.params,...req.body})
    return res.json(data)
})
//#endregion

//#region  delete review
router.delete('/:id',(req,res)=>{
    const data=service.reviewList({...req.params,...req.body})
    return res.json(data)
})
//#endregion




//export review routing
module.exports.reviewRouting=router