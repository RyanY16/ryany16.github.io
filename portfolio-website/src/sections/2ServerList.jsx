import React, { useState } from 'react'
import Separator from '../components/Separator'
import Server from '../components/Server.jsx'
import serverData from '../data.jsx'
import jpServerData from '../jpServerData.jsx'

const ServerList = ({selectedServer, setSelectedServer, selectedChannels, setSelectedChannels, selectedData}) => {

  return (
    <div class="h-screen bg-[#1E1F22] w-[72px]">
      <div class="flex flex-col justify-center items-center">
        <Server
          isSelected={selectedServer === "Home"}
          onClick={() => setSelectedServer("Home")}
        />

        <Server
          isSelected={selectedServer === "Resume"}
          onClick={() => setSelectedServer("Resume")}
        />

        <Server
          diameter={48}
          isSelected={false}
          onClick={() => console.log(
            
          )}
        />
      </div>
    </div>
  )
}

export default ServerList

