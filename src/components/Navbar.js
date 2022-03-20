import { Link, useLocation } from 'react-router-dom'

import DiscordIcon from '../assets/DiscordIcon.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import OpenseaIcon from '../assets/OpenseaIcon.png'
import WalletIcon from '../assets/WalletIcon.png'
import WorldIcon from '../assets/WordIcon.png'

const Navbar = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) {
			return 'active'
		}
	}

	return (
		<div className="navbar">
			<div className="logo">zodiacal</div>

			<div className="links">
				<ul className="page_links">
					<li>
						<Link className={`link ${isActive('/') || isActive('/home')}`} to="home">
							home
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/mint')}`} to="mint">
							mint
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/gallery')}`} to="gallery">
							gallery
							<span>soon</span>
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/game')}`} to="game">
							game
							<span>soon</span>
						</Link>
					</li>
				</ul>

				<ul className="social_links">
					<li>
						<a href="https://discord.com/" className="icon" target="_blank" rel="noreferrer">
							<img src={DiscordIcon} alt="DiscordIcon" />
						</a>
					</li>

					<li>
						<a href="https://twitter.com/" className="icon" target="_blank" rel="noreferrer">
							<img src={TwitterIcon} alt="DiscordIcon" />
						</a>
					</li>

					<li>
						<a href="https://wallet.io/" className="icon" target="_blank" rel="noreferrer">
							<img src={WalletIcon} alt="WalletIcon" />
						</a>
					</li>

					<li>
						<a href="https://opensea.io/" className="icon" target="_blank" rel="noreferrer">
							<img src={OpenseaIcon} alt="OpenseaIcon" />
						</a>
					</li>

					<li>
						<a href="https://world.io/" className="icon" target="_blank" rel="noreferrer">
							<img src={WorldIcon} alt="" />
						</a>
					</li>
				</ul>
			</div>

			<div className="hamburger_menu">
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	)
}

export default Navbar
