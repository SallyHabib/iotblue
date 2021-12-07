import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import {
	dispatchGetUserDetailsRequest
} from '../../store/users/actions'
const UserDetails = ({ userDetails, getUserDetailsRequest }: UserDetailsProps) => {

	const params = useParams();

	useEffect(() => {
		getUserDetailsRequest(params)
	}, []);

	const [userState, setUserState] = useState(userDetails);
	useEffect(() => {
		setUserState(userDetails);
	}, [userDetails]);


	console.log(userDetails)
	return (
		<div style={{ textAlign: 'center' }} className="col-md-4 animated fadeIn" key={userState.id}>
			<Card sx={{ maxHeight: '70%' }}>
				<div className="avatar">
					<img
						height='100%'
						width='100%'
						src={userState.picture}
						className="card-img-top"
					/>
				</div>
				{userState.title &&
					<Typography gutterBottom variant="h5" component="div">
						{userState.title.toString().charAt(0).toUpperCase() + userState.title.slice(1)} {'.'} {userState.firstName} {' '} {userState.lastName}
					</Typography>
				}
				{userState.gender &&
					<Typography gutterBottom variant="body2" component="div">
						{userState.gender}
					</Typography>
				}

				{userState.dateOfBirth &&
					<Typography gutterBottom variant="body2" component="div">
						Born on {' '}
						{moment(userState.dateOfBirth).format('ll')}
					</Typography>
				}

				{userState.location &&
					<Typography gutterBottom variant="body2" component="div">
						{userState.location.country + ", " + userState.location.city + ", " +
							userState.location.state + ", " + userState.location.street}
					</Typography>
				}

				{userState.email &&
					<Typography gutterBottom variant="body2" component="div">
						{userState.email}
					</Typography>
				}

				{userState.phone &&
					<Typography gutterBottom variant="body2" component="div">
						{userState.phone}
					</Typography>
				}
			</Card >
		</div >
	)
}

const mapStateToProps = (state: RootState) => ({
	userDetails: state.users.userDetails,
})

const mapDispatchToProps = (dispatch: any) => {
	return {
		// dispatching plain actions
		getUserDetailsRequest: (payload: GetUserDetailsPayload) => dispatch(dispatchGetUserDetailsRequest(payload)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(UserDetails);

