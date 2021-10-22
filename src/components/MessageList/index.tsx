import {
  MessageListWrapper,
  UserImage,
  MessageListContainer,
  Message,
  MessageUser,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { AxiosResponse } from "axios";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Message[], any> = await api.get(
        "messages/last3"
      );
      setMessages(response.data);
    })();
  }, []);

  return (
    <MessageListWrapper>
      <img src={logoImg} alt="doWhile 2012" />

      <MessageListContainer>
        {messages.map((message) => (
          <Message key={message.id}>
            <div>
              <p>{message.text}</p>
              <MessageUser>
                <UserImage>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </UserImage>
                <span>{message.user.name}</span>
              </MessageUser>
            </div>
          </Message>
        ))}
      </MessageListContainer>
    </MessageListWrapper>
  );
};
