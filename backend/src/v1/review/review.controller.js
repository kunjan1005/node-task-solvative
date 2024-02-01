const ReviewService = require('./review.service')

//express router instance for creating routing
const router=require('express').Router()

//service instance
const service=new ReviewService()

//#region  get review list
router.get('/',async (req,res)=>{
    const response=await service.reviewList(req.query)
    return res.status(response.statusCode).json(response)
})
//#endregion

//#region  create new  review
router.post('/new',async(req,res)=>{
    const response=await service.createNewReview(req.body)
    return res.status(response.statusCode).json(response)
})
//#endregion

//#region  edit review
router.put('/:id',async (req,res)=>{
    const response=await service.editReview({...req.params,...req.body})
    return res.status(response.statusCode).json(response)
})
//#endregion

//#region  delete review
router.delete('/:id',async (req,res)=>{
    const response=await service.deleteReview(req.params)
    return res.status(response.statusCode).json(response)
})
//#endregion

//export review routing
module.exports={reviewRouting:router}