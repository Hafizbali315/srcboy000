import Navbar from '../components/Navbar'
import RoadmapImgRow from '../assets/RoadmapImgRow.png'

const Roadmap = () => {
	return (
		<div className="roadmap_container">
			<Navbar />

			<div className="content_section">
				<div className="heading">
					<h2>roadmap</h2>
					<p>
						The roadmap is our short-term goal. Our long-term goal is to exceed the roadmap goals and
						<br /> lead zodiacal from Metaverse to different fields, increasing the value of zodiacal.
					</p>
				</div>
				<div className="roadmap">
					<div className="vr_line"></div>

					<div className="left_row row">
						<div className="left">
							<h3>1. Metaverse Battle</h3>
							<p>The continuous battle has caused countless casualties in the zodiacal family.</p>
							<p>There are only 10,000 warriors left. </p>
							<p>However, they will fight for justice regardless of the cost.</p>
						</div>

						<div className="box">
							<div className="dot"></div>
						</div>

						<div className="right"></div>
					</div>

					<div className="right_row row">
						<div className="left"></div>

						<div className="box">
							<div className="dot"></div>
						</div>

						<div className="right">
							<h3>2. Explore the Metaverse</h3>
							<p>The warriors are constantly exploring the Metaverse.</p>
							<p>When any rare substances are found, they will be airdrop into the warrior’s wallet.</p>
						</div>
					</div>

					<div className="left_row row">
						<div className="left">
							<h3>3. New Series of Equipment</h3>
							<p>Our team is creating a new series of Equipment. </p>
							<p>The warriors can use the rare substances to exchange for the new equipment.</p>
							<p>Wearing the unique equipment is the best reward for a warrior.</p>
						</div>

						<div className="box">
							<div className="dot"></div>
						</div>

						<div className="right"></div>
					</div>

					<div className="right_row row">
						<div className="left"></div>

						<div className="box">
							<div className="dot"></div>
						</div>

						<div className="right">
							<h3>4. Brand Cooperation</h3>
							<p>Some of the evil families are aggressive. When facing the outnumbered enemies,</p>
							<p>the zodiacal needs to allay with other Metaverse warriors to fight back together.</p>
							<p>When winning, they meet to have hamburgers.</p>
						</div>
					</div>

					<div className="left_row row">
						<div className="left">
							<h3>5. Star Cluster</h3>
							<p>We are building a Metaverse territory as a zodiacal ecosystem. </p>
							<p>Please stay tuned.</p>
						</div>

						<div className="box">
							<div className="dot"></div>
						</div>

						<div className="right"></div>
					</div>
				</div>

				<div className="img_container">
					<img src={RoadmapImgRow} alt="RoadmapImgRow" />
				</div>

				<div className="copyright">Copyright © 2022 Zodiacal All rights reserved</div>
			</div>
		</div>
	)
}

export default Roadmap
