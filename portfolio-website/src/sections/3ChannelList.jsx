import React, {useState} from 'react'
import Channel from '../components/Channel'
import ModalSettings from '../components/ModalSettings'
import serverData from '../data.jsx'
import jpServerData from '../jpServerData.jsx'

const ChannelList = ({selectedServer, setSelectedServer, selectedChannels, setSelectedChannels, selectedData, setSelectedData}) => {
  const servers = selectedData.find(item => item.name === selectedServer).data.map(item => item.name)
  const [modalOpen, setModalOpen] = useState(false)

  if (selectedServer === "Resume" || selectedServer === "Home") {
    return (
      <div class="h-screen w-[240px] bg-[#2B2D31] flex flex-col items-center">
        <div class="mt-4 flex flex-col justify-between items-center h-full mb-8">
          <div>
            {servers.map((server) => 
              <div class="w-[224px] h-[34px] bg-[#313338] flex items-center">
                <Channel 
                  title = {`${server}`}
                  isSelected={
                    selectedChannels.find(channel => channel.name === selectedServer)?.selectedChannel
                    === server
                  }
                  onClick = {() => 
                    setSelectedChannels(
                      selectedChannels.map(
                        servers => servers.name === selectedServer ? 
                        {...servers, selectedChannel: server} : 
                        servers
                      )
                    )
                }
                />
              </div>
            )}
          </div>
          <div>

            <button
              onClick={() => setModalOpen(true)}        
            >
              Open Settings
            </button>

            <ModalSettings
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              selectedData = {selectedData}
              setSelectedData = {setSelectedData}
              setSelectedChannels = {setSelectedChannels}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="h-screen w-[240px] bg-[#2B2D31] flex flex-col items-center">
        <div class="mt-4 flex flex-col justify-between items-center h-full mb-8">

        </div>
      </div>
    )
  }
}

export default ChannelList