import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import { Container, Logon, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/form/input';
import Button from '../../components/form/button';

import logo from '../../assets/logo.svg';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Formato de email inválido'),
          password: Yup.string().min(6, 'Deve conter no mínimo 6 digitos'),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('/users', data);
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode utilizar o GoBarber',
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Error',
          type: err.response.data.status,
          description: err.response.data.message,
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Background />
      <Logon>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="Email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit" onSubmit={handleSubmit}>
            Cadastrar
          </Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta!
        </Link>
      </Logon>
    </Container>
  );
};

export default SignUp;
