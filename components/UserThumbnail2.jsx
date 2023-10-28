import Image from 'next/image'
import React from 'react'

const UserThumbnail2 = ({user}) => {
  return (
    <div className="">
        <div className="user-details">
            <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="userImg" className="object-cover object-center h-full w-full" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png" height={40} width={40} />
            </div>
        </div>
    </div>
  )
}

export default UserThumbnail2