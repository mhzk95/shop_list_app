import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'
import { useFormik } from 'formik'
import { Schema } from './schema'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { addShop, updateShop } from '../redux/shopSlice'
import {areas,categories} from '../redux/data'

const Input = ({ setOpen,data }) => {
  const dispatch = useDispatch()
  const onSubmit = () => {
    if(data){
      dispatch(updateShop({...values,id:data?.id}))
      setOpen(false)
    }else {
      dispatch(addShop(values))
      setOpen(false)
    }
    
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: data?.name ||  '',
      area: data?.area || '',
      category: data?.category || '',
      openingDate: data?.openingDate || '',
      closingDate: data?.closingDate || '',
    },
    validationSchema: Schema,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        style={{width:'100%',marginTop:'20px'}}
        id='name'
        label='Name'
        value={values.name}
        onChange={handleChange}
        type='text'
        error={Boolean(errors.name)}
        helperText={errors.name}
      />
      <FormControl sx={{mt:1, minWidth: '100%' }} error={Boolean(errors.area)}>
        <InputLabel id='area'>Area</InputLabel>
        <Select
          name='area'
          id='area'
          value={values.area}
          label='Area'
          onChange={handleChange}
        >
          {areas.map((area) => (
            <MenuItem key={area} value={area}>{area}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.area}</FormHelperText>
      </FormControl>
      <FormControl
        sx={{mt:1,mb:1, minWidth: '100%'}}
        error={Boolean(errors.category)}
      >
        <InputLabel id='category'>Category</InputLabel>
        <Select
          name='category'
          id='category'
          value={values.category}
          label='Category'
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.category}</FormHelperText>
      </FormControl>
      <TextField
        id='openingDate'
        label='Opening Date'
        value={values.openingDate}
        onChange={handleChange}
        min={moment().format('YYYY-MM-DD')}
        type='date'
        InputLabelProps={{
          style: {
            top: `-10px` ,
          },
        }}
        error={Boolean(errors.openingDate)}
        helperText={errors.openingDate}
        variant='filled'
        rows={2}
      />
      <TextField
        id='closingDate'
        label='Closing Date'
        value={values.closingDate}
        onChange={handleChange}
        inputProps={{
          min: values.openingDate,
        }}
        style={{marginLeft:'15px'}}
        type='date'
        InputLabelProps={{
          style: {
            top: `-10px` ,
          },
        }}
        variant='filled'
        error={Boolean(errors.closingDate)}
        helperText={errors.closingDate}
      />
      <Button type='submit' variant='contained' style={{width:'100%',marginTop:'10px'}}>{data ? 'Update' : 'Add'}</Button>
    </form>
  )
}

export default Input
