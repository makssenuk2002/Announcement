import './App.css';
import {rowData} from './appData'
import {useState} from "react";
import {Button, Table} from "react-bootstrap";

const App = () =>  {
    let date = new Date()
    let today = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    const emptyObj = {
        title:'',
        data: today,
        company: '',
        info: '',
        more:''
    }

    const [state, setState] = useState(rowData)
    const [userInput, setUserInput] = useState(emptyObj)
    const [isEdit , setIsEdit] = useState(null)
    const [isInput , setIsInput] = useState(null)
    const [term,setTerm] = useState('')
    const [moreInfo , setMoreInfo] = useState(false)


    const onDelete =(id) =>{
        setState([...state.filter((el) => el.id !== id)])
    }



    function AddNew(e) {
            e.preventDefault()
            const newItem = {
                id: Math.random().toString(36).substr(2,9),

                ...userInput
            }
            setState([...state, newItem])
            setUserInput(emptyObj)


    }
    const onChange = (e) =>{

        switch ( e.target.dataset.input){
            case 'title':
                setUserInput( { ...userInput, title:e.target.value });
                break;
            case 'info':
                setUserInput( { ...userInput, info:e.target.value });
                break;
            case 'company':
                setUserInput( { ...userInput, company:e.target.value });
                break;
            case 'more':
                setUserInput( { ...userInput, more:e.target.value });
                break;
        }
        setIsInput(true)
    }


    function onSave(id) {
        let newArr = [...state].map(item =>{
            if(item.id === id){
                item = userInput
            }
            return item
        })
        setState(newArr)
        setUserInput(emptyObj)
        setIsEdit(null)
    }
    const search = (items,term) =>{
        if(term.length ===0){
            return items
        }
        return  items.filter((item) =>{
            return item.title.toLowerCase().indexOf(term) > -1
        })
    }
    const visibleItem = search(state,term)

    function filterItems(e) {
        setTerm(e.target.value.toLowerCase())
    }
    function onEdit(id) {
        state.forEach((el)=>{
            if(el.id === id ){
                setUserInput(el)
            }
        })
        setIsEdit(id)
    }

    function more(id) {
        setMoreInfo(id)

    }

    return (
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
                    <td><input data-input ='title'  type='text' placeholder='change  title'  value={userInput.title} onChange={ onChange}/></td>
                    <td><input data-input ='info'  type='text'  placeholder='change  info'   value={userInput.info} onChange={ onChange}/></td>
                    <td><input data-input ='company'  type='text' placeholder='change  company'  value={userInput.company}onChange={ onChange}/></td>
                    <td></td>
                    <td><input data-input ='more'  type='text' placeholder='change  company'  value={userInput.more}onChange={ onChange}/></td>
                    {isInput? <td><Button size='sm' onClick={AddNew}>Add new Row</Button></td> :
                        <td><Button size='sm' onClick={() => alert("Введите данные!!!")}>Add new Row</Button></td> }
                </tr>
                {visibleItem.map(((el,i) =>{
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
                }))}

            </Table>
        </div>
    )
}
export  default App

