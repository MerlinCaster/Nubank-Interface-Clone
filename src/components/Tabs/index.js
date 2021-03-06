import React from 'react';

import {Container, TabsContainer, TabItem, TabText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (props) => {
    return(
        <Container style={{
            transform:[{
                translateY: props.translateY.interpolate({
                    inputRange:[0, 380],
                    outputRange: [0, 30],
                    extrapolate:'clamp'
                })
            }],
            opacity: props.translateY.interpolate({
                inputRange:[0, 380],
                outputRange: [1, 0.1],
                extrapolate: 'clamp'
            })
        }} >
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" /> 
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" /> 
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" /> 
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" /> 
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" /> 
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}