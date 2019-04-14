var $ = require ("jquery");
require('./css/style.css');

export function createComponent(rootElement){
    rootElement.append(
        $("<div>").addClass("kendoEmptyComponent")
    )
    
}

