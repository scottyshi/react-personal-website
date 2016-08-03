import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Paper from 'material-ui/Paper';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

let tilesData = [
	{
		img: "./app/files/endpoints.png",
		title: "Taxicab Trip Reduction",
		author: "Used statistical methods of prediction to reduce distance travelled in between taxi trips",
		src: "https://github.com/scottyshi/taxicab", 
		featured: true,
	},
	{
		img: "./app/files/WHI.png",
		title: "WHI Voice Recognition Research",
		author: "Measuring similarity of speech utterances",
		src: "https://github.com/scottyshi/WHI-Voice-Recognition-Research",
	},
	{
		img: "./app/files/FPGAschematic.png",
		title: "FPGA Digit Recognition",
		author: "Logistic regression on a FPGA",
		src: "https://github.com/scottyshi/FPGA_char_reg",
		
	},
	{
		img: "./app/files/mnk.gif",
		title: "M,N,K Game AI",
		author: "Modifiable difficulty AI for the M-N-K game (see link in 'Usage' from Github link '< >')",
		src: "https://github.com/scottyshi/tic-tac-toe-ai",
		featured: true,
	},
];

var Projects = React.createClass({displayName:'Projects',
	childContextTypes:{
		muiTheme: React.PropTypes.object.isRequired,
	},
	getChildContext(){
		return {muiTheme: getMuiTheme()};
	},
	
	styles :{
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
		},
		gridList: {
			width: 650,
			overflowY: 'auto',
			left: 0,
			right: 0,
			margin: 'auto',
			marginBottom: 75
		}
	},

	projectsContainer : {
		top: 0,
		width: '100%',
		position: 'absolute'
	},

	paperStyle:{
		top: 400,
		width: '100%',
		margin: 'auto',
		left: 0,
		right: 0,
		position: 'absolute',
	},

	render : function(){
		return (
			<Paper style={this.paperStyle} zDepth={10}>
			<div style={this.projectsContainer}>
				<div style={this.styles.root}>
					<GridList
						cols={2}
						cellHeight={200}
						padding={1}
						style={this.styles.gridList}>
						{tilesData.map((tile) => (
							<GridTile
								key={tile.img}
								title={tile.title}
								actionIcon={<IconButton tooltip="Code" linkButton={true} href={tile.src}><Code color="white" /></IconButton>}
								actionPosition="left"
								titlePosition="top"
								subtitle={<b>{tile.author}</b>}
								titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
								cols={tile.featured ? 2 : 1}
								rows={tile.featured ? 2 : 1}>
								<img src={tile.img} />
							</GridTile>
						))}
					</GridList>
				</div>
			</div>
			</Paper>
		);
	}
});

export default Projects;
