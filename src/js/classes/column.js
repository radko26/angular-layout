'use strict';
function Column(name){
	this.template = '<div class="column">{portlet'+name+'}</div>';
}

Column.prototype.getTemplate = function(){
	return this.template;
}
