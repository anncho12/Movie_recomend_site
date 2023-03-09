import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

function Detail(){
    const {id}=useParams();//url주소 얻기
    const [loading, setLoading]=useState(true);
    const [movie, setMovie]=useState([]);
    console.log(id);
    const getMovie=async()=>{
        const json=await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(movie.genres);
        setLoading(false);
    }
    useEffect(()=>{getMovie();},[])
    return (
        <div >
            {loading?<strong>loading...</strong>:
                <div className={styles.bigContainer}>
                    <img src={movie.large_cover_image} alt={movie.title} className={styles.poster}></img>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                    <h1 className={styles.title}>{movie.title} ({movie.year})</h1>
                    <h3 className={styles.h3}>Genres</h3>
                    <ul className={styles.ul}>
                        {movie.genres.map((g, index)=><li key={index} style={{display:'inline', marginLeft:'10px'}}>{g}</li>)}
                    </ul>
                    <h3 className={styles.h3}>Info</h3>
                    <div className={styles.iconContainer}>
                        <div style={{textAlign: 'center'}}>
                            <img src={require('./Detail_images/star.png')} alt='star' className={styles.icon}/>
                            <div >Rating: {movie.rating}</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <img src={require('./Detail_images/time.png')} alt='time' className={styles.icon}/>
                            <div>Run time: {movie.runtime}</div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <img src={require('./Detail_images/like.png')} alt='like' className={styles.icon}/>
                            <div>like: {movie.like_count}</div>
                        </div>
                    </div>
                    <h3 className={styles.h3}>Description</h3>
                    <p className={styles.summury}>{movie.description_full}</p>
                    </div>
                </div>
            }  
        </div>
    );
}

export default Detail;