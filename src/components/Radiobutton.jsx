import {Box} from '@mui/material'
import {FormControl} from '@mui/material'
import {FormLabel} from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {RadioGroup} from '@mui/material'
import {Radio} from '@mui/material'
import React, { useState } from 'react'

// import History from react
import {Link} from 'react-router-dom';


const Radiobutton = () => {
    const [Value, setValue] = useState('') 
    //const history = useHistory()
  console.log({Value})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)

//         if (Value === 'SqlServer') {
//           history.push('/SqlServer')
//        } else {
//           history.push('/mysql')
//        }
// // WITH SWITCH STATEMENT
//        switch(Value) {
//         case 'SqlServer':
//             history.push('/SqlServer')
//             break;
//         case 'MYSQL':
//             history.push('/mysql')
//             break;
//         default: return
//     }
    }
  return (
    <div className='radiofilter'>
    <Box>
      <FormControl>
        
          
                  <FormLabel id='selecting-database'>

            <h4>Select Database</h4>

        </FormLabel>
        <RadioGroup
      name='selecting-database'
      aria-labelledby='selecting-database'
      aria-label='Select database'
                                 
      value={Value}
      onChange={handleChange}
row
      >

        <FormControlLabel control={<Radio size = 'medium' />}  label='SQL Server'  value='SqlServer' />
        
        <FormControlLabel control={<Radio size='medium'  />}  label='MYSQL'  value='MYSQL' />
        
        <FormControlLabel control={<Radio size = 'medium' />}  label='ORACLE DB'  value='ORACLE DB' />
        
        <FormControlLabel control={<Radio size = 'medium' />}  label='POSTGRADE SQL'  value='POSTGRADE SQL' />
{/* 
        <FormControl.Check onClick={() => setValue('SqlServer')} /> */}
 
        </RadioGroup>
      

      </FormControl> 
      </Box>
      </div>
  );
    
};
export default Radiobutton; 