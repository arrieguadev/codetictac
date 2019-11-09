import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { FaCode } from "react-icons/fa";
import api from "../../services/api";

import { Container, PulseDiv } from "./styles";

export default function Success() {
  let { search } = useLocation();
  let history = useHistory();
  useEffect(() => {
    const values = queryString.parse(search);
    const { code } = values;
    async function makePost() {
      const response = await api.post("/wakatime", { code });
      history.push("new-account", { ...response.data });
    }
    makePost();
  });
  return (
    <Container>
      <PulseDiv>
        <FaCode size={64} />
      </PulseDiv>
      <h1>Buscando dados de WakaTime!</h1>
    </Container>
  );
}
