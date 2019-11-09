import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { FaCode } from "react-icons/fa";

import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Button,
  Link,
  Footer,
  Header
} from "./styles";

import { toast } from "react-toastify";

import api from "../../services/api";

export default function Login() {
  let history = useHistory();
  useEffect(() => {
    async function verifyToken() {
      const token = await localStorage.getItem("@codetictac/token");
      if (token) {
        history.push("home");
      }
    }

    verifyToken();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Os campos devem ser preenchidos!");
      return;
    }

    try {
      const response = await api.post("/login", {
        email,
        password
      });
      await localStorage.setItem("@codetictac/token", response.data.token);
      await localStorage.setItem(
        "@codetictac/user",
        JSON.stringify(response.data.user)
      );
      history.push("home");
    } catch (err) {
      toast.error(
        `Ocorreu um erro ao realizar login: ${err.response.data.error}`
      );
    }
  }
  return (
    <Container>
      <Title>CodeTicTac</Title>
      <Header>
        <FaCode size={30} />
      </Header>
      <Form>
        <Label>E-mail</Label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label>Senha</Label>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <Footer>
          <Link
            href={`${process.env.REACT_APP_WAKATIME_OAUTH_URL}/authorize?client_id=${process.env.REACT_APP_WAKATIME_CLIENT_ID}&client_secret=${process.env.REACT_APP_WAKATIME_APP_SECRET}&redirect_uri=${process.env.REACT_APP_WAKATIME_REDIRECT_URL}&response_type=code&scope=email,read_stats`}
          >
            Ainda não tem uma conta? Crie uma já!
          </Link>
        </Footer>
      </Form>
    </Container>
  );
}
