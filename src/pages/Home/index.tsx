import { LoginBox } from "../../components/LoginBox";
import { MessageList } from "../../components/MessageList";
import { ContentWrapper } from "./styles";

export const Home = () => {
  return (
    <ContentWrapper>
      <MessageList />
      <LoginBox />
    </ContentWrapper>
  );
};
