import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }

    render() {
        return (
            <div>
                Here is list of protected admins:
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({admins}) {
    return {admins};
}

const mapDispatchToProps = {
    fetchAdmins
};

function loadData({dispatch}) {
    return dispatch(fetchAdmins());
}

export {loadData};

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminsListPage)),
    loadData
};