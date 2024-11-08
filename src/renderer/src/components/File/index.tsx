import { useRef, useState } from "react"

enum Status{
  Idea='idea',
  Pending='pending',
  Success='success',
  Error='error'
}
const StatusMap = {
  [Status.Idea]: 'Idea',
  [Status.Pending]: 'Pending',
  [Status.Success]: 'Success',
  [Status.Error]: 'Error'
}
const FilePage = () => {
  const[status, setStatus] = useState(Status.Idea)
  const fileRef = useRef<HTMLInputElement>(null)
  const handleSelectVideo = async (event) => {
    const files = event.target.files || []
    if (files.length > 0) {
      const file = files[0]
      console.log(file)
      setStatus(Status.Pending)
     const {status,data} = await window.electron.ipcRenderer.invoke("getVideoInfo",file.path)
     console.log(status,data)
     setStatus(status)
    }
  }
  const handleClick = ()=>{
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  return (
    <>
      <input ref={fileRef} type="file" accept="video/*" hidden onChange={handleSelectVideo}/>
      <button onClick={handleClick}>选择视频</button>
      <span>{StatusMap[status]}</span>
    </>
  )
}

export default FilePage
