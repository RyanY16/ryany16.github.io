import React from 'react'
import Message from '../components/Message';
import ProfilePic from '../components/ProfilePic';
import serverData from '../data';

const MainText = ({selectedServer, setSelectedServer, selectedChannels, setSelectedChannels, selectedData}) => {
  if (selectedServer === "Resume" || selectedServer === "Home") {
    return (
      <div class="h-screen bg-[#313338] w-[calc(100vw-240px-72px)] flex flex-col flex-1 min-h-0 overflow-y-auto">
        <div class="w-full h-[2px] bg-[#2B2D31]">
          <div class="text-white text-sm max-w-[90%] mt-4 pb-10">
          {
            selectedData.find(item => item.name === selectedServer).data.find(item => item.name === 
              selectedChannels.find(server => server.name === selectedServer).selectedChannel
            ).channels.map(channel => 
              <Message
                  sender = {channel.title}
                  time = {channel.date ? channel.date : ""}
                  title = {channel.title}
                  specificTitle = {channel.specificTitle}
                  details = {channel.details}
                  link = {channel.link}
                />
            )
          }

          

          </div>
        </div>
      </div>
    )
  }
}

export default MainText