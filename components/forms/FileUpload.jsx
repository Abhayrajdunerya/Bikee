import Resizer from 'react-image-file-resizer'
import { TiDelete } from 'react-icons/ti'
import { uploadImgs, removeImgs } from '@/libs/cloudinary'
import { toast } from 'react-toastify'

const FileUpload = ({values, setValues, setLoading}) => {

    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files;
        let allUploadedFiles = values;

        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                console.log(files[i]);
                Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, async (uri) => {

                    try {
                        const response = await uploadImgs(uri);
    
                        console.log(response);
    
                        setLoading(false);
                        allUploadedFiles.push(response);
                        setValues(allUploadedFiles)
                        
                    } catch (error) {
                        setLoading(false);
                        console.log('CLOUDINARY UPLOAD ERR', error);
                        toast.success('Failed to upload image')
                    }
                   
                }, 'base64')
            }
        }
        
    }

    const handleImageRemove = async (public_id) => {
        try {
            setLoading(true);
           
            const response = await removeImgs(public_id);
            
            setLoading(false);
            let filteredImage = values.filter((item) => {
                return item.public_id !== public_id;
            });
            setValues(filteredImage);
            
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error('Failed to remove image');
        }
    }

    return (
        <div className="">
            <div className="flex space-x-4 flex-wrap mb-2">
                {values && values.map((image) => (
                    <div key={image.public_id} className='relative'>
                        <div className=''>
                            <TiDelete size={22} onClick={() => handleImageRemove(image.public_id)} className='text-red-500 hover:text-red-600 absolute -right-[12px] -top-[12px]' />
                            <img src={image.url} alt="img" className='h-16 w-16 rounded-md' />
                        </div>
                    </div>
                ))}
            </div>

            <div className="">
                <label htmlFor="small-file-input" className="sr-only">Choose file</label>
                <input onChange={fileUploadAndResize} multiple accept='images/*' type="file" name="small-file-input" id="small-file-input" className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
            </div>
        </div>
    )
}

export default FileUpload