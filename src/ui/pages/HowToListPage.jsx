import React from 'react';
import { Columns, Column } from '../layout/Columns';
import { Container } from '../layout/Container';
import { Message, MessageHeader, MessageBody } from '../components/Message';
import { Hero, HeroBody } from '../layout/Hero';
import { Card, CardContent, CardFooter, CardFooterItem } from '../components/Card';
import GridInformation from '../components/GridInformation';

const state = {
  peopleInformation: {
    containerClass: 'people-information-container',
    navbarClass: 'people-information-navbar',
    title: 'Información de personas',
    navItems: ['Desaparecidas', 'Rescatadas'],
    columns: [{
      key: 'id',
      name: 'ID',
      width: 215,
      filterable: true
    }, {
      key: 'name',
      name: 'Name',
      width: 400,
      filterable: true
    }],
    rows: [{
        id: 0,
        name: 'Chuck Norris',        
      }]
  },
};

class HowToListPage extends React.Component {  
  render() {
    return (
      <div>
        <br />
        <Hero isPrimary>
          <HeroBody>
            <Container>
              <h1 className="title">
                Primary title
              </h1>
              <h2 className="subtitle">
                Primary subtitle
              </h2>
            </Container>
          </HeroBody>
        </Hero>
        <br />
        <Container>
          <Columns>
            <Column>
              <Message>
                <MessageHeader>
                  <p>Hello World</p>
                </MessageHeader>
                <MessageBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
              </Message>
            </Column>
            <Column>
              <Card>
                <CardContent>
                  <p className="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle">
                    Jeff Atwood
                  </p>
                </CardContent>
                <CardFooter>
                  <CardFooterItem>
                    <span>
                      View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                    </span>
                  </CardFooterItem>
                </CardFooter>
              </Card>
            </Column>
          </Columns>
        </Container>
        <br />
        <GridInformation {...state.peopleInformation} />
      </div>
    );
  }
}

export default HowToListPage;
