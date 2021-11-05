import './App.css';
import {rowData} from './appData'
import {useState} from "react";
import Content from "./content";

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
        <Content
            filterItems={filterItems}
            isInput={isInput}
            AddNew={AddNew}
            visibleItem={visibleItem}
            moreInfo={moreInfo}
            userInput={userInput}
            onSave={onSave}
            onChange={onChange}
            more={more}
            onEdit={onEdit}
            onDelete={onDelete}
            isEdit={isEdit}
        />
    )
}
export  default App

