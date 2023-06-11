import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${colors.primaryWhite};
`;



const Sidebar = styled.div`
  width: 480px;
  background: #D9D9D9;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 16px;
`;
const LogoImage = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 1570px;
  top: 0px;
`;

const UserImage = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 1783px;
  top: 45px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #AA4C04;


`;


const FormContainer = styled.div`
  margin-top: 32px;
`;

const Form = styled.form`
    position: absolute;
    width: 1250px;
    height: 500px;
    left: 571px;
    top: 233px;
    background: #D9D9D9;
    border-radius: 20px 20px 20px 20px;
    align-items:center;
  
`;

const FormTitle = styled.h3`
  margin-bottom: 16px;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 19px;
  color: #ffffff;
`;

const Input = styled.input`
  padding: 3px;
  width: 98%;
  letf: 10px;
`;


const Navbar = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background: #D9D9D9;
  color: ${colors.primaryWhite};
  padding: 0 16px;
`;

const NavbarTitle = styled.h2`
  position: absolute;
  width: 113px;
  height: 52px;
  left: 20px;
  top: 5px;

  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 65px;

  color: #000000;
`;

const NavbarLink = styled.a`
  position: absolute;
  width: 480px;
  height: 100px;
  left: 0px;
  top: 150px;
  background: #AA4C04;
  
`;

const NavbarLinkText = styled.a`
  position: absolute;
  width: 226px;
  height: 52px;
  left: 120px;
  top: 174px;

  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 65px;

  color: #FFFFFF;

`;

const SidebarItem = styled.div`
  margin-bottom: 16px;
  cursor: pointer;
`;



const UserPage = () => {
    return (
        <Container>
            <Sidebar>
                <SidebarItem>{/* Opción del menú lateral */}</SidebarItem>
                <SidebarItem>{/* Opción del menú lateral */}</SidebarItem>
                <SidebarItem>{/* Opción del menú lateral */}</SidebarItem>
            </Sidebar>

            <MainContent>
                <Navbar>
                    <LogoImage src={logo} alt="Logo" />
                    <UserImage src={user} alt="Logo" />
                    <div>
                        <NavbarTitle>Menú</NavbarTitle>
                        <NavbarLink ></NavbarLink>
                        <NavbarLinkText href="/inventory">Inventario</NavbarLinkText>
                    </div>
                </Navbar>

                <FormContainer>
                <h1>Información de Usuario</h1>
                    <Form>
                        
                    <FormTitle></FormTitle>
                        <FormField>
                            <Label htmlFor="tipoDocumento">Tipo de Documento</Label>
                            <Input type="text" id="tipoDocumento" value="DNI" disabled />
                        </FormField>

                        <FormField>
                            <Label htmlFor="nroDocumento">Nro. de Documento</Label>
                            <Input type="text" id="nroDocumento" value="12345678" disabled />
                        </FormField>

                        <FormField>
                            <Label htmlFor="nombres">Nombres</Label>
                            <Input type="text" id="nombres" value="John" disabled />
                        </FormField>

                        <FormField>
                            <Label htmlFor="apellidos">Apellidos</Label>
                            <Input type="text" id="apellidos" value="Doe" disabled />
                        </FormField>

                        <FormField>
                            <Label htmlFor="correo">Correo Electrónico</Label>
                            <Input type="email" id="correo" value="johndoe@example.com" disabled />
                        </FormField>

                        <FormField>
                            <Label htmlFor="telefono">Teléfono</Label>
                            <Input type="tel" id="telefono" value="123456789" disabled />
                        </FormField>
                    </Form>


                </FormContainer>
            </MainContent>
        </Container>
    );
};

export default UserPage;