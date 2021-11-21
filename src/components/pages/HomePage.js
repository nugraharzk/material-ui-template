import React, {Component} from 'react';
import {connect} from "react-redux";

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Action Imports
import {setTest} from "../../actions/home-actions";

class HomePage extends Component {

  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '90vh' }}
        >
          <Grid item xs={6} style={{maxWidth:'90vw'}}>
            <Paper style={{marginTop:"10px",textAlign:"center"}}>
              <Typography variant="h4" gutterBottom style={{padding:"10px"}}>
                This is Home Page, please choose category on sidebar to continue
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setTest
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);