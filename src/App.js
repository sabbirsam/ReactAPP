import React from 'react';
import Settings from './components/Settings';
import Texteditor from './components/Texteditor';
function App(){
    return(
        <React.Fragment>
            <Texteditor title="Write here..."/>
            <Settings/>
        </React.Fragment>
    )
}

export default App;