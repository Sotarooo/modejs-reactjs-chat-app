import React from 'react';

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage=(props)=> {
  const chatProps = useMultiChatLogic(
    'bbb420ce-2b20-490d-8ee5-0a815e2745a2',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height: '100vh'}}>
      <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
      <MultiChatSocket {...chatProps} />
    </div>
  )
}
export  default ChatsPage