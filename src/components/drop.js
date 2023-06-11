import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 150px;
  background: #D9D9D9;
  padding: 0 16px;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 16px;
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background-color: #FFF;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #F5F5F5;
  }
`;

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Aquí puedes implementar la lógica para cerrar la sesión del usuario
    // Por ejemplo, puedes limpiar el token de autenticación o eliminar los datos de sesión almacenados en el estado o en una cookie
    // Luego, redirige al usuario a la pantalla de inicio de sesión
    // Puedes ajustar la ruta según la estructura de tu aplicación
    history.push('/login');
  };

  const handleProfile = () => {
    // Aquí puedes implementar la lógica para redirigir a la página de perfil del usuario
    // Por ejemplo, redirige al usuario a la página de perfil utilizando el historial de navegación
    // Puedes ajustar la ruta según la estructura de tu aplicación
    history.push('/profile');
  };

  return (
    <Container>
      <LogoImage src={logo} alt="Logo" />
      <UserImage src={user} alt="User" onClick={toggleDropdown} />

      <Dropdown isOpen={isOpen}>
        <DropdownItem onClick={handleProfile}>Ver Perfil</DropdownItem>
        <DropdownItem onClick={handleLogout}>Cerrar Sesión</DropdownItem>
      </Dropdown>
    </Container>
  );
};

export default UserDropdown;