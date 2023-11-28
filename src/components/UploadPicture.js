import React from 'react';
import '../css/create-tickets.css';


export const UploadPicture = ({ setPreviewSource, setFileInputState, fileInputState, setImage }) => {


    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setFileInputState(e.target.value);
        console.log("mi archivo", file)
        const base64 = await convertToBase64(file);
        console.log("base64", base64)
        // setPostImage({ ...postImage, myFile: base64 });
        setImage(base64);
    };

    const convertToBase64 = (file) => {
        if (!file) return;
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = () => {
                reject('Error');
            }
        })
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };


    return (
        <div className='m-0'>
            <input
                id="fileInput"
                type="file"
                name="image"
                // style={{ display: 'none' }}
                onChange={handleFileInputChange}
                value={fileInputState}
            />
        </div>
    )
}
