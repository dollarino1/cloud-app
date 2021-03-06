import React from 'react'
import { useSelector } from 'react-redux'
import File from './file/File'

const FileList = () => {
    const files = useSelector(state => state.files.files).map(
        file => <File key={file.id} file={file}/>
    )

    return (
        <div className='filelist'>
            <div className='filelist__headings'>
                <div className='filelist__name'>Name</div>
                <div className='filelist__type'>Type</div>
                <div className='filelist__date'>Date</div>
                <div className='filelist__size'>Size</div>
            </div>
            {files}
        </div>
    )
}

export default FileList
