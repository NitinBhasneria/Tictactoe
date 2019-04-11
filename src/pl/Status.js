import React, { Component } from 'react';
import Player from './chooseplayer';

class Status extends Component{
	handleSetPlayer(e){
		this.props.setPlayer(e)
	}
	renderWinner(){
        if(this.props.winner){
        	return <h2>Winner is {this.props.winner}</h2>
        
	}  else {
		return this.props.player ? 
     <h2>Next Player is {this.props.player}</h2>:
     <Player player={(e)=>this.handleSetPlayer(e)}/>  
			}
	}
	render(){

		return(<span>{this.renderWinner()}</span>
			)
		}
	}

export default Status;