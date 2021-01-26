import Profile from './Profile';
import React from 'react';
import { addPost, getProfile ,getUserStatus,updateUserStatus} from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) { this.props.auth.isAuth ? userId = this.props.auth.userId : userId = 2; }
      this.props.getProfile(userId)
      this.props.getUserStatus(userId)
   }
   // shouldComponentUpdate(nextProps, nextState, nextContext) {
   // тут косяки
   //    return nextProps!== this.props || nextState!== this.state
   // }

   render() {
      return (
         <Profile {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      state: state.profilePage,
      profile: state.profilePage.profile
   }
}

export default compose(
   connect(mapStateToProps, { addPost, getProfile,getUserStatus,updateUserStatus }),
   withRouter,
   withAuthRedirect
   )(ProfileContainer);

