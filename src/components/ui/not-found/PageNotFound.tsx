import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import { titleFont } from "@/config/fonts";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        height: "800px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ px: 5, mx: 5 }}>
        <Typography
          variant="h1"
          className={titleFont.className}
          sx={{ fontSize: "9xl" }}
        >
          404
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
          Whoops! Lo sentimos mucho.
        </Typography>
        <Typography variant="body1" fontWeight="light" sx={{ mt: 1 }}>
          <span>Puedes regresar al </span>
          <Link
            href="/"
            underline="hover"
            sx={{ fontWeight: "normal", transition: "all" }}
          >
            inicio
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
