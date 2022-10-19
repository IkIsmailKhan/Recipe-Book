import React, { useState } from "react";
import { useSelector } from 'react-redux';
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";
import CircularProgress from '@mui/material/CircularProgress';

const RecipeSection = () => {
    const recipes = useSelector(state => state.recipes.data)
    const loading = useSelector(state => state.recipes.loading)

    const [recipeDetail, setRecipeDetail] = useState({})

    return (
        <div className="row">
            <div className="col-4 overflow-scroll hide-scroll-bar" style={{ height: '92vh' }}>
                <div className="d-flex flex-column align-items-center pt-5">
                    {loading ? <CircularProgress /> :
                        recipes.hits?.length === 0 ? <div>No Result Found</div> : recipes.hits?.map((item) => (
                            <div key={item.recipe.url} onClick={() => setRecipeDetail(item.recipe)}>
                                <RecipeCard recipe={item.recipe} />
                            </div>
                        ))}
                </div>
            </div>
            <div className="col-8" style={{ borderLeft: '1px solid #dedede' }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '91vh' }}>
                    <RecipeDetails recipeDetail={recipeDetail}/>
                </div>
            </div>
        </div>
    )
}

export default RecipeSection;