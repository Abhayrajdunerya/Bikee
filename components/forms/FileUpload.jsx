import {useState} from 'react'
import axios from 'axios';
import Resizer from 'react-image-file-resizer'
import { TiDelete } from 'react-icons/ti'
import { useSelector } from 'react-redux';

const API = 'http://localhost:3000/api'

const FileUpload = ({values, setValues, setLoading}) => {

    const { user } = useSelector((state) => ({ ...state }));

    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files;
        let allUploadedFiles = values.images;

        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                console.log(files[i]);
                Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {
                    // console.log(uri);
                    axios.post(API + `/uploadimages`, { image: uri }, {
                        headers: {
                            authtoken: user ? user.token : '',
                        },
                    }).then(res => {
                        console.log('IMAGE UPLOAD UPLOAD DATA ', res);
                        setLoading(false);
                        allUploadedFiles.push(res.data);
                        setValues({ ...values, images: allUploadedFiles });
                    }).catch(err => {
                        setLoading(false);
                        console.log('CLOUDINARY UPLOAD ERR ', err);
                    })
                }, 'base64')
            }
        }
        
    }

    const handleImageRemove = (public_id) => {
        setLoading(true);
        axios.post(API + `/removeimage`, { public_id }, {
            headers: {
                authtoken: user ? user.token : '',
            }
        })
            .then(res => {
                setLoading(false);
                const { images } = values;
                let filteredImage = images.filter((item) => {
                    return item.public_id !== public_id;
                });
                setValues({ ...values, images: filteredImage });
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }

    return (
        <div className="">
            <div className="flex space-x-4 flex-wrap mb-2">
                {values.images && values.images.map((image) => (
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