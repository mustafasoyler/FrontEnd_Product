import React, { useState, useEffect } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary.jsx'
import { Container } from 'semantic-ui-react';
import SignedOut from './SignedOut.jsx';
import SignedIn from './SignedIn.jsx';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Navi() {

  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history=useHistory()
  
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")

    
  }
  function handleSignIn() {
    setIsAuthenticated(true)
    
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary />}

            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut signIn={handleSignIn} />}

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}