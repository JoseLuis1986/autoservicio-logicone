import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
// import { types } from "../types/types";



export const startUploading = async (file) => {

    Swal.fire({
        title: 'Uploading....',
        text: 'please wait',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });
    try {
        const fileUrl = await fileUpload(file);

        Swal.close();

        return fileUrl;

    } catch (error) {
        console.log(error);
    }
}

// export const startUploading = (file) => {
//     console.log("mi archivo", file);
//     return async (dispatch, getState) => {

//         // const { active: activeNote } = getState().notes;

//         Swal.fire({
//             title: 'Uploading....',
//             text: 'please wait',
//             allowOutsideClick: false,
//             showConfirmButton: false,
//             willOpen: () => {
//                 Swal.showLoading();
//             }
//         });
//         try {

//             const fileUrl = await fileUpload(file);
//             activeNote.url = fileUrl;

//             // dispatch(startSaveNote(activeNote));

//             Swal.close();

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }