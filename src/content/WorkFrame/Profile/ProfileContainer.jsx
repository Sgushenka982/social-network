import Profile from './Profile';
import React from 'react';
import { addPost, updateNewPost, getProfile } from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) { this.props.auth.isAuth ? userId = this.props.auth.userId : userId = 2; }
      this.props.getProfile(userId)
   }
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
   connect(mapStateToProps, { addPost, updateNewPost, getProfile }),
   withRouter,
   withAuthRedirect
   )(ProfileContainer);

