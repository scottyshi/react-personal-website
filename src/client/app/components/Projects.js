import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles ={
	root: {
		top: 400,
		width: '100%',
		position:'absolute',
		margin: 'auto',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width:700,
		height: 500,
		overflowY: 'auto',
		marginButtom: 24
	}
};

const tilesData = [
	{
		img: "./app/files/placeholder.jpg",
		title: "IU",
		author: "IU's mom",
	},
	{
		img: "./app/files/placeholder.jpg",
		title: "IU",
		author: "IU's mom",
	}, 
	{
		img: "./app/files/placeholder.jpg",
		title: "IU",
		author: "IU's mom",
	}, 
	{
		img: "./app/files/placeholder.jpg",
		title: "IU",
		author: "IU's mom",
	}, 
];

let Projects = React.createClass({displayName:'Projects',
	childContextTypes:{
		muiTheme: React.PropTypes.object.isRequired,
	},
	getChildContext(){
		return {muiTheme: getMuiTheme()};
	},
	render: function(){
		let GridListProjects = () => (
			<div style={styles.root}>
				<GridList cellHeight={200} style={styles.gridList}>
					<Subheader>Projects</Subheader>
					{tilesData.map((tile) => (
						<GridTile key={tile.img} title={tile.title} subtitle={<span>by <b>{tile.author}</b></span>}>
							<img src={tile.img}/>
						</GridTile>
					))}
				</GridList>
			</div>
		);
		return (
			<div>{GridListProjects}</div>
		);
	}
});

export default Projects;
