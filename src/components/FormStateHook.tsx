import React,{FormEvent, useRef,useState} from 'react'
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters.' ),
    age: z.number().min(18, 'Age must be at least 18.')
})
type FormData = z.infer<typeof schema>

// interface FormData{
//     name:string
//     age:number
// }

const Form = () => {

    const {
        register,
        handleSubmit, 
        formState : {errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(schema)})
    //console.log(register('name'))

    // const[person,setPerson] = useState({
    //     name:'' ,
    //     age:0 
    // });

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault()
    //     console.log(person) 
    // }
    const onSubmit = (data : any) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
            //onChange={(event)=>setPerson({...person, name:event.target.value})} 
            {...register('name'/*,{required : true,minLength:3 }*/)}
            id = "name" 
            type="text" 
            className="form-control" />
        </div >
        {errors.name&&
        <p className='text-danger'>{errors.name.message}</p>}
        {/* {errors.name?.type==='minLength'&& <p>The name must be of 3 characters</p>} */}
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input  
            //onChange={(event)=>setPerson({...person, name:event.target.value})} 
            {...register('age', {valueAsNumber : true}) }
            id = 'age'   
            type="number" 
            className="form-control" />
            {errors.age&& 
        <p className='text-danger'>{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type ="submit">Submit</button>
    </form>
  )
}

export default Form
