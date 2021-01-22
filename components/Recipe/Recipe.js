import RecipeStyled from './Recipe.Styled';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export default function Recipe(props){
    return(
        <div>
            <style jsx>{RecipeStyled}</style>

            <Header title={`TreinaCook - ${props.name}`}/>

            <article className="recipe-body">
                <h1 className="recipe-name">{props.name}</h1>

                <img className="recipe-picture" src={props.picture} alt={props.name}/>

                <div>
                    <i className="fas fa-stopwatch fa-fw"/> Preparo: {props.time} <br/>
                    <i className="fas fa-utensils fa-fw"/> Rendimento: {props.servings}
                </div>

                {props.children}
            </article>

            <Footer/>
        </div>
    )
}