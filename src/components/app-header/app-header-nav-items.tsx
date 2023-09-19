import { NextPage } from "next";
import { ScriptProps } from "next/script";
import { Box, Container, Button } from "@material-ui/core";

const AppHeaderNavItems: NextPage<ScriptProps> = (props) => {
  const renderNavItem = ({ label = "" }) => {
    return (
      <Button
        variant="text"
        style={{ color: "white", marginInlineEnd: "20px", padding: 0 }}
      >
        {label}
      </Button>
    );
  };

  const renderNavItems = (
    <Box
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        marginInlineStart: "40px",
      }}
    >
      {renderNavItem({ label: "Home" })}
      {renderNavItem({ label: "About" })}
      {renderNavItem({ label: "Resume" })}
      {renderNavItem({ label: "Services" })}
      {renderNavItem({ label: "Skills" })}
      {renderNavItem({ label: "Projects" })}
      {renderNavItem({ label: "Contact" })}
    </Box>
  );

  return <>{renderNavItems}</>;
};

export default AppHeaderNavItems;
