import React from 'react'

class DreamListLi extends React.Component{
    render(){
        return (
            <li>ID: {this.props.id}, name: {this.props.name}</li>
            )
    }
}

export class DreamList extends React.Component{
    constructor(){
        super();
        this.state = {
            numbers: []
        }
    }

    handleClick(){
        console.log(this)
    }


    render(){
        var listItems = [];
        this.props.dreams.forEach(function(item, key){
                listItems.push(<DreamListLi key={key} id={item.id} name={item.name}/>);
            }
        );
        return(
            <ul>{listItems}</ul>
            )
    }
}