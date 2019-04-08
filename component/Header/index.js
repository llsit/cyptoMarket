import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#4EA4CD' }}>
                <Body style={{ alignItems: 'center' }}>
                    <Title >Cryptocurrency Market</Title>
                </Body>
            </Header >
        );
    }
}