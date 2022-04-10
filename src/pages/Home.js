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
							renderThumbVertical={({ style, ...props }) => <div {...props} style={{ ...style, backgroundColor: '#000', width: '7px' }} />}
							className="text_container"
						>
							A limited NFT collection. The token itself is also your zodiacal membership! The zodiacal warriors are kind and lovely. With
							the zodiac elements as the background,this project is our team’s first step into the Metaverse. We focus on quality in
							preparation for building our vast and interesting Metaverse in our hearts. <br />
							<br />
							In our metaverse,
							<br />
							there are 8 highly civilized constellation families:
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
							<br />
							&#123;The Zodiacal Family&#125;
							<br />
							<br />
							elementA, a substance that allows armor to evolve.
							<br />
							Extremely rare.
							<br />
							<br />
							To find elementA, some families sent their warriors
							<br />
							to collect elementA in the metaverse,
							<br />
							which led to the extinction of many civilizations.
							<br />
							<br />
							The Zodiacial Familiy could not stand their cruelty and decided to put <br />
							an end to it!
							<br />
						</Scrollbars>
					</div>
					<div className="right">
						<button>
							<span>
								Public Sale <br /> May 1, 2022
							</span>
							each 0.08 ETH + GAS
						</button>
					</div>
				</div>
			</div>
			<p className="copyright">Copyright © 2022 Zodiacal All rights reserved</p>
		</div>
	)
}

export default Home
