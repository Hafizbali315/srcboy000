import Navbar from '../components/Navbar'
import HomeLgImg from '../assets/HomeLgImg.png'
import { Scrollbars } from 'react-custom-scrollbars'

const Home = () => {
	return (
		<div className="home">
			<Navbar />

			<div className="hero_section">
				<div className="img_container">
					<img src={HomeLgImg} alt="homeLgImg" />
				</div>

				<div className="text_box">
					<div className="left">
						<Scrollbars
							renderThumbVertical={({ style, ...props }) => <div {...props} style={{ ...style, backgroundColor: '#000' }} />}
							className="text_container"
						>
							A limited NFT collection where the token itself doubles as your membership to the zodiacal ! Play with us. <br />
							<br />
							In our metaverse, there are 8 highly civilized constellation families:
							<br />
							The Ursa Major Family,
							<br />
							The Perseus Family,
							<br />
							The Hercules Family,
							<br />
							The Orion Family,
							<br />
							The heavenly Waters, <br />
							The Bayer Group,
							<br />
							The La Caille family, <br />
							and the last but the most paramount,
							<br />
							<br />
							The Zodiacal Family
							<br />
							<br />
							elementA, a substance that allows armor to evolve. Extremely rare.
							<br />
							To find elementA, some families sent their warriors to collect elementA in the metaverse,
							<br />
							which led to the extinction of many civilizations.
							<br />
							<br />
							The Zodiacial Familiy could not stand their cruelty and decided to put an end to it!
						</Scrollbars>
					</div>
					<div className="right">
						<button>
							each 0.08 ETH + GAS
							<span>mint</span>
						</button>
					</div>
				</div>
			</div>
			<p className="copyright">Copyright © 2022 Zodiacal All rights reserved</p>
		</div>
	)
}

export default Home
