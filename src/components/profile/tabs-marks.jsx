import { Table } from "react-bootstrap"

const TabsMarks = () => {

    return (
        <div style={{padding: '1rem'}}>

            <select className="form-select mb-2" >
                <option selected >Все</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>

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