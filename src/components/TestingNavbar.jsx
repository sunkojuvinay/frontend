const Form = () => {
    const [gender, setGender] = useState('female')
    const history = useHistory()
 
    const redirect = () => {
       // WITH IF STATEMENT
       if (gender === 'female') {
          history.push('/female')
       } else {
          history.push('/male')
       }
 
       // WITH SWITCH STATEMENT
       switch(gender) {
           case 'male':
               history.push('/male')
               break;
           case 'female':
               history.push('/female')
               break;
           default: return
       }
    }
 
    return (
       <>
         // female gender checkbox
         <Form.Check onClick={() => setGender('female')} />
 
         // male gender checkbox
         <Form.Check onClick={() => setGender('male')} />
 
         // submit button
         <Button type="submit" onClick={redirect} />
       </>
    )
 }