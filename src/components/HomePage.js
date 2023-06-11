// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div>


//       <h1>Bienvenido a la página principal</h1>
//       <Link to="/login">Ir a la página de inicio de sesión</Link> <br></br>
//       <Link to="/inventory">Ir a la página de inicio de inventario</Link><br></br>
//       <Link to="/add-product">Ir a la página de inicio de productos</Link><br></br>
//       <Link to="/sales">Ir a la página de inicio de ventas</Link><br></br>
//       <Link to="/user">Ir a la página de inicio de usuarios</Link>
//     </div>
//   );
// };

import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.primaryWhite};
`;

const LogoImage = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primaryLight};
  border-radius: 12px;
  padding: 24px;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 32px;
  color: ${colors.primaryWhite};
`;


const Input = styled.input`
  padding: 8px 30px;
  margin-bottom: 32px;
  border-radius: 8px;
  border: none;
  background-color: #f4f4f4;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${colors.secondaryDark};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para autenticar al usuario
    console.log('Iniciar sesión:', username, password);
    // Limpia los campos de usuario y contraseña después de iniciar sesión
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <LogoImage src={logo} alt="Logo" />
      
      <Form onSubmit={handleSubmit}>
        <Title>Hola, bienvenid@</Title>

        <Input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Usuario"
        />

        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Contraseña"
        />

        <ButtonContainer>
          <Button type="submit">Iniciar sesión</Button>
        </ButtonContainer>
      </Form>
      <Link to="/inventory">Ir a la página de inicio de inventario</Link><br></br>
    </Container>
  );
};

export default HomePage;