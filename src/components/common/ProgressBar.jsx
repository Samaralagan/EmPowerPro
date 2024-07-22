// Filename - Progress_bar.js

import React from 'react'

const ProgressBar = ({color,progress,height,bgcolor}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor:bgcolor ,
		borderRadius: 40,
		margin:20 
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: color,
	    borderRadius:40,
		textAlign: 'center',
		display:'flex',
		alignItems:'center',
		justifyContent:'center'
	}
	
	const progresstext = {
		// padding: 8,
		color: 'black',
		fontWeight: 900,
		fontSize: '1.7vh',
	}
	
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext} >{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default ProgressBar;
