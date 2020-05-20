import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Logon, Background } from './styles';

import Input from '../../components/form/input';
import Button from '../../components/form/button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Logon>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu Cadastro</h1>
        <Input name="name" placeholder="Nome" icon={FiUser} />
        <Input name="email" placeholder="Email" icon={FiMail} />
        <Input name="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">
        <FiArrowLeft />
        Já tenho uma conta!
      </Link>
    </Logon>
  </Container>
);

export default SignUp;
