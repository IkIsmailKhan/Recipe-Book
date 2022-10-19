import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ width: 345 }} className='recipe-card mb-5 shadow bg-body rounded'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <div>
              <div className='text-center' style={{ fontSize: '14px', fontWeight: 'bold' }}>
                {recipe.totalTime}
              </div>
              <div className='text-center' style={{ fontSize: '10px' }}>
                MIN
              </div>
            </div>
          </Avatar>
        }
        title={<Typography fontSize={18} fontWeight='bold'>{recipe.label}</Typography>}
        subheader={recipe.cuisineType}
      />
      <CardMedia
        component="img"
        height="150"
        image={recipe.image}
        alt="dish"
      />
      <CardContent className='row'>
        <div className='col'>
          <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
            Health
          </Typography>
          <Typography sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
            variant="body2" color="text.secondary">
            {recipe.healthLabels}
          </Typography>
        </div>
        <div className='col'>
          <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
            Ingredients
          </Typography>
          <Typography sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
            variant="body2" color="text.secondary">
            {recipe.ingredientLines}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecipeCard



