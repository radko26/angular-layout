'use strict';
function Portlet(header,content){
	this.template = '<div class="portlet">'+
			    '<div class="portlet-header">'+header+'</div>'+
			    '<div class="portlet-content">'+content+'</div>'+
			 	'</div>'
}

Portlet.prototype.getTemplate = function(){
	return this.template;
}
