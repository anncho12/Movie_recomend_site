import PropTyeps from 'prop-types';
import styles from './Movie.module.css';
import {Link} from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres, movie_url}){
    if (summary.length>500){console.log(summary.length, title)}
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={coverImg} alt={title}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Link 
                        to={`/movie/${id}`} 
                        style={{textDecoration:'none', color:'black'}}>
                        {title}
                    </Link>
                </div>
                <ul style={{paddingLeft:'10px'}}>
                    {genres.map((g, index)=><li key={index}  style={{display:'inline', marginLeft:'10px'}}>{g}</li>)}
                </ul>
                <p style={{margin:'2px 0px 2px 0px'}}>
                    {summary.length>350?`${summary.slice(0,350)}...`:summary}
                </p>
                <h6><a href={movie_url} target='_blank' >go to YTX ({title})</a></h6>
            </div>
        </div>
    )
}

Movie.propTypes={
    id:PropTyeps.number.isRequired,
    coverImg:PropTyeps.string.isRequired,
    title:PropTyeps.string.isRequired,
    summary:PropTyeps.string.isRequired,
    genres:PropTyeps.arrayOf(PropTyeps.string).isRequired,
    movie_url: PropTyeps.string.isRequired,
};

export default Movie;