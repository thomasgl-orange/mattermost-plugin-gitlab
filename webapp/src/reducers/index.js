import {combineReducers} from 'redux';

import ActionTypes from '../action_types';
import Constants from '../constants';

function connected(state = false, action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        return action.data.connected;
    default:
        return state;
    }
}

function gitlabURL(state = '', action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        if (action.data && action.data.gitlab_url) {
            return action.data.gitlab_url;
        }
        return '';
    default:
        return state;
    }
}

function organization(state = '', action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        if (action.data && action.data.organization) {
            return action.data.organization;
        }
        return '';
    default:
        return state;
    }
}

function username(state = '', action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        return action.data.gitlab_username;
    default:
        return state;
    }
}

function settings(
    state = {
        sidebar_buttons: Constants.SETTING_BUTTONS_TEAM,
        daily_reminder: true,
        notifications: true,
    },
    action
) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        return action.data.settings;
    default:
        return state;
    }
}

function clientId(state = '', action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CONNECTED:
        return action.data.gitlab_client_id;
    default:
        return state;
    }
}

function reviews(state = [], action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_REVIEWS:
        return action.data;
    default:
        return state;
    }
}

function yourPrs(state = [], action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_YOUR_PRS:
        return action.data;
    default:
        return state;
    }
}

function yourAssignments(state = [], action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_YOUR_ASSIGNMENTS:
        return action.data;
    default:
        return state;
    }
}

function mentions(state = [], action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_MENTIONS:
        return action.data;
    default:
        return state;
    }
}

function unreads(state = [], action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_UNREADS:
        return action.data;
    default:
        return state;
    }
}

function gitlabUsers(state = {}, action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_GITLAB_USER: {
        const nextState = {...state};
        nextState[action.userID] = action.data;
        return nextState;
    }
    default:
        return state;
    }
}

function subscriptions(state = {}, action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_CHANNEL_SUBSCRIPTIONS: {
        const nextState = {...state};
        nextState[action.data.channelId] = action.data.subscriptions;

        return nextState;
    }
    default:
        return state;
    }
}

export default combineReducers({
    connected,
    gitlabURL,
    organization,
    username,
    settings,
    clientId,
    reviews,
    yourPrs,
    yourAssignments,
    mentions,
    unreads,
    gitlabUsers,
    subscriptions,
});
