import React from 'react'
import {DreamList} from './dreamlist'



export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dreams: []
        };
    }
    // getDreams(){
    //         request.get({
    //             url: 'http://localhost:3000/test.json'
    //         }, function (error, response, body) {
    //             var data = JSON.parse(body);
    //             self.setState({'dreams': data});
    //         });
    // }

    // getDreams() {
    //     return fetch('http://localhost:3000/test.json')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         console.log(responseJson)
    //         this.setState({
    //             dreams: responseJson
    //         });
    //         return responseJson.dreams;
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    //   componentDidMount() {
    //     this.getDreams();
    //   }

    getDreams() {
        fetch("http://localhost:3000/test.json")
          .then(response => response.json())
          .then(json => {
            console.log(json);
            this.setState({
              dreams: json
            });
        });
      }

      componentDidMount() {
        this.getDreams();
      }

    render() {
        return (
        <div>
            <h1>Home</h1>
            <DreamList dreams={this.state.dreams}/>
        </div>
        )
      }
}