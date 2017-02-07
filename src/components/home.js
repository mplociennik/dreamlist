import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {DreamList} from './dreamlist'


export class Home extends React.Component{
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
            <Grid>
                <Row>
                    <Col md={4}>
                        <h1>Home</h1>
                        <DreamList dreams={this.state.dreams}/>
                    </Col>
                </Row>
            </Grid>
            )
    }
}