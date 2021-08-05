import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Context } from '../../App'
import Input from '../utils/Input'
import { createDir } from '../../api/file'

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const {popupDisplay, setPopupDisplay} = useContext(Context)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler () {
        dispatch(createDir(currentDir, dirName))
        setPopupDisplay('none')
        setDirName('')
    }
    return (
        <div className='popup' onClick={() => setPopupDisplay('none')}
        style={{display: popupDisplay}}>
            <div className='popup__content' onClick={(event) => event.stopPropagation()}>
                <div className="popup__header">
                    <p>Create new folder</p>
                    <button onClick={() => setPopupDisplay('none')}>Close</button>
                </div>
                <Input type='text' placeholder='Enter folder name'
                value={dirName} setValue={setDirName}/>
                <button className="popup__create" onClick={() => createHandler()}>Create</button>
            </div>
        </div>
    )
}

export default Popup
