import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <h5><a href="https://ksishafiq.com">Employee Management App</a></h5>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;