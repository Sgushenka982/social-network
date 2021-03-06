import Users from './Users';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, unfollow, requestUsers } from './../../../Redux/users-reducer';
import Preloader from '../../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../Redux/Selectors/userSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage,pageSize,requestUsers} = this.props
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize,requestUsers} = this.props
        requestUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    {...this.props}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, requestUsers }),
    withAuthRedirect
    )(UsersContainer);
