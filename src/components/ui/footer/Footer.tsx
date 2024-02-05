import { titleFont } from "@/config/fonts";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "10px 0",
      }}
    >
      <Grid item>
        <Link href="/">
          <Typography>Cognitis Software House </Typography>
        </Link>
      </Grid>
      <Grid item sx={{ display: { xs: "none", sm: "flex" } }}>
        <Typography>
          <span style={{ fontWeight: "bold" }}> | </span>©{" "}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};
