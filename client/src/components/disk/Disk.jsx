import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFiles } from '../../api/file'
import FileList from './fileList/FileList'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    return (
        <div className="disk">
            <div className='disk__buttons'>
                <button>Go back</button>
                <button>Upload file</button>
            </div>
            <FileList />
        </div>
    )
}

export default Disk
