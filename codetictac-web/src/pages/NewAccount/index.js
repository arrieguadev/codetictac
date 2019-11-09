import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Form, Title, Label, Input, Button } from "./styles";
import { toast } from "react-toastify";

import api from "../../services/api";

export default function NewAccount() {
  let { state } = useLocation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  useEffect(() => {
    const { token, name, email } = state;
    setEmail(email);
    setName(name);
    setToken(token);
  }, []);

  async function handleFinish(event) {
    event.preventDefault();
    if (!name || !email || !password || !confirmationPassword) {
      toast.error("Os campos com * devem ser preenchidos!");
    }
    if (password !== confirmationPassword) {
      toast.error("As senhas não correspondem!");
    }

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
        organization,
        wakatime_token: token
      });
      toast.success(`Usuário salvo com sucesso: ${response.data.user._id}`);
    } catch (err) {
      toast.error(`Ocorreu um erro ao cadastrar: ${err.response.data.error}`);
    }
  }

  return (
    <Container>
      <Title>Nova Conta</Title>
      <Form>
        <Label>Nome*</Label>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Label>E-mail*</Label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label>Organização</Label>
        <Input
          type="text"
          value={organization}
          onChange={e => setOrganization(e.target.value)}
        />
        <Label>Senha*</Label>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Label>Confirmação de senha*</Label>
        <Input
          type="password"
          value={confirmationPassword}
          onChange={e => setConfirmationPassword(e.target.value)}
        />
        <Button onClick={handleFinish}>Finalizar</Button>
      </Form>
    </Container>
  );
}
