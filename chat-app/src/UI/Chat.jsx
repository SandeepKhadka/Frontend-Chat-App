import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #4a90e2;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background-color: white;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 10px;
  max-width: 60%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background-color: ${({ isUser }) => (isUser ? '#d1e7ff' : '#ffffff')};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #357ab8;
  }
`;

const Chat = () => {
  return (
    <ChatContainer>
      <Header>This is a chat app made in react</Header>
      <MessagesContainer>
        <Message isUser={false}>Hello! How are you?</Message>
        <Message isUser={true}>I'm good, thanks! How about you?</Message>
        <Message isUser={false}>I'm great, thanks for asking!</Message>
      </MessagesContainer>
      <InputContainer>
        <Input type="text" placeholder="Type your message..." />
        <Button>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
