/*global Todos DS */
'use strict';

Todos.Store = DS.Store.extend({
	revision: 12,
	adapter: 'Todos.HoodieAdapter'
});

Todos.HoodieAdapter = DS.HoodieAdapter.extend({
	namespace: 'todosemberjs'
});
