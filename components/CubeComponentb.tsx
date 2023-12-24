'use client'
import { useRef } from 'react'

const CubeComponent = () => {
  const loginRef = useRef()
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* <iframe
        src={process.env.CUBE_URL}
        sandbox="allow-same-origin allow-scripts"
        width="100%"
        title="Description of the content or purpose of the iframe"
        height="800px"
        style={{ border: 0 }}
        loading="lazy"
        allowTransparency={true}
        allowFullS
        creen={true}
      /> */}
      Hi
    </div>
  )
}
export default CubeComponent
