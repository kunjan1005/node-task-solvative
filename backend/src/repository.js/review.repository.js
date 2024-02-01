const { Review } = require("../modals/review.modal")

module.exports.ReviewRepository = class {

    //#region  create new review
    async create(data) {
        return await Review.create(data)
    }
    //#endregion

    //#region  find all
    async findAll(attributes, options) {
        return await Review.findAndCountAll({ attributes, ...options })

    }
    //#endregion

    //#region  find all
    async find(attributes, options) {
        return await Review.findOne({ attributes, ...options })
    }
    //#endregion

    //#region  create new review
    async update(options, updateData) {
            return await Review.update(updateData, options)

        }
        //#endregion


    }