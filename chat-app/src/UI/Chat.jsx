import React from 'react'
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; 
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Chat = () => {
  return (
    <ChatContainer>
      <h1>This is a chat app</h1>
    </ChatContainer>
  )
}

export default Chat
