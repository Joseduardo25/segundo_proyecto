import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';



function App() {
 
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    root_2: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const usuario = ['https://i.ytimg.com/vi/uhuxVFktLk4/maxresdefault.jpg']
  const[valueInput, setValueInput] = useState('')
  const[array, setArray] = useState(usuario)
  
  const onClickbuttonForm = () => {
    const copyArray = [...array]
    copyArray.push(valueInput)
    setArray(copyArray)
    setValueInput('')
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    onClickbuttonForm()
  }
  const onChangeInputForm = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <form className={classes.root} onSubmit={onSubmitForm} noValidate autoComplete="off">
      <div className={classes.root_2}>
      {array.map((e)=>(<Avatar alt={e} src={e}/>))}
      </div>
      <TextField 
        id="standard-basic" 
        label="Standard"
        value={valueInput}
        onChange={onChangeInputForm}
         />
         <button>
           Agregar
         </button>
      
    </form>
    
  );
}


export default App;
