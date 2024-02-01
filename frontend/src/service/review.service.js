
import { toast } from 'react-toastify'
import { baseURL } from '../enviroments'
import axios from 'axios'

export const reviewList = async (endpoint, payload ) => {
    try {
        const queryString='?'
        for (const key in payload) {
         queryString+=`${key}=${payload[key]}&`
        }
        endpoint += queryString
        const data = await axios.get(baseURL + endpoint)
        return data?.data??[]
    } catch (error) {
        return toast.error("Something went wrond")


    }
}

export const deleteReview = async (endpoint) => {
    try {
        console.log(endpoint)
        await axios.delete(baseURL + endpoint)
    } catch (error) {

    }
}

export const createReview = async (endpoint, data = {}) => {
    try {
        await axios.post(baseURL + endpoint, data)
    } catch (error) {

    }
}


