import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {DreamList} from './dreamlist'


export class Home extends React.Component{


    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <h1>Home</h1>
                        <DreamList/>
                    </Col>
                </Row>
            </Grid>
            )
    }
}