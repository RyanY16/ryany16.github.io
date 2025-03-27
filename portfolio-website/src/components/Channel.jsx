import React from 'react'

const Channel = ({title, isSelected, onClick}) => {
  return (
    <div 
        class={`font-ggsans font-semibold truncate w-full h-full flex items-center px-2
            hover:bg-[#36373c] hover:text-[#dcdee1] text-[16px]
            ${isSelected ? "bg-[#404248] text-[#FFFFFF]" : "bg-[#2B2D31] text-[#959BA3]"}
        `}
        onClick = {onClick}
    >
      <svg class="icon__2ea32" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="#959BA3" fill-rule="evenodd" d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" clip-rule="evenodd" class="">
        </path>
      </svg>
      <div class="mt-1 ml-2 mb-1">
        {title.toLowerCase().replace(/\s+/g, "-")}
      </div>
        
    </div>  
  )
}

export default Channel