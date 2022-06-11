import React from "react";
import { Container, Text, Button, Progress, Grid, Spacer, Card, Row, Col } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../styles/Bucket.css';
import blueleather from '../images/blueleather.jpg';

function Game(props) {

  const testPassageFullBody = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";
  const testPassageTitle = "Preamble to the Constitution";

  const testWordList = [
    "Super Long Word", 
    "Word2", 
    "Word3", 
    "Word4", 
    "Word5", 
    "Word6", 
    "Word7", 
    "Word8", 
    "Word9", 
    "Word10", 
  ]

  return (
  <Container className="main-game-box">
    <h2>Title of the Passage</h2>
    
    <Container justify="center">

    <Card css={{ bg: "$black", w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {testPassageTitle}
          </Text>
          <Text h4 color="white">
            {testPassageFullBody}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={blueleather}
        width="100%"
        height={340}
        objectFit="cover"
        alt="Card image background"
      />
      <Card.Footer
        isBlurred="true"
        css={{
          bgBlur: "#0e1b2b",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Col>

          <Row>
            <Col>
              <h5 color="#000" size={12}>Select the correct word.</h5>
              <Row justify="space-around" id="word-list">
                <Grid.Container justify="space-between">
                  {testWordList.map(item => (

                    <Button flat auto ripple rounded color="secondary">
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                      >
                        {item}
                      </Text>
                    </Button>

                  ))}
                  

                </Grid.Container>
              </Row>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row><Progress color="secondary" value={30} /></Row>
          
          <Spacer y={1} />

          <Row><Progress color="success" value={70} /></Row>
          <Row>
            <Col>
              <Row justify="flex-end">
                <h5 color="#000" size={12}>Page #___ of ____</h5>
                <Button.Group ripple flat bordered color="success">
                  <Button auto rounded color="inherit">
                    <Text css={{ color: "inherit" }} size={12} weight="bold">
                      <FontAwesomeIcon icon={faArrowLeftLong} />
                    </Text>
                  </Button>
                  <Button auto rounded color="inherit">
                    <Text css={{ color: "inherit" }} size={12} weight="bold">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </Text>
                  </Button>
                </Button.Group>
              </Row>
            </Col>
          </Row>

        </Col>
      </Card.Footer>
    </Card>

    </Container>

  </Container>
  )
};

export default Game;