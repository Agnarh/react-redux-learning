import React, {PropTypes} from 'react';
import Header from './common/header';

var App = React.createClass({
    propTypes: {
        children: PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
});

export default App;