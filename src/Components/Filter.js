import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { areas, categories } from '../redux/data'
import { filterArea, filterCategory, filterDate, resetFilter } from '../redux/shopSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [area, setArea] = useState(false)
  const [category, setCategory] = useState(false)
  const [cancel,setCancel] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const openArea = () => {
    setArea(!area)
    setCategory(false)
  }
  const openCategory = () => {
    setCategory(!category)
    setArea(false)
  }
  const getArea = (area) => {
    dispatch(filterArea(area))
    setCancel(true)
  }
  const getCategory = (category) => {
    dispatch(filterCategory(category))
    setCancel(true)
  }
  const getOpened = () => {
    dispatch(filterDate(Date.now()))
    setCancel(true) 
  }
  const cancelFilter = () => {
    dispatch(resetFilter())
    setCancel(false)
  }

  return (
    <Container sx={{ pt: 3 }} maxWidth='lg'>
      <Button
        variant='outlined'
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filter By
      </Button>
      {cancel && 
      <Button color='error' onClick={cancelFilter}>Cancel</Button>
      }
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Button onClick={openArea} sx={{ width: '100%' }}>
          Area
        </Button>
        {area &&
          areas.map((area) => (
            <MenuItem
              key={area}
              style={{ backgroundColor: 'lightgray' }}
              onClick={() => getArea(area)}
            >
              {area}
            </MenuItem>
          ))}
        <Button onClick={openCategory} sx={{ width: '100%' }}>
          Category
        </Button>
        {category &&
          categories.map((category) => (
            <MenuItem
              key={category}
              style={{ backgroundColor: 'lightgray' }}
              onClick={() => getCategory(category)}
            >
              {category}
            </MenuItem>
          ))}
          <Button onClick={() => getOpened()} sx={{ width: '100%' }}>
          Opened
        </Button>
      </Menu>
    </Container>
  )
}

export default Filter
