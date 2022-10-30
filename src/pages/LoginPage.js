import { Group } from "@mantine/core";
import { TwitterButton } from "../components/TwitterButton/TwitterButton";
import { GithubButton } from "../components/GithubButton/GithubButton";
import { DiscordButton } from "../components/DiscordButton/DiscordButton";

const LoginPage = () => {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton>
      <GithubButton>Login with GitHub</GithubButton>
      <DiscordButton>Join Discord community</DiscordButton>
    </Group>
  );
};

export default LoginPage;
