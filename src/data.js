import {Button} from "react-bootstrap";


const Data = ({visibleItem,moreInfo,onSave,more,onEdit,onDelete,isEdit}) =>{
    return(
        visibleItem.map(((el,i) =>{
                return(
                    <tr key={el.id}>

                        <td>{el.title}</td>
                        <td>{el.info}</td>
                        <td>{el.company}</td>
                        <td>{el.data}</td>
                        <td>{moreInfo ===el.id  ?  el.more : null}</td>
                        <td>
                            <Button size='sm'  variant="primary" style={{marginLeft:"2px"}} onClick={() =>more(el.id)}>More</Button>
                            {isEdit === el.id ? (
                                <Button size='sm'  variant="primary" onClick={() =>onSave(el.id)} >Save Edits</Button>) : (
                                <Button size='sm'  variant="primary" onClick={() =>onEdit(el.id)} >Edit</Button>)}
                            <Button size='sm' variant="danger"  onClick={() =>onDelete(el.id)}>Delete</Button>


                        </td>

                    </tr>
                )
            }))
    )
}
export  default Data