/* eslint-disable */
import React from 'react'

import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = (props) => {
	return (
		<Scrollbars
			renderThumbVertical={({style, ...props }) =>
				<div {...props} style={{ ...style}, cssThumb}>
				</div>
			}

			renderTrackVertical={({style, ...props}) =>
				<div {...props} style={cssTrack}>
				</div>
			}
		>
			{props.children}
		</Scrollbars>
	)
}

export default CustomScrollbar

const cssThumb = {
	backgroundColor: "white",
	borderRadius: "3px"
}

const cssTrack = {
	backgroundColor: "transparent",
	position: "static",
	height: "100vh",
	width: "0.55vw",
	float: "right",
	margin: "15px 0"
}
