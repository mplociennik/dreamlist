import React from 'react'

class DreamListItem extends React.Component{
    render(){
        return (
            <div className="dream-list-item">
                <h3>#{this.props.id} {this.props.name}</h3>
                <img className="img-responsive" src={this.props.img} alt={this.props.name}/>
            </div>
            )
    }
}

export class DreamList extends React.Component{

    render(){
        var listItems = [];
        this.props.dreams.forEach(function(item, key){
            listItems.push(<DreamListItem key={key} id={item.id} name={item.name} img={item.img}/>);
        }
        );
        return(
            <div>{listItems}</div>
            )
    }
}