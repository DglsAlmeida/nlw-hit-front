import { LoginBoxLink, LoginBoxTitle, LoginBoxWrapper } from "./styles";
import { VscGithubInverted, VscMultipleWindows } from "react-icons/vsc";
import { useEffect } from "react";
import api from "../../service/api";

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  };
};

export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=f13610a0690c88e44903`;

  const signIn = async (githubCode: string) => {
    const response = await api.post<AuthResponse>("authenticate", {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem("@NlwHeat:token", token);

    console.log(user);
  };

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=");
      window.history.pushState({}, "", urlWithoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <LoginBoxWrapper>
      <LoginBoxTitle>Entre e compartilhe sua mensagem</LoginBoxTitle>
      <LoginBoxLink href={signInUrl}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </LoginBoxLink>
    </LoginBoxWrapper>
  );
};
