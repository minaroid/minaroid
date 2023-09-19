import { NextPage } from "next";
import { ScriptProps } from "next/script";
import { Box, Container, Button } from "@material-ui/core";
import AppHeaderNavItems from "./app-header-nav-items";

const AppHeader: NextPage<ScriptProps> = (props) => {
  return (
    <>
      <Box
        component="header"
        position="fixed"
        width="100%"
        display="flex"
        alignItems="center"
        top={0}
        zIndex={1200}
        style={{
          height: "70px",
          boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Container style={{ height: "100%" }}>
          <AppHeaderNavItems />
        </Container>
      </Box>
    </>
  );
};

export default AppHeader;
