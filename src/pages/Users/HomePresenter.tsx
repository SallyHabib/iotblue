import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Pagination from '@mui/lab/Pagination';
import AddIcon from '@mui/icons-material/Add';
import {
  CardActions,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Modal,
  Button,
  Typography,
  IconButton,
  Box,
  TextField
} from '@mui/material';
import {
  dispatchGetUsersRequest,
  dispatchGetUserDetailsRequest,
  dispatchCreateUserRequest
} from '../../store/users/actions'
const HomePresenter = ({ getUsersRequest, users, history, total, createUserRequest }: HomePresenterProps) => {

  const [usersState, setUsersState] = useState(users);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [modalOpened, setModalOpened] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 3,
    px: 4,
    pb: 3,
  };

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

  const handleClose = () => {
    setModalOpened(false);
  }

  const addUserClicked = () => {
    setModalOpened(true);
  }

  const handleSubmit = () => {
    createUserRequest({ firstName, lastName, email })
  }

  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value)
  }

  const onChangeLastName = (e: any) => {
    setLastName(e.target.value)

  }

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)

  }

  return (
    <React.Fragment>
      {modalOpened &&
        <Modal
          hideBackdrop
          open={modalOpened}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 500, height: 300, alignContent: 'center' }} component="form" >
            <Grid container flexDirection='column' spacing={3}>
              <TextField onChange={onChangeFirstName} style={{ padding: 10 }} id="outlined-basic" label="First Name" variant="outlined" />
              <TextField onChange={onChangeLastName} style={{ padding: 10 }} id="outlined-basic" label="Last Name" variant="outlined" />
              <TextField onChange={onChangeEmail} style={{ padding: 10 }} id="email" label="Email" variant="outlined" />
            </Grid>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </Box>
        </Modal>
      }
      <Grid container flexDirection='row' spacing={2}>
        <Grid item xs={12} justifyContent='flex-end'>
          <IconButton color='inherit' onClick={addUserClicked} >
            Add new User<AddIcon />
          </IconButton>
        </Grid>
        {usersState.map((user: any, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: '70%' }}>
                {user.picture &&
                  <CardMedia
                    component="img"
                    image={user.picture}
                  />
                }
                <CardContent>
                  {user.firstName &&
                    <Typography gutterBottom variant="h5" component="div">
                      {user.firstName}
                    </Typography>
                  }
                  {user.title &&
                    <Typography variant="body2" color="text.secondary">
                      {user.title.toString().charAt(0).toUpperCase() + user.title.slice(1)} {' '} {user.firstName} {' '} {user.lastName}
                    </Typography>
                  }
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
  total: state.users.total
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    // dispatching plain actions
    getUsersRequest: (payload: any) => dispatch(dispatchGetUsersRequest(payload)),
    createUserRequest: (payload: any) => dispatch(dispatchCreateUserRequest(payload)),
    getUserDetailsRequest: (payload: any) => dispatch(dispatchGetUserDetailsRequest(payload)),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(HomePresenter);

