import React, { useState, memo, useEffect } from 'react'
import { compose } from "redux";
import { useDispatch, useSelector, connect } from 'react-redux'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  dispatchGetUsersRequest
} from '../../store/users/actions'
const HomePresenter = ({ getUsersRequest }: any) => {
  const users = useSelector((state: RootState) => state.users.users);

  const [usersState, setUsersState] = useState(users);

  useEffect(() => {
    setUsersState(users);
  }, [users]);


  useEffect(() => {
    getUsersRequest();
  }, []);

  console.log("USERS", users)

  return (
    <Grid container flexDirection='row' spacing={2}>

      {usersState.map((user: any, index: number) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: '80%' }}>
              <CardMedia
                component="img"
                image={user.picture}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {user.title.toUpperCase()} {' '} {user.firstName} {' '} {user.lastName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}

    </Grid>
  )
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    // dispatching plain actions
    getUsersRequest: () => dispatch(dispatchGetUsersRequest()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(HomePresenter);

