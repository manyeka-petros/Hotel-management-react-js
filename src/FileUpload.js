import React, { useEffect, useState } from 'react'

import FileUploadService from './FileUploadService'

const FileUpload = () => {
    const[selectedFile,setSelectedFile] = useState(undefined)
    const[currentFile,setCurrentFile] = useState(undefined)
    const[progres,setProgres] = useState(0)
    const[message,setMessage] = useState("")
    const[fileInfos,setFileInfos] = useState([])

    const selectFile = (event)=>{
        setSelectedFile(event.target.files)
    }
    const upload =()=>{
        let currentFile = selectedFile[0];
        setProgres(0)
        setCurrentFile(currentFile)
        FileUploadService.upload(currentFile,(event) =>{
            setProgres(Math.round((100 * event.loaded) / event.total));
        })
        .then((res)=>{
            setMessage(res.data.message)
            return FileUploadService.getFiles()
        })
        .then((files)=>{
            setFileInfos(files.data)
        })
        .catch(() => {
            setProgres(0);
            setMessage("Could not upload the file!");
            setCurrentFile(undefined);
          });
          setSelectedFile(undefined);
    }

    useEffect(()=>{
        FileUploadService.getFiles().then((res)=>{
            setFileInfos(res.data)
        })
    },[])

  return (
    <div>
    {currentFile && (
      <div className="progress">
        <div
          className="progress-bar progress-bar-info progress-bar-striped"
          role="progressbar"
          aria-valuenow={progres}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: progres + "%" }}
        >
          {progres}%
        </div>
      </div>
    )}

    <label className="btn btn-default">
      <input type="file" onChange={selectFile} />
    </label>

    <button
      className="btn btn-success"
      disabled={!selectedFile}
      onClick={upload}
    >
      Upload
    </button>

    <div className="alert alert-light" role="alert">
      {message}
    </div>

    <div className="card">
      <div className="card-header">List of Files</div>
      <ul className="list-group list-group-flush">
        {fileInfos &&
          fileInfos.map((file, index) => (
            <li className="list-group-item" key={index}>
              <a href={file.urls}>{file.fileName}</a>
            </li>
          ))}
      </ul>
    </div>
  </div>
);
    
  
}

export default FileUpload