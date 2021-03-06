import { useState } from 'react'

import { Scrollbars } from 'react-custom-scrollbars'

import Navbar from './../components/Navbar'
import MintCard from '../components/MintCard'

import MintImg1 from '../assets/MintImg1.png'
import MintImg2 from '../assets/MintImg2.png'
import MintImg3 from '../assets/MintImg3.png'
import MintImg4 from '../assets/MintImg4.png'
import MintImg5 from '../assets/MintImg5.png'
import MintImg6 from '../assets/MintImg6.png'

// import PersonSmOverlayIcon from '../assets/PersonSmOverlayIcon.png'

const Mint = () => {
	const [count, setCount] = useState(0)

	const increase = () => {
		if (count < 20) {
			setCount((prev) => prev + 1)
		}
	}
	const decrease = () => {
		if (count > 0) {
			setCount((prev) => prev - 1)
		}
	}

	return (
		<div className="mint">
			<Navbar />

			<div className="content_section">
				<h2>mint</h2>

				<div className="cards_row">
					<MintCard img={MintImg1} traits="6 traits" pcs="60pcs" />
					<MintCard img={MintImg2} traits="5 traits" pcs="440pcs" />
					<MintCard img={MintImg3} traits="4 traits" pcs="1500pcs" />
					<MintCard img={MintImg4} traits="3 traits" pcs="2000pcs" />
					<MintCard img={MintImg5} traits="2 traits" pcs="2500pcs" />
					<MintCard img={MintImg6} traits="1 traits" pcs="3500pcs" />
				</div>

				<h2>specification</h2>

				<div className="specs_content">
					<div className="left">
						<Scrollbars
							className="text"
							renderThumbVertical={({ style, ...props }) => <div {...props} style={{ ...style, backgroundColor: '#000' }} />}
						>
							zodiacal living on the Ethereum blockchain in the form of ERC-721 tokens and hosted on IPFS,
							<br />
							each zodiacal is priced at 0.08 ETH + GAS.
							<br />
							<br />
							A total of 10,000 warriors will be sold to the public in a mystery box format.
							<br />
							<br />
							<h2 style={{ textAlign: 'left' }}>rarity</h2>
							<br />
							1 traits = 35% =3500/10000pcs
							<br />
							2 traits = 25% =2500/10000pcs
							<br />
							3 traits = 20% =2000/10000pcs
							<br />
							4 traits = 15% =1500/10000pcs
							<br />
							5 traits = 4.4%=440/10000pcs <br />
							6 traits = 0.6%=60/10000pcs
							<br />
						</Scrollbars>
					</div>

					<div className="right">
						<h3>each 0.08 ETH + GAS</h3>

						<div className="counter">
							<div className="minus" onClick={decrease}>
								{' '}
								-{' '}
							</div>
							<div className="input">{count}</div>
							<div className="minus" onClick={increase}>
								{' '}
								+{' '}
							</div>
						</div>

						<span>*mint up to 10 NFTs per wallet</span>
						<button>mint</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mint
