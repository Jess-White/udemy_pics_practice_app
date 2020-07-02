import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Jumbotron style={{ backgroundColor: "#00004d", color: "#e8ffa1", bottom: 0,}}>
          <Container>
          <div class="text-center">

            <div class="glow">
              <h1 style={{fontSize: "500%", fontWeight: "bold", letterSpacing: "5px", 
              color: "#abffff", fontFamily: "Impact"}} >There Can Be Only One</h1>
            </div>
          </div>

          </Container>
        </Jumbotron>
      </footer>
    </div>
    );
}

export default Footer;