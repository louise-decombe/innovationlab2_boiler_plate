import React from 'react';
import styled from 'styled-components';


const MessagesContainer = styled.div`
    display: flex;
    padding: 0 5%;
    margin-top: 3px;
    justify-content: ${props => props.textPosition === "end" ? 'flex-end' : 'flex-start'};
`;

const MessageBox = styled.div`
    background: #F3F3F3;
    border-radius: 20px;
    padding: 15px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
    background: ${(props) => props.background === "blue" ? '#2979FF' : '#F3F3F3'};
`;

const MessageText = styled.p`
    font-size: 1.1em;
    word-wrap: break-word;
    color: ${(props) => props.color === "white" ? "#fff" : "#353535"};
    margin: 0;
`;

const SentBy = styled.p`
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
    padding: ${(props) => props.right ? '0 10px 0 0' : '0 0 0 10px'};
    margin: 0;
`;

function Message(props) {
    const { username, message: { user, text } } = props;
    let sentByCurrentUser = false;

    const trimmedName = username.trim().toLowerCase()

    if (user === trimmedName) {
        sentByCurrentUser = true
    }
    const background = sentByCurrentUser ? "blue" : "dark";
    const textPosition = sentByCurrentUser ? "end" : "start";
    const textColor = sentByCurrentUser ? "white" : "dark";
    const sentBy = sentByCurrentUser ? "right" : "left";
    return (
        <MessagesContainer textPosition={textPosition}>
            <MessageBox background={background}>
                <MessageText color={textColor}>{text}</MessageText>
            </MessageBox>
            <SentBy sentBy={sentBy}>{user}</SentBy>
        </MessagesContainer>
    )
}

export default Message;