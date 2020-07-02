import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Jumbotron  style={{ backgroundColor: "#00004d", color: "#e8ffa1"}}>
        <Container >
          <div class="text-center glow-header">
              <h1 style={{ fontSize: "500%", fontWeight: "bold", marginBottom: 50, letterSpacing: "10px", color: "#ff5349", fontFamily: "Impact"}}>Top Doggo</h1>
          </div>
          <div class="text-center glow">
            <div>
              <h1 style={{fontSize: "400%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 90, color: "#abffff", fontFamily: "Impact"}} >Man's Best Friends</h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </header>
    )
}

export default Header;