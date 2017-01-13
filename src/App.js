import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Timesheet from './components/Timesheet/Timesheet';

class App extends Component {



    render() {
        return (
            <div>
                <Navbar />
                <div className="container">

                    <div className="page-title">
                        <h1>Ders Programı</h1>
                    </div>
                    <Timesheet />

                </div>
            </div>
        );
    }
}

export default App;
