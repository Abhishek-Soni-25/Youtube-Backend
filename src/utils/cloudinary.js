import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
    cloud_name: 'dvupuwrsu', 
    api_key: '924252249578569', 
    api_secret: 'eDCVPq6z5OGfjlNJeSdaloGfEEo'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}