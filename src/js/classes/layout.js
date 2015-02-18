/*
	

*/
'use strict';
function Layout(type){
	this.type = type;
	var cols = type.split(',');
	this.numberOfColumns = cols.length;
	this.template = '<div class="row">{content}</div>';
	var content = '';
	for(var i=0;i<this.numberOfColumns;i++){
		content +='<div class="col-xs-'+cols[i]+' col-sm-'+cols[i]+' col-md-'+cols[i]+' col-lg-'+cols[i]+' layout-column" >{column'+ i +'}</div>'; 
	}
	this.template = this.template.replace("{content}",content);
	
}

Layout.prototype.getType = function(){
	return this.type;
};

Layout.prototype.getNumberOfColumns = function(){
	return this.numberOfColumns;
};

Layout.prototype.getTemplate = function(){
	return this.template;
};

Layout.prototype.setTemplate = function(template){
	this.template = template;
}