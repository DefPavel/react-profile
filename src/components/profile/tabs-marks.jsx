import React, { useState } from 'react'
import { Table } from "react-bootstrap";
import Select from 'react-select';

const TabsMarks = () => {

    const options = [
        { value: '-1', label: 'Все' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
      ];
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div style={{padding: '1rem'}}>
            <Select className="mb-2" 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <Table responsive striped bordered hover >
            <thead>
                <tr>
                <th>#</th>
                <th>Тип Предмета</th>
                <th>Предмет</th>
                <th>100-бал.оц.</th>
                <th>Экз.оц.</th>
                <th>Зачет оц.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Экзамен</td>
                <td>Психология</td>
                <td>75</td>
                <td>4</td>
                <td></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Экзамен</td>
                <td>Психология</td>
                <td>75</td>
                <td>4</td>
                <td></td>
                </tr>
            </tbody>
        </Table>
        </div>
        
      
    )
}

export default TabsMarks;