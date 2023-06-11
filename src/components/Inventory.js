import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';
import UserDropdown from './drop';

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

const TableContainer = styled.div`
  margin-top: 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: ${colors.primaryLight};
  color: ${colors.primaryWhite};
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  padding: 16px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${colors.primaryLight};
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
const AddProductLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1250px;
  text-decoration: none;
  color: ${colors.secondaryDark};
  line-height: 65px;
`;

const InventoryTable = () => {
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
      
          
          <a href="/user"><UserImage src={user} alt="Logo"  /></a>
          
          <div>
            <NavbarTitle>Menú</NavbarTitle>
            <NavbarLink ></NavbarLink>
            <NavbarLinkText>Inventario</NavbarLinkText>
          </div>
        </Navbar>

        <TableContainer>
          <h1>Tabla inventario</h1>
          <AddProductLink href="/add-product">Añadir producto +</AddProductLink>
          <AddProductLink href="/sales">Calcular venta</AddProductLink>
          
          <Table>
            
            <TableHead>
              <TableHeadRow>
                <TableHeadCell>Código</TableHeadCell>
                <TableHeadCell>Nombre</TableHeadCell>
                <TableHeadCell>Cantidad</TableHeadCell>
                <TableHeadCell>Valor Unidad</TableHeadCell>
              </TableHeadRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>001</TableCell>
                <TableCell>Producto 1</TableCell>
                <TableCell>10</TableCell>
                <TableCell>$10.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>002</TableCell>
                <TableCell>Producto 2</TableCell>
                <TableCell>15</TableCell>
                <TableCell>$8.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>003</TableCell>
                <TableCell>Producto 3</TableCell>
                <TableCell>20</TableCell>
                <TableCell>$12.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>004</TableCell>
                <TableCell>Producto 4</TableCell>
                <TableCell>5</TableCell>
                <TableCell>$15.75</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>005</TableCell>
                <TableCell>Producto 5</TableCell>
                <TableCell>12</TableCell>
                <TableCell>$9.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
        </TableContainer>
        
      </MainContent>
    </Container>
  );
};

export default InventoryTable;