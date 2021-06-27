import React from 'react';

const Errors = ({errormsg}) => {
    var errs = [];
    
    for(var i = 0;i < errormsg.length; i++){
        var msg = errormsg[i]
        errs.push(<h4 key={i}>{msg}</h4>);
    }
    
    return(
        <div className="container errors">
            {errs}
        </div>
    );
};

export { Errors }