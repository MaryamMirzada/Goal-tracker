import NavbarDatail from "../data/NavbarDatail";
import { Link } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";
import logo from "../assets/image/logo.png";
const Navbar = () => {
  return (
    <Box>
      <Container>
        <Box>
          <img
            src={logo}
            alt="goal tracker logo"
            sx={{
              width: { xs: "10%", sm: "20%", md: "10%" },
            }}
          />
        </Box>
        {NavbarDatail.map((data) => (
          <div key={data.id}>
            <Link to={data.path}>{data.name}</Link>
          </div>
        ))}
      </Container>
    </Box>
  );
};
export default Navbar;
