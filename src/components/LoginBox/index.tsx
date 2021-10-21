import { LoginBoxLink, LoginBoxTitle, LoginBoxWrapper } from "./styles";
import { VscGithubInverted } from "react-icons/vsc";

export const LoginBox = () => {
  return (
    <LoginBoxWrapper>
      <LoginBoxTitle>Entre e compartilhe sua mensagem</LoginBoxTitle>
      <LoginBoxLink href="#">
        <VscGithubInverted size={24} />
        Entrar com Github
      </LoginBoxLink>
    </LoginBoxWrapper>
  );
};
