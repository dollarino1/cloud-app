import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFiles } from '../../api/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { Context } from '../../App'

const Disk = () => {
    const dispatch = useDispatch()
    const {setPopupDisplay} = useContext(Context)
    const currentDir = useSelector(state => state.files.currentDir)
    
    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function showPopupHandler() {
        setPopupDisplay('flex')
    }
    return (
        <div className="disk">
            <div className='disk__buttons'>
                <button>Go back</button>
                <button onClick={() => showPopupHandler()}>Create folder</button>
            </div>
            <FileList />
            <Popup />
        </div>
    )
}

export default Disk
