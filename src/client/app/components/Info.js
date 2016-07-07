import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Attachment from 'material-ui/svg-icons/file/attachment';
import Code from 'material-ui/svg-icons/action/code';
import Work from 'material-ui/svg-icons/action/work';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

var Info = React.createClass({displayName: 'Info',
	childContextTypes:{
		muiTheme: React.PropTypes.object.isRequired,
	},
	getChildContext(){
		return {muiTheme: getMuiTheme()};
	},

	paperStyle:{
		backgroundColor: '#CCCC99',
		height: '270px',
		width: '400px',
		margin: 'auto',
		left: 0,
		right: 0,
		top: '75px',
		position: 'absolute'
	},
	regionStyle:{
		height: '225px',
		width: '250px',
		margin: 'auto',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		textAlign: 'center'
	},
	nameStyle:{
		marginTop: '25px',
		marginBottom: '0px',
		fontSize: '30px'
	},
	portraitStyle:{
		height: '125px',
		width: '125px',
		margin: 'auto',
		left: 0,
		right: 0,
		top: '65px',
		position: 'absolute',
		overflow: 'hidden'
	},
	imageStyle:{
		height: '100%',
		width: 'auto',
	},
	buttondivStyle:{
		width: '250px',
		height: '50px',
		margin: 'auto',
		left: 0,
		right: 0,
		top: '200px',
		position: 'absolute',
	},
	iconbuttonStyle:{
		left: '5px',
		right: '5px',
		position: 'relative'
	},

	render: function(){
		return(
			<Paper style={this.paperStyle} zDepth={3} >
				<div style={this.regionStyle}>
					<h1 style={this.nameStyle}> Scott Shi </h1>
					<Paper circle={true} style={this.portraitStyle} zDepth={3} >
						<img style={this.imageStyle} src="./app/files/placeholder.jpg"/>
					</Paper>
					<div style={this.buttondivStyle}>
						<a href="https://github.com/scottyshi" target="_blank">
							<IconButton tooltip="Github" style={this.iconbuttonStyle}>
								<Code />
							</IconButton>
						</a>		
			
						<a href="https://www.facebook.com/scottyshi" target="_blank">
							<IconButton tooltip="Facebook" style={this.iconbuttonStyle}>
								<PermIdentity />
							</IconButton>
						</a>	
	
						<a href="./app/files/Resume.pdf" target="_blank">
							<IconButton tooltip="Resume" style={this.iconbuttonStyle}>
								<Attachment />
							</IconButton>
						</a>
					
						<a href="https://www.linkedin.com/in/scottyshi" target="_blank">
							<IconButton tooltip="Linkedin" style={this.iconbuttonStyle}>
								<Work />
							</IconButton>
						</a>		
					</div>
				</div>
			</Paper>
		);
	}
});

export default Info;
