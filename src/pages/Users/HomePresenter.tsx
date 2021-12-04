import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/lab/Pagination';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  dispatchGetUsersRequest,
  dispatchGetUserDetailsRequest
} from '../../store/users/actions'
const HomePresenter = ({ getUsersRequest, users, history, total, offset }: HomePresenterProps) => {

  const [usersState, setUsersState] = useState(users);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setUsersState(users);
  }, [users]);

  const handlePageChange = (e: any, value: any) => {
    setPage(value);
    const newOffset = (value - 1);
    getUsersRequest({ offset: newOffset, limit });
  };

  useEffect(() => {
    setLimit(20);
    getUsersRequest({ offset: 0, limit });
  }, []);

  const handleOnClick = (id: string) => {
    history.push(`/user-details/${id}`);
  };


  return (
    <React.Fragment>
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
                  <Button onClick={() => handleOnClick(user.id)} size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <div>
      <Pagination
        style={{ marginTop: 20 }}
        count={Math.ceil((Number(total)) / limit)}
        variant="outlined"
        color="primary"
        page={page}
        onChange={handlePageChange}
      />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
  offset: state.users.offset,
  total: state.users.total
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    // dispatching plain actions
    getUsersRequest: (payload: any) => dispatch(dispatchGetUsersRequest(payload)),
    getUserDetailsRequest: (payload: any) => dispatch(dispatchGetUserDetailsRequest(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(HomePresenter);

