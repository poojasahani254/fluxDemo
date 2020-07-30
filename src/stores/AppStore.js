var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var store = {
	_items : []
}

var addItem = (item) =>{
	store._items.push(item);
}
var removeItem = (index)=>{
	store._items.splice(index, 1);
}
var AppStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		debugger
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getList: function (){
		return store._items;
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.ADD_TODDO:
			addItem(action.data)
			AppStore.emit(CHANGE_EVENT)
			break;
		case AppConstants.REMOVE_TODDO:
			removeItem(action.data)
			AppStore.emit(CHANGE_EVENT)
			break;
		default:
			return true
	}
	return true;
});

module.exports = AppStore;