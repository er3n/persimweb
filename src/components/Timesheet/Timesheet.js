import React, {Component} from 'react';
import TimesheetCell from './TimesheetCell';


/*
 const person = {
 name: "Eren",
 surname: "Öztürk",
 school: "Alparslan Anadolu Lisesi",
 vocation: "Müdür",
 speciality: "Coğrafya"
 };
 */

const lessonSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const schedules = [
    {
        time: "25.08.2010",
        lessons: ["1Matematik", "2Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "8Coğrafya", "9"]
    },
    {
        time: "26.08.2010",
        lessons: ["Matematik", "Matematik", "3Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "27.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "4Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "28.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "29.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "30.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "31.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    },
    {
        time: "32.08.2010",
        lessons: ["Matematik", "Matematik", "Kimya", "Kimya", "", "", "Coğrafya", "Coğrafya", ""]
    }
];


class Timesheet extends Component {

    render() {
        return (
            <table className="table table-bordered table">
                <thead>
                <tr key="sira">
                    <th key="sira">Sıra</th>
                    {schedules.map((item)=>(<th key={item.time}>{item.time}</th>))}
                </tr>
                </thead>
                <tbody>

                {
                    lessonSize.map(lessonNo=>(
                        <tr key={lessonNo}>
                            <th scope="row">{lessonNo}</th>
                            {schedules.map(schedule=>(
                                <td key={lessonNo + schedule.time}>
                                    <TimesheetCell lessonNo={lessonNo} schedule={schedule}/>
                                </td>))}
                        </tr>
                    ))
                }


                </tbody>
            </table>
        );
    }
}

export default Timesheet;