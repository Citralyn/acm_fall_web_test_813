import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import discordLogo from '/navbar/discord.svg';
import githubLogo from '/navbar/github.svg';

// this is taken from old website

export default function NavBar() {
  return (
    <div>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
  <img
    src="/navbar/acm-uci.svg"
    alt="ACM Logo"
    style={{ height: '10vh', marginRight: '10px', verticalAlign: 'middle' }}
  />
  ACM @ UCI
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto open_nav">
            <Nav.Link href="#learn">Learn</Nav.Link>
            <Nav.Link href="#practice">Practice</Nav.Link>
            <Nav.Link href="#compete">Compete</Nav.Link>
            <Nav.Link href="#board">Board</Nav.Link>
            <Nav.Link target="_blank" href="https://discord.gg/MCtKPxC">
                <img
                    src={discordLogo}
                    alt="ACM@UCI Discord server invite"
                    width="20"
                />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://github.com/ACM-UCI/">
                <img
                    src={githubLogo}
                    alt="ACM@UCI GitHub"
                    width="20"
                />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}