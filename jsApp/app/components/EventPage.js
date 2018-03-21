/* @flow */
import React, { Component } from 'react';
import { Card, CardItem, Container, Content, Text, Body, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Markdown from 'react-native-simple-markdown'
import Event from '../type/Event'

type Props = {
  item: Array<Event>
};

export default class EventPage extends Component<Props, {}> {
  render(): {} {
    return (
      <Container>
        <Content>
          {this.props.item.map((n: Event): Event =>
            <Card key={n.id}>
              <CardItem header>
                <Left>
                  <Text>{n.date}</Text>
                </Left>
                <Body>
                  <Text>{n.title}</Text>
                </Body>
                <Right />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {n.body}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          )}
        </Content>
      </Container>
    );
  }
}
