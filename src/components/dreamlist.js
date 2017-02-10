import React from 'react'
//import InfiniteScroll from 'react-infinite-scroller'

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
    constructor(props){
        super(props);
        this.state = {
            dreams: []
        };
    }

    getDreams() {
        fetch("http://localhost:3000/test.json")
        .then(response => response.json())
        .then(json => {
            this.setState({
              dreams: json
          });
        });
    }

    componentDidMount() {
        this.getDreams();
    }

    render(){
        const dreams = this.state.dreams;
        const listItems = dreams.map((item, key) =>
            <DreamListItem key={key} id={item.id} name={item.name} img={item.img}/>
        );
        return(
            <div>{listItems}</div>
            )
    }
}