import {Button} from "react-bootstrap";


const Data = ({visibleItem,moreInfo,onSave,more,onEdit,onDelete,isEdit}) =>{
    return(
        visibleItem.map(((el,i) =>{
                return(
                    <tr key={el.id}>

                        <th>{el.title}</th>
                        <th>{el.info}</th>
                        <th>{el.company}</th>
                        <th>{el.data}</th>
                        <th>{moreInfo ===el.id  ?  el.more : null}</th>
                        <th>
                            <Button size='sm'  variant="primary" style={{marginLeft:"2px"}} onClick={() =>more(el.id)}>More</Button>
                            {isEdit === el.id ? (
                                <Button size='sm'  variant="primary" onClick={() =>onSave(el.id)} >Save Edits</Button>) : (
                                <Button size='sm'  variant="primary" onClick={() =>onEdit(el.id)} >Edit</Button>)}
                            <Button size='sm' variant="danger"  onClick={() =>onDelete(el.id)}>Delete</Button>


                        </th>

                    </tr>
                )
            }))
    )
}
export  default Data