'use strict';
var merge = function(layout,columns,portlets){
	var columnsToArrange = columns.length-1; 
	var layoutColumnsTemplates = []; 
	
	for(var i = 0;  i<layout.getNumberOfColumns();i++){
		layoutColumnsTemplates[i] = [];
	}

	while(columnsToArrange>=0){
		for(var i = 0;  i<layout.getNumberOfColumns() && columnsToArrange>=0;i++){
			layoutColumnsTemplates[i].push(columns[columnsToArrange--].getTemplate());
		}
	}
	

	for(var i=0;i<layoutColumnsTemplates.length;i++){
		var tempContent = '';
		for(var j=0;j<layoutColumnsTemplates[i].length;j++){
			tempContent+=layoutColumnsTemplates[i][j];
		}
		layout.setTemplate(layout.getTemplate().replace('{column'+i+'}',tempContent))
	}

	
	var portletsToArrange = portlets.length-1;
	

	for(var i = 0;  i<columns.length;i++){
		layoutColumnsTemplates[i] = [];
	}

	while(portletsToArrange>=0){
		for(var i = 0;  i<columns.length && portletsToArrange>=0;i++){
			layoutColumnsTemplates[i].push(portlets[portletsToArrange--].getTemplate());
		}
	}
	

	for(var i=0;i<columns.length;i++){
		var tempContent = '';
		for(var j=0;j<layoutColumnsTemplates[i].length;j++){
			tempContent+=layoutColumnsTemplates[i][j];
		}
		
		layout.setTemplate(layout.getTemplate().replace('{portlet'+i+'}',tempContent))
	}

	

	return layout.getTemplate();
};