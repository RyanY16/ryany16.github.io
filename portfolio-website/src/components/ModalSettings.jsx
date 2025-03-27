import React from 'react'
import Modal from 'react-modal'
import serverData from '../data'
import jpServerData from '../jpServerData'

Modal.setAppElement("#root")

const ModalSettings = ({isOpen, onClose, selectedData, setSelectedData, setSelectedChannels}) => {
	let subtitle
	
	function afterOpenModal() {
		subtitle.style.color = '#f00'
	}

	const customStyles = {
		content: {
			left: '190px',
			top: '80%',
			height: '100px',
			width: '150px',
			transform: 'translate(-50%, -50%)',
			//display: 'flex',          // Use flexbox for centering
      		//justifyContent: 'center', // Center horizontally
      		//alignItems: 'center',     // Center vertically
		},
		overlay: {
			backgroundColor: "rgba(1, 1, 1, 0.75%)"
		}
	}
	const handleLanguageChange = (event) => {
		const newLang = event.target.value
		
		if (newLang === "English") {
			setSelectedChannels((prev) =>
				prev.map((item) => {
				  if (item.name === "Resume") {
					return { ...item, selectedChannel: serverData.find(item => item.name === "Resume").data[0].name };
				  }
				  if (item.name === "Home") {
					return { ...item, selectedChannel: serverData.find(item => item.name === "Home").data[0].name };
				  }
				  return item;
				})
			  );
			setSelectedData(serverData)
			//console.log(serverData)
		} else if (newLang === "Japanese") {
			setSelectedChannels((prev) =>
				prev.map((item) => {
				  if (item.name === "Resume") {
					return { ...item, selectedChannel: jpServerData.find(item => item.name === "Resume").data[0].name };
				  }
				  if (item.name === "Home") {
					return { ...item, selectedChannel: jpServerData.find(item => item.name === "Home").data[0].name };
				  }
				  return item;
				})
			  );
			setSelectedData(jpServerData)
		}
	}

	return (
		<div>
			<Modal
				isOpen={isOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={onClose}
				contentLabel="Example"
				style={customStyles}
			>
				<button onClick = {onClose}>Close</button>
				<select onChange={handleLanguageChange}>
					<option value="English">English</option>
					<option value="Japanese">Japanese</option>
				</select>
			</Modal>
		</div>
	)

	/*return (
		<Modal
			isOpen={isOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={onClose}
			contentLabel="Example Modal"
		>
			<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
			<button onClick={closeModal}>close</button>
			<div>I am a modal</div>
			<form>
				<input />
				<button>tab navigation</button>
				<button>stays</button>
				<button>inside</button>
				<button>the modal</button>
			</form>
		</Modal>
	)*/
}

export default ModalSettings