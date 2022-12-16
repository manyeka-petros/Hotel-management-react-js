

import http from "./http-common";

const upload = (file,onUploadProgres)=>{

    let formData = new FormData()
     formData.append("file",file)

     return http.post("/upload",formData,{
        headers:{
            "Content-Type": "multipart/form-data",
        },
        onUploadProgres,
     });
     

};

const getFiles=()=>{
    return http.get("/files")
};

export default{
    upload,
    getFiles,
};

