import React from 'react'
import dirLogo from '../../../../assets/dirLogo.svg'
import fileLogo from '../../../../assets/fileLogo.png'
const File = ({file}) => {
    return (
        <div className='file'>
            <img className='file__logo' src={file.type === 'dir' ? dirLogo : fileLogo}/>
            <div className='file__name'>{file.name}</div>
            <div className='file__type'>{file.type}</div>
            <div className='file__date'>{file.date.slice(0, 10)}</div>
            <div className='file__size'>{file.size}</div>
        </div>
    )
}

export default File
