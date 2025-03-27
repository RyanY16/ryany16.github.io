import React from 'react'
import ProfilePic from './ProfilePic'

const Message = ({sender, time, title, specificTitle, details, link}) => {
	return (
		<div class="flex items-start">
			<div class="flex-shrink-0">
				<ProfilePic
					diameter = {40}
					isSelected = {false}
					onClick = {() => console.log()}
					link = {link}
				/>
			</div>
			
			<div class="ml-2 mt-2 mb-2">
				<span class="font-semibold text-[16px]">
					{sender}
				</span>
				<span class="ml-1 text-[#959BA3] text-[12px]">
					{time}
				</span>
				
				<br/>
				<div class="font-bold">
					{specificTitle}
				</div>
				<div class="whitespace-pre-line break-words text-[#DCDEE1] text-[16px]">
					{details.join("\n")}
					
				</div>
				
			</div>
			
		</div>
	)
}

export default Message