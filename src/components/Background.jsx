import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function Background() {
  const theme = useTheme();

  return (
    <>
      {/* FIRST ROW */}

      <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-vector/hand-drawn-lo-fi-illustrations_23-2149325745.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
            marginLeft: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-photo/cartoon-lofi-young-manga-style-girl-studying-while-listening-music-raining-street-ai-generative_123827-24916.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
            marginLeft: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-photo/cartoon-lofi-young-manga-style-girl-studying-while-listening-music-raining-street-ai-generative_123827-24916.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>
      </div>

      {/* Second Row */}

      <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-vector/hand-drawn-lo-fi-illustrations_23-2149325745.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
            marginLeft: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-photo/cartoon-lofi-young-manga-style-girl-studying-while-listening-music-raining-street-ai-generative_123827-24916.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "30%",
            marginLeft: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "30%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://img.freepik.com/free-photo/cartoon-lofi-young-manga-style-girl-studying-while-listening-music-raining-street-ai-generative_123827-24916.jpg?size=626&ext=jpg"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </>
  );
}
