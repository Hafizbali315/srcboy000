import React from 'react'

const MintCard = ({ img, traits, pcs }) => {
	return (
		<div className="mint_card">
			<h3>{traits}</h3>
			<div className="img_container">
				<img src={img} alt="MintImg1" />
			</div>
			<h4>{pcs}</h4>
		</div>
	)
}

export default MintCard
