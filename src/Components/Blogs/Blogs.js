import React from 'react';
import { Card } from 'react-bootstrap';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-4 "><Card  className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header>Depression</Card.Header>
                    <Card.Body>
                        <Card.Title>Sadness</Card.Title>
                        <Card.Text>
                        Depression is a mood disorder characterised by lowering of mood, loss of interest and enjoyment, and reduced energy. It is not just feeling sad. There are different types and symptoms of depression. There are varying levels of severity and symptoms related to depression. Symptoms of depression can lead to increased risk of suicidal thoughts or behaviours.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4 "><Card  className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header >Anxiety disorder</Card.Header>
                    <Card.Body>
                        <Card.Title>Anxiety and Fear</Card.Title>
                        <Card.Text>
                        Anxiety disorders is a group of mental health disorders that includes generalised anxiety disorders, social phobias, specific phobias (for example, agoraphobia and claustrophobia), panic disorders, obsessive compulsive disorder (OCD) and post-traumatic stress disorder. Untreated, anxiety disorders can lead to significant impairment on people’s daily lives.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4 "><Card className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header>Bipolar disorder</Card.Header>
                    <Card.Body>
                        <Card.Title>extreme mood swing</Card.Title>
                        <Card.Text>
                        Bipolar affective disorder is a type of mood disorder, previously referred to as ‘manic depression’. A person with bipolar disorder experiences episodes of mania (elation) and depression. The person may or may not experience psychotic symptoms. The exact cause is unknown, but a genetic predisposition has been clearly established. Environmental stressors can also trigger episodes of this mental illness.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
            </div>

            <div className="row pt-5">
                <div className="col-md-4 "><Card  className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header >Obsessive compulsive disorder</Card.Header>
                    <Card.Body>
                        <Card.Title>Anxiety disorder</Card.Title>
                        <Card.Text>
                        Obsessive compulsive disorder (OCD) is an anxiety disorder. Obsessions are recurrent thoughts, images or impulses that are intrusive and unwanted. Compulsions are time-consuming and distressing repetitive rituals. Ttreatments include cognitive behaviour therapy (CBT), and medications
                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4 "><Card className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header>Post-traumatic stress disorder</Card.Header>
                    <Card.Body>
                        <Card.Title>Experienced any traumatic event</Card.Title>
                        <Card.Text>
                        Post-traumatic stress disorder (PTSD) is a mental health condition that can develop as a response to people who have experienced any traumatic event. This can be a car or other serious accident, physical or sexual assault, war-related events or torture, or natural disasters such as bushfires or floods.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4 "><Card  className="card-hight" border="success" style={{ width: '18rem' }}>
                    <Card.Header>Psychosis</Card.Header>
                    <Card.Body>
                        <Card.Title>Hallucinations</Card.Title>
                        <Card.Text>
                        People affected by psychosis can experience delusions, hallucinations and confused thinking.. Psychosis can occur in a number of mental illnesses, including drug-induced psychosis, schizophrenia and mood disorders. Medication and psychological support can relieve, or even eliminate, psychotic symptoms.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
            </div>
        </div>
    );
};

export default Blogs;