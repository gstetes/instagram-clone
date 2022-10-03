import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Container } from "./styles";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <Container>
      <AiOutlineSearch size={20} color="#888" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar"
      />
    </Container>
  );
};

export default SearchInput;
