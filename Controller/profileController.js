const app = require("../api/api");
const {getStorage, uploadBytes, getDownloadURL, ref, uploadString} = require("firebase/storage");

const storage = getStorage(app);

const uploadImage = async (req, res) => {
    const image = req.body;
   console.log(image);
    try {
        
        const storageRef = ref(storage, 'profile_pics/');
        await uploadString(storageRef, image);
        res.status(200).json({message: "Image uploaded successfully"});
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Some error Occured ${error}` });
    }
};

//Download Image
const downloadImage = async (req, res) => {
    const { image } = req.body;
    try {
        const storageRef = ref(storage, 'profile_pics/' + image);
        const url = await getDownloadURL(storageRef);
        res.status(200).json({message: "Image uploaded successfully", url});
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Some error Occured ${error}` });
    }
};

module.exports = { uploadImage, downloadImage };