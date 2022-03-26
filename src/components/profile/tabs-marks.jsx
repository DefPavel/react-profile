import React from 'react';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const TabsMarks = () => {

     //const marks = useSelector(state => state.persons.marks);

    return (
        <div style={{padding: '1rem'}}>
            <Table responsive striped bordered hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Тип Предмета</th>
                <th>Предмет</th>
                <th>Семестр</th>
                <th>100-бал.оц.</th>
                <th>Экз.оц.</th>
                <th>Зачет оц.</th>
                </tr>
            </thead>
            <tbody>
                { /*marks.map((item , i) => {
                        return [
                            <tr key={i}>
                            <td>{item.id_mark}</td>
                            <td>{item.form_control_name}</td>
                            <td>{item.subject_name}</td>
                            <td>{item.semester}</td>
                            <td>{item.ball_100}</td>
                            <td>{item.ball_ects}</td>
                            <td>{item.ball_5}</td>

                        </tr>
                        ]

                    })
                    */
                }
            </tbody>
        </Table>
        </div>
        
      
    )
}

export default TabsMarks;