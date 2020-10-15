import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import img1 from "./assets/img3prof.png";
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '50px',
        background: '#F0F0F0',
    },

    media: {
        height: 170,
        width: 170,
        margin: '25px',
    },
    first: {
        maxWidth: '450px',
        margin: '50px',
       

    },
   
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={img1}
                title="image"
               
            />
        
            <Form className={classes.first}>
                <FormGroup>
                    <Label for="exampleEmail">Subject:</Label>
                    <Input type="email" name="Subject" id="subjectText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Message:</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
            </Form>
            
            
        </Card>



    );
}
