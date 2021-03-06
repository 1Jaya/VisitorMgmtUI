import React, {Component} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import EmployeeCheckIn from '../components/EmployeeCheckIn';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            imageSrc: '',
        };

        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf(' electron/') > -1) {
            // Electron-specific code
            console.log("I am running inside electron")
        } else {
            console.log("I am running in a web browser")
        }
    }

    handleEmployeeClick = () => {
        this.setState({modalOpen: true});
    };

    closeModal = () => this.setState({modalOpen: false});

    getEmployeeImage = (imageSrc) => {
        this.setState({imageSrc: imageSrc});
        console.log(imageSrc)
    };

    render() {
        return (
        		<div style={{backgroundImage: 'url("images/b2.jpg")', backgroundRepeat:'no-repeat',backgroundSize:'cover',paddingTop:'10%'}}>
                <Header />
                <Grid columns={2} centered style={{height: '90vh'}}>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={9} style={{ marginTop: '-15%', paddingLeft: '10%'}}>
                            <h1 className='h1'>Welcome to VisitorManagement System</h1>
                        </Grid.Column>
                        <Grid.Column width={6}
                                     style={{paddingTop: '5%',marginTop: '-10%'}}>
                            <Link to="/approvedVisitor">
                                <Button content='Pre-approved Visitor' size='huge' primary className='visitor-btn'
                                        style={{marginBottom: '25%', marginLeft: '15%',padding:'10%'}}/>
                            </Link>
                            <br/>
                            <Link to="/freshVisitor">
                                <Button content='Fresh Visitor' size='huge' positive className='visitor-btn'
                                        style={{marginBottom: '25%', marginLeft: '15%',padding:'10%'}}/>
                            </Link>
                            <br/>
                            <Button content='Employee' size='huge' negative className='visitor-btn'
                                    style={{marginBottom: '25%', marginLeft: '15%',padding:'10%'}}
                                    onClick={this.handleEmployeeClick}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <EmployeeCheckIn modalOpen={this.state.modalOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}

export default Home;
