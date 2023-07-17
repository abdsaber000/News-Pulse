import path from "path";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import { fileURLToPath } from 'url';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const uploadMethod = async (req, res) => {
    try{
    if (!req.files) {
        throw new BadRequestError('No File Uploaded');
    }

    const productImage = req.files.image;
    if (!productImage.mimetype.startsWith('image')) {
        throw new BadRequestError('Please Upload Image');
    }
    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new  BadRequestError('Please upload image smaller 1MB');
    }
    const imagePath = path.join(
        __dirname,
        '../public/uploads/' + `${productImage.name}`
    );
    await productImage.mv(imagePath);
    return res
        .status(StatusCodes.OK)
        .json({ image: { src: `/uploads/${productImage.name}` } });
    }catch(error){
        console.log(error);
    }
}


const getImage = (req, res) =>{
    try{
        const imageName = req.params.image;
        const imagePath = path.join(__dirname ,'../public/uploads/' + imageName);
        const readStream = fs.createReadStream(imagePath);
        console.log(imagePath);
        res.writeHead(200, {
            'Content-Type': 'image'
        });
        readStream.pipe(res);
    }catch(error){
        res.send("image not found");
    }

}

export { uploadMethod , getImage};