import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Login, Background } from './styles';

import Input from '../../components/form/input';
import Button from '../../components/form/button';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Login>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu Login</h1>
        <Input name="email" placeholder="Email" icon={FiMail} />
        <Input name="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Entrar</Button>
        <a href="esqueci">Esqueci minha senha!</a>
      </form>
      <Link to="/register">
        <FiLogIn />
        Cadastrar
      </Link>
    </Login>
    <Background />
  </Container>
);

export default SignIn;
