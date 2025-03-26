import React from 'react'

const ProfilePic = ({isSelected, onClick, link}) => {
  /*
  return (
    <div class = "w-[72px] h-[72px] flex justify-center items-center relative">
        <div class={`${ isSelected ? "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-white rounded-r-full" : ""}`}/>
        <div 
          class = {`bg-[#2B2D31] w-[48px] h-[48px] rounded-full ${isSelected ? 'border-4 border-white' : ''}`} 
          onClick={onClick}
        />
    </div>
    
  )
  */
 return (
  <div class = "w-[72px] h-[72px] flex justify-center items-center relative">
    <img
      src={link ? link : "/icons/default.jpg"}
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: "white",
      }}
    />
  </div>
 )
}

export default ProfilePic