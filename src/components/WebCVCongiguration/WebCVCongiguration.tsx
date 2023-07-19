import React from 'react'
import StandardTemplate from '../StandardTemplate/StandardTemplate'

function WebCVCongiguration({ data} : any) {
  return (
    data.resumeConfig.template === "standard" ? <StandardTemplate data={data}/> :<></>
    
  )
}

export default WebCVCongiguration