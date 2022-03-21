import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import DiscordIcon from '../assets/DiscordIcon.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import OpenseaIcon from '../assets/OpenseaIcon.png'
import WalletIcon from '../assets/WalletIcon.png'
import WorldIcon from '../assets/WordIcon.png'

import DiscordIconSm from '../assets/DiscordIconSm.png'
import TwitterIconSm from '../assets/TwitterIconSm.png'
import OpenseaIconSm from '../assets/OpenseaIconSm.png'
import WorldIconSm from '../assets/WorldIconSm.png'

import PersonSmOverlayIcon from '../assets/PersonSmOverlayIcon.png'

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
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
						<Link className={`link ${isActive('/') || isActive('/home')}`} to="/home">
							home
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/mint')}`} to="/mint">
							mint
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/gallery')}`} to="/gallery">
							gallery
							<span>soon</span>
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/game')}`} to="/game">
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

			<div className="hamburger_menu" onClick={() => setShowMobileMenu(true)}>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			{showMobileMenu && (
				<div className="mobile_overlay">
					<div className="content">
						<div className="logo">zodiacal</div>

						<div className="sm_links">
							<ul>
								<li>
									<Link className="link" to="/home" onClick={() => setShowMobileMenu(false)}>
										home
									</Link>
								</li>
								<li>
									<Link className="link" to="/mint" onClick={() => setShowMobileMenu(false)}>
										mint
									</Link>
								</li>
								<li>
									<Link className="link" to="/gallery" onClick={() => setShowMobileMenu(false)}>
										galley
									</Link>
									<span>soon</span>
								</li>
								<li>
									<Link className="link" to="/game" onClick={() => setShowMobileMenu(false)}>
										game
									</Link>
									<span>04-2022</span>
								</li>

								<li>
									<Link to="https://discord.com/" className="link" onClick={() => setShowMobileMenu(false)}>
										discord
									</Link>
									<img src={DiscordIconSm} alt="" />
								</li>

								<li>
									<Link to="https://twitter.com/" className="link" onClick={() => setShowMobileMenu(false)}>
										twitter
									</Link>
									<img src={TwitterIconSm} alt="" />
								</li>

								<li>
									<Link to="https://opensea.com/" className="link" onClick={() => setShowMobileMenu(false)}>
										opensea
									</Link>
									<img src={OpenseaIconSm} alt="" />
								</li>

								<li>
									<Link to="#language" className="link" onClick={() => setShowMobileMenu(false)}>
										language
									</Link>
									<img src={WorldIconSm} alt="" />
								</li>
							</ul>

							<button>connect wallet</button>
						</div>

						<div className="man_img">
							<img src={PersonSmOverlayIcon} alt="PersonSmOverlayIcon" />
						</div>

						<span className="cancel" onClick={() => setShowMobileMenu(false)}>
							{' '}
							x{' '}
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
