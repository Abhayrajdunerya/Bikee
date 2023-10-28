import Image from 'next/image'
import React from 'react'

const UserThumbnail = ({img, name, email}) => {
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full min-w-max">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img} height={40} width={40} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                        <p className="text-gray-500">{email}</p>
                    </div>
            </div>
        </div>
    )
}

export default UserThumbnail