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
  background-color: ${colors.primaryLight};
  padding: 32px;
  width: 638px;
    height: 402px;
  
`;


const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 26px;
`;

const SubmitButton = styled.button`
  background-color: ${colors.secondaryDark};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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

const BackLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-decoration: none;
  color: ${colors.primaryWhite};
`;

