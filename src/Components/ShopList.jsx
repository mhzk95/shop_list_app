import { Card,CardContent,Typography,Grid,Container, CardActions,Button } from '@mui/material'
import {useSelector,useDispatch} from 'react-redux'
import { deleteShop } from '../redux/shopSlice'
import BasicModal from './Modal'



const ShopList = () => {
  const dispatch = useDispatch()
  const shopDetails = useSelector(state => {
    let filter = state.shop.filtered
    if(filter) return filter
    return state.shop.value
  })
  return (
    <Container sx={{py: 2}} maxWidth='lg'>
    <Grid container spacing={4}>
    {shopDetails.map((shop) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={shop.id} >
    <Card style={{backgroundColor:'rgb(222, 224, 227)'}}>
        <CardContent>
            <Typography>Name: {shop.name}</Typography>
            <Typography>Area: {shop.area}</Typography>
            <Typography>Category: {shop.category}</Typography>
            <Typography>Opening Date: {shop.openingDate}</Typography>
            <Typography>Closing Date: {shop.closingDate}</Typography>
        </CardContent>
        <CardActions>
            <BasicModal edit={true} data={shop}/>
            <Button color='error' onClick={() => dispatch(deleteShop(shop.id))}>Delete</Button>
        </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </Container>
  )
}

export default ShopList