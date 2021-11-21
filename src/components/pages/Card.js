import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import Iguana from '../../assets/img/contemplative-reptile.jpg';

const Item = styled(Paper)({
  marginRight: '1rem',
  marginLeft: '1rem'
});

const Headings = styled(Typography)({
  color: 'white',
  fontSize: '24pt',
  marginTop: '1rem',
  marginBottom: '1rem'
})

const CardComponent = (props) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Headings>
            Card Examples
          </Headings>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item sm={2} className="mr-1">
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Iguana}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item sm={2}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Iguana}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item sm={2}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Iguana}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item sm={2}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Iguana}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}
 
export default CardComponent;