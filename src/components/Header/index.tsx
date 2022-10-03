import React, { useState } from "react";
import { Container } from "./styles";

import Logo from "../../assets/logo.png";
import SearchInput from "../SearchInput";
import Options from "./Options";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <img src={Logo} height="35px" style={{ marginLeft: "1rem" }} />
      <SearchInput
        value={search}
        onChange={(value: string) => setSearch(value)}
      />
      <Options />
    </Container>
  );
};

export default Header;
