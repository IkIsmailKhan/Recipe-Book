import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RecipeDetails = ({ recipeDetail }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLink = () => {
        window.open(recipeDetail.url);
    };

    return (
        <>
            {!recipeDetail.url ? <Card
                sx={{ width: 545, height: 500 }}
                className='recipe-card mb-5 shadow bg-body rounded d-flex align-items-center justify-content-center'>
                <CardContent className='d-flex flex-column align-items-center'>
                    <Typography fontSize={30} fontWeight={500}>
                        RecipeBook
                    </Typography>
                    <Typography fontSize={15} >
                        Ingredients
                    </Typography>
                </CardContent>
            </Card>
                :
                <Card sx={{ width: 545 }} className='recipe-card mb-5 shadow bg-body rounded'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <div>
                                    <div className='text-center' style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                        {recipeDetail.totalTime}
                                    </div>
                                    <div className='text-center' style={{ fontSize: '10px' }}>
                                        MIN
                                    </div>
                                </div>
                            </Avatar>
                        }
                        title={<Typography fontSize={18} fontWeight='bold'>{recipeDetail.label}</Typography>}
                        subheader={recipeDetail.cuisineType}
                    />
                    <CardMedia
                        component="img"
                        height="294"
                        image={recipeDetail.image}
                        alt="dish"
                    />
                    <CardContent>
                        <Typography className='mb-1' variant="body1" color="text.primary">
                            Ingredients
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary">
                            {recipeDetail.ingredientLines}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share" onClick={handleLink}>
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent className='row '>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    Dish Type
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.dishType?recipeDetail.dishType:0}
                                </Typography>
                            </div>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    Meal Type
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.mealType?recipeDetail.mealType:0}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent className='row'>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    calories
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.calories?recipeDetail.calories:0}
                                </Typography>
                            </div>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    Diet Labels
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.dietLabels?recipeDetail.dietLabels:0}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent className='row'>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    Total Time
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.totalTime?recipeDetail.totalTime:0}
                                </Typography>
                            </div>
                            <div className='col'>
                                <Typography className='mb-1 mt-1' variant="body1" color="text.primary">
                                    Total Weight
                                </Typography>
                                <Typography
                                    variant="body2" color="text.secondary">
                                    {recipeDetail.totalWeight?recipeDetail.totalWeight:0}
                                </Typography>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>


            }
        </>

    );
}

export default RecipeDetails