import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

let tilesData = [
	{
		img: "./app/files/placeholder1.jpg",
		title: "IU",
		author: "IU's mom",
		featured: true,
	},
	{
		img: "./app/files/placeholder2.gif",
		title: "IU",
		author: "IU's mom",
	},
	{
		img: "./app/files/placeholder3.gif",
		title: "IU",
		author: "IU's mom",
	},
	{
		img: "./app/files/placeholder4.jpg",
		title: "IU",
		author: "IU's mom",
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
			width:550,
			overflowY: 'auto',
			left: 0,
			right: 0,
			margin: 'auto',
			marginBottom: 75
		}
	},

	projectsContainer : {
		top: 400,
		width: '100%',
		position: 'absolute'
	},

	render : function(){
		return (
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
								titlePosition="top"
								subtitle={<span>by <b>{tile.author}</b></span>}
								titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
								cols={tile.featured ? 2 : 1}
								rows={tile.featured ? 2 : 1}>
								<img src={tile.img} />
							</GridTile>
						))}
					</GridList>
				</div>
			</div>
		);
	}
});

export default Projects;
