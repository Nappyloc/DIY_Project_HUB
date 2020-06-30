import React from "react";
// import { FaBeer } from 'react-icons/fa';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem
} from "mdbreact";



class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
          <div>
            <MDBNavbar dark expand="lg" fixed="top">
              <MDBContainer>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                     <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Dropdown
        </MDBDropdownToggle>
        <MDBDropdownMenu  basic >
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
               <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                        <MDBNavItem>
                           <MDBNavLink to="/profile">Profile</MDBNavLink>
                       </MDBNavItem>
                  </MDBNavbarNav>
                      <MDBNavbarNav right>
                    <MDBNavItem active>
                      <MDBNavLink to="/login">Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="/signup"> SignUp</MDBNavLink> 
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
           
            {this.state.collapseID && overlay}
          </div>
        
       
      </div>
    );
  }
}

export default ClassicFormPage;