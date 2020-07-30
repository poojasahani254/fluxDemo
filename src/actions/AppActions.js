var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	addItem: (item) => {
		debugger
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_TODDO,
			data: item
		})
	},
	removeItem: (index) => {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_TODDO,
			data: index
		})
	},

}

module.exports = AppActions;