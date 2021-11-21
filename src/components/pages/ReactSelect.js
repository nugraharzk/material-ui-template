import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Select from 'react-select';
import { toast } from 'react-toastify';

const options = [
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Banana',
    value: 'banana'
  },
  {
    label: 'Durians',
    value: 'durians'
  },
  {
    label: 'Apple',
    value: 'apple'
  },
  {
    label: 'Grape',
    value: 'grape'
  },
  {
    label: 'Mango',
    value: 'mango'
  },
]

const ReactSelect = () => {
  const onChangeSelect = (e) => {
    toast.info(`Label ${e.label} with value ${e.value}`);
  }
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
        style={{ minHeight: '90vh' }}
      >
        <Grid item>
          <Paper style={{ width: '500px' }}>
            <Select
              onChange={onChangeSelect}
              options={options}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
 
export default ReactSelect;