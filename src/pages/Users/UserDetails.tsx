import React, { useState, memo, useEffect } from 'react'
import { compose } from "redux";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    dispatchGetUsersRequest,
    dispatchGetUserDetailsRequest
} from '../../store/users/actions'
const UserDetails = ({ userDetails, getUserDetailsRequest }: any) => {

    const params = useParams();

    console.log(params)
    useEffect(() => {
        getUserDetailsRequest(params)
    }, []);

    const [userState, setUserState] = useState(userDetails);
    useEffect(() => {
        setUserState(userDetails);
    }, [userDetails]);


    return (
        <div>
            helloolololo
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    userDetails: state.users.userDetails,
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        // dispatching plain actions
        getUserDetailsRequest: (payload: any) => dispatch(dispatchGetUserDetailsRequest(payload)),
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(UserDetails);

