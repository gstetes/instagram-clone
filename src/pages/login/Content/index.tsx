import React, { useState } from "react";

import {
  Container,
  Form,
  FormContainer,
  InputContainer,
  Separator,
  FacebookContainer,
  RegisterContainer,
  GetApplicationContainer,
} from "./styles";

import LoginImage from "../../../assets/login-image.png";
import Logo from "../../../assets/logo.png";
import Applications from "../../../assets/applications.png";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { AiFillFacebook } from "react-icons/ai";

interface DataProps {
  login: string;
  password: string;
}

const Content: React.FC = () => {
  const [data, setData] = useState<DataProps>({
    login: "",
    password: "",
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    window.location.href = "/home";
  };

  return (
    <Container>
      <img src={LoginImage} height="100%" />
      <FormContainer>
        <Form>
          <img src={Logo} height="40px" width="150px" />
          <InputContainer>
            <Input
              type="text"
              value={data["login"]}
              onChangeValue={(value) =>
                setData({
                  ...data,
                  login: value,
                })
              }
              placeholder="Número de telemóvel, nome de utilizador ou..."
            />
            <Input
              type="password"
              value={data["password"]}
              onChangeValue={(value) =>
                setData({
                  ...data,
                  password: value,
                })
              }
              placeholder="Palavra-passe"
            />
            <Button
              type="submit"
              label="Iniciar sessão"
              onClick={(e) => handleLogin(e)}
              disabled={
                data["login"]?.length < 1 || data["password"]?.length < 6
              }
            />
          </InputContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
              color: "#AAA",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <Separator />
            <span>OU</span>
            <Separator />
          </div>
          <FacebookContainer>
            <AiFillFacebook size={20} />
            <a>Iniciar sessão com o Facebook</a>
          </FacebookContainer>

          <a className="recovery">Esqueceste-te da palavra-passe?</a>
        </Form>
        <RegisterContainer>
          <span>
            Não tens uma conta?
            <a> Regista-te</a>
          </span>
        </RegisterContainer>
        <GetApplicationContainer>
          <span>Obtém a aplicação.</span>
          <img src={Applications} />
        </GetApplicationContainer>
      </FormContainer>
    </Container>
  );
};

export default Content;
