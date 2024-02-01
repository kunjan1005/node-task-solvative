const { Op } = require("sequelize")
const { MODAL_STATUS, HTTP_STATUS_CODE, PAGE_SIZE } = require("../../global/constant")
const { errorInternalError, successReviewList, successCreateReview, successupdateReview, successDeleteReview, errorReviewNotCreated, errorTitleIsRequired, errorContentIsRequired, errorIdRequired, errorReviewNotUpdated, errorReviewNotDeleted } = require("../../global/string")
const { ReviewRepository } = require("../../repository.js/review.repository")
const { errorResponse, successResponse } = require("../../global/custom.response")

//review service
module.exports = class ReviewService {
    constructor() {
        this.reviewRepository = new ReviewRepository()
    }
    //#region  review list
    async reviewList(body) {
        try {        //body parameters
            const page = +(body?.page ?? 1)
            const searchText = body?.searchText
            const sort = body?.sort ?? '1'
            let sortingBy = body?.sortingBy
            //get review list
            const attributes = ['id', 'title', 'content', 'createdAt', 'updatedAt']
            const options = {
                where: { is_active: MODAL_STATUS.ACTIVE }
            }
            if (!sortingBy) sortingBy = 'createdAt'
            //check data sorting
            if (sort === '1') {
                options.sort = [[sortingBy, "DESC"]]
            } else if (sort === '0') {
                options.sort = [[sortingBy, "ASC"]]
            }
            //pagination
            options.limit = PAGE_SIZE
            options.offset = (PAGE_SIZE * page) - PAGE_SIZE
            //search text
            if (searchText)
                options.where[Op.or] = [{ title: { [Op.like]: `%${searchText}%` } },
                { content: { [Op.like]: `%${searchText}%` } }]
            //find all review list
            const reviewData = await this.reviewRepository.findAll(attributes, options)
            return successResponse(successReviewList, HTTP_STATUS_CODE.success, reviewData)
        } catch (error) {
            console.log(error)
            return errorResponse(errorInternalError)
        }
    }
    //#endregion

    //#region  new reiview
    async createNewReview(body) {
        try {
            if (!body.title) return errorResponse(errorTitleIsRequired, HTTP_STATUS_CODE.bad_request)
            else if (!body.content) return errorResponse(errorContentIsRequired, HTTP_STATUS_CODE.bad_request)
            //where 
            const options = { where: { title: body.title, is_active: MODAL_STATUS.ACTIVE } }
            //check existing review
            const checkExiting = await this.reviewRepository.find(['id'], options)
            if (checkExiting) return errorResponse()
            //create new review
            const createNewReview = await this.reviewRepository.create(body)
            //check record not created
            if (!createNewReview) return errorResponse(errorReviewNotCreated)
            return successResponse(successCreateReview, HTTP_STATUS_CODE.create_success, createNewReview)
        } catch (error) {
            return errorResponse(errorInternalError)
        }
    }
    //#endregion

    //#region  edit review
    async editReview(body) {
        try {
            if (!body.id) return errorResponse(errorIdRequired, HTTP_STATUS_CODE.bad_request)
            const updateData = {}
            if (body.title) updateData.title = body.title
            if (body.content) updateData.content = body.content
            const options = { where: { id: body.id } }
            //update review
            const checkUdate = await this.reviewRepository.update(options, updateData)
            if (checkUdate[0] == 0) return errorResponse(errorReviewNotUpdated)
            return successResponse(successupdateReview, HTTP_STATUS_CODE.create_success)
        } catch (error) {
            return errorResponse(errorInternalError)
        }
    }
    //#endregion

    //#region  edit review
    async deleteReview(body) {
        try {
            if (!body.id) return errorResponse()
            const options = { where: { id: body.id } }
            //delete review
            const checkDelete = await this.reviewRepository.update(options, { is_active: MODAL_STATUS.INACTIVE })
            if (!checkDelete) return errorResponse(errorReviewNotDeleted)
            return successResponse(successDeleteReview, HTTP_STATUS_CODE.success)
        } catch (error) {
            return errorResponse(errorInternalError)
        }
    }
    //#endregion
}