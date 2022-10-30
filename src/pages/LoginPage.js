import { Group } from "@mantine/core";
import { TwitterButton } from "../components/TwitterButton/TwitterButton";
import { GithubButton } from "../components/GithubButton/GithubButton";
import { DiscordButton } from "../components/DiscordButton/DiscordButton";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="allBody">
      <div className="centered">
        <div className="stacked">
          <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
            Follow on Twitter
          </TwitterButton>
          <GithubButton>Login with GitHub</GithubButton>
          <DiscordButton>Join Discord community</DiscordButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
