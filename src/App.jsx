import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LooksOneIcon from '@mui/icons-material/LooksOne';

export default function App () {
  return(
    <Container sx={{ border: 3, boxShadow: 3, pb: 2 }}>

      <Grid container spacing={7}>
        <Grid item xs={12} sm={6} textAlign={"justify"}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum alias maxime non omnis corrupti suscipit nisi eligendi quis vel? Officiis obcaecati aliquid omnis unde soluta laudantium ullam pariatur numquam quod?</p>
        </Grid>
        <Grid item xs={12} sm={6} textAlign={"justify"}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum alias maxime non omnis corrupti suscipit nisi eligendi quis vel? Officiis obcaecati aliquid omnis unde soluta laudantium ullam pariatur numquam quod?</p>
        </Grid>
      </Grid>

      <h1>App</h1>

      <Typography variant="h1" textAlign="center" mt={7} mb={7}>
        MY H1 TITLE
      </Typography>

      <Box sx={{
        fontStyle:"sans-serif", 
        textAlign:"center", 
        border:2, 
        borderColor:"blueviolet", 
        borderRadius:"20px",
        padding:2,
        marginBottom: 3}}>
         My first Box in MUI
      </Box>

      <Button sx={{ml: 50}} variant="contained" color="secondary" startIcon={<LooksOneIcon />}>
        My first button
      </Button>

      <Button sx={{ml: 7}} variant="contained" color="primary" startIcon={<FavoriteBorderIcon />}>
        Beatifull button
      </Button>
    </Container>
  );
}