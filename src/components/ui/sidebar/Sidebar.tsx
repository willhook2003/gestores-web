"use client";

import Link from "next/link";

// import { useUIStore } from "@/store";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import theme from "@/theme";

// Icons
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

export const Sidebar = () => {
  // const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  // const closeMenu = useUIStore( state => state.closeSideMenu );

  // Función retorna jsx icono de módulo

  interface Module {
    id: number;
    name_module: string;
    path: string;
    description_module: string;
  }

  const [open, setOpen] = useState(true);

  const renderIconModule = (module: string) => {
    switch (module) {
      case "":
        return <HomeOutlinedIcon />;
      case "Inicio":
        return <HomeOutlinedIcon />;
      case "Actividades":
        return <PlaylistAddCheckOutlinedIcon />;
      case "Agenda":
        //case "otherModule":
        return <EventOutlinedIcon />;
      case "Gestores":
        return <PeopleAltOutlinedIcon />;
      case "Asignaciones":
        return <PermContactCalendarOutlinedIcon />;
      default:
        return null;
    }
  };

  const modules: Module[] = [
    {
      id: 1,
      name_module: "Inicio",
      path: "/home",
      description_module: "Acceso opciones de menú",
    },
    {
      id: 2,
      name_module: "Actividades",
      path: "/actividades",
      description_module: "Lista de Actividades",
    },
    {
      id: 3,
      name_module: "Agenda",
      path: "/agenda",
      description_module: "Listado de Agenda",
    },
    {
      id: 4,
      name_module: "Gestores",
      path: "/gestores",
      description_module: "Pantalla de Gestores",
    },
    {
      id: 5,
      name_module: "Asignaciones",
      path: "/asignaciones",
      description_module: "Pantalla de asignaciones",
    },
  ];

  return (
    <Box
      component={"nav"}
      //sx={{ width: { sm: "200px" }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" //temporary hay que ocultar
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#fff",
            width: "0.2em",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            //  borderRadius: 8,
            backgroundColor: "#ccc",
            minHeight: 24,
            //border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
            // backgroundColor: Theme.palette.primary.main,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            // onClick={()=>setDrawer(!drawer)}
          >
            <MenuOpenOutlinedIcon
            // onClick={toggleDrawer}
            />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          {modules.map((module) => (
            <ListItem key={module?.id} disablePadding>
              <Link href={module?.path} passHref legacyBehavior>
                <ListItemButton>
                  <ListItemIcon>
                    {renderIconModule(module?.name_module)}
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={module?.name_module} />
                  </Grid>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <Divider />
          <ListItem disablePadding>
            <Link href={"/home"} passHref legacyBehavior>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={"Ajustes"} />
                  {/* <ListItemText
                    secondary="jol"
                   {newTitle(module?.description_module)}
                  /> */}
                </Grid>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/home"} passHref legacyBehavior>
              <ListItemButton>
                <ListItemIcon>
                  <LiveHelpOutlinedIcon />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={"Ayuda"} />
                  {/* <ListItemText
                    secondary="jol"
                   {newTitle(module?.description_module)}
                  /> */}
                </Grid>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
