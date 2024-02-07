import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { green, yellow, red } from '@mui/material/colors';

const Task = (props) => {
  return (
    <Grid item key={props.id} xs={12} md={4}>
      <Card
        sx={{
          backgroundColor: props.done ? 'lightgrey' : 'lightblue',
          padding: '20px'
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'white',
            borderRadius: '3px',
            padding: '20px',
            textAlign: 'center'
          }}
        />
        <CardContent>
          <Typography component="p" variant="subtitle2" color="text.primary">
            Due: {props.deadline}
          </Typography>
          <Typography component="p" variant="subtitle1" align="center" sx={{ fontStyle: 'italic' }}>
            {props.description}
          </Typography>
          <Chip
            label={props.priority}
            style={{
              backgroundColor: props.priority === "Low" ? green[500] : props.priority === "Medium" ? yellow[500] : red[500],
              color: '#fff',
              marginTop: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              textAlign: 'center' // Center the text within the Chip
            }}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', padding: '20px' }}>
          <Button variant="contained" size="small" color="success" onClick={props.markDone}>
            Done
          </Button>
          <Button variant="contained" size="small" color="error" onClick={props.deleteTask}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Task;
