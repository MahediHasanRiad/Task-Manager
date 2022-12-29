import React from 'react';
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import {Container, Row} from "react-bootstrap";
import { createTask } from '../../API/api';
import { error, isEmpty } from '../../Help/FormHelper';

const Create = () => {

    let {titleRef, descriptionRef} = useRef()
    const navigate = useNavigate()

    const createTaskBtn = () => {
        let title = titleRef.value;
        let description = descriptionRef.value

        if(isEmpty(title)){
            error('Title Required')
        }
        else if(isEmpty(description)){
            error('Description Required')
        }
        else{
            createTask(title, description).then(result => {
                if(result === true){
                    navigate('/new')
                }
            })
        }
    }

    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 >Create New</h4>
                            <br/>
                            <input ref={(input)=>titleRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(input)=>descriptionRef=input} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button onClick={createTaskBtn}  className="btn float-end btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default Create;