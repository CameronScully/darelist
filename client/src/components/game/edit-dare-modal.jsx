//react libraries
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//redux
import { connect } from 'react-redux'
import { editDare } from '../../actions/dareActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class EditDareModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            dare: this.props.dare
        }
    }

    render(){
        return(
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.props.toggle(this.props.dare)}
            >
                <ModalHeader toggle={() => this.props.toggle(this.props.dare)}>
                    Edit dare
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="text">Dare text</Label>
                            <Input 
                                type="text"
                                name="text"
                                defaultValue={this.state.dare.text}
                            />
                            <input type="checkbox" data-toggle="toggle" data-on="SFW" data-off="NSFW" />
                            <Button
                                color="light"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Update
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

        );
    }

}

export default EditDareModal;