import {Button, Table} from "react-bootstrap";
import Data from "./data";


const Content =({visibleItem,filterItems,isInput,AddNew,moreInfo,userInput,onSave,onChange,more,onEdit,onDelete,isEdit}) =>{
    return(
        <div className='container'>

            <h1>Announcement</h1>
            <Table size='sm' variant='dark' stiped bordered hover>

                <tr>
                    <td><input onChange={filterItems} placeholder='search'/></td>
                    <td>Search by title </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>


                <tr >
                    <th>Title</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Data</th>
                    <th>More</th>
                    <th>Action</th>
                </tr>
                <tr >
                    <td><input data-input ='title'  type='text' placeholder='write a title'  value={userInput.title} onChange={ onChange}/></td>
                    <td><input data-input ='info'  type='text'  placeholder='write a info'   value={userInput.info} onChange={ onChange}/></td>
                    <td><input data-input ='company'  type='text' placeholder='write a company'  value={userInput.company}onChange={ onChange}/></td>
                    <td></td>
                    <td><input data-input ='more'  type='text' placeholder='write  more info'  value={userInput.more}onChange={ onChange}/></td>
                    {isInput? <td><Button size='sm' onClick={AddNew}>Add new Row</Button></td> :
                        <td><Button size='sm' onClick={() => alert("Введите данные!!!")}>Add new Row</Button></td> }
                </tr>

                <Data
                    visibleItem={visibleItem}
                    moreInfo={moreInfo}
                    onSave={onSave}
                    more={more}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    isEdit={isEdit}



                />

            </Table>
        </div>
    )
}
export default Content