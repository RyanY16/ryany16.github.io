import { useState } from 'react'
import Header from './sections/1Header'
import ServerList from './sections/2ServerList'
import ChannelList from './sections/3ChannelList'
import MainText from './sections/4MainText'
import serverData from './data.jsx'
import jpServerData from './jpServerData.jsx'

function App() {
  const [selectedServer, setSelectedServer] = useState("Home")
  const [selectedData, setSelectedData] = useState(serverData)

  const [selectedChannels, setSelectedChannels] = useState([
    {
      name: "Resume",
      //selectedChannel: "Education"
      selectedChannel: selectedData.find(item => item.name === "Resume").data[0].name
    },
    {
      name: "Home",
      //selectedChannel: "Welcome"
      selectedChannel: selectedData.find(item => item.name === "Home").data[0].name
    }
  ])

  return (
    <div>
      <Header />
      <div class="main_content flex">
        <ServerList selectedServer = {selectedServer} setSelectedServer = {setSelectedServer} selectedChannels = {selectedChannels} setSelectedChannels = {setSelectedChannels} selectedData = {selectedData} setSelectedData = {setSelectedData}/>
        <ChannelList selectedServer = {selectedServer} setSelectedServer = {setSelectedServer} selectedChannels = {selectedChannels} setSelectedChannels = {setSelectedChannels} selectedData = {selectedData} setSelectedData = {setSelectedData}/>
        <MainText selectedServer = {selectedServer} setSelectedServer = {setSelectedServer} selectedChannels = {selectedChannels} setSelectedChannels = {setSelectedChannels} selectedData = {selectedData} setSelectedData = {setSelectedData}/>
      </div>
    </div>
  )
}

export default App
