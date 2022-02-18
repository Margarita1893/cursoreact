export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src="images/uploads/mv1.jpg" alt />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">
                    {props.titulo}
                </a></h6>

                <p className="rate"><i className="ion-android-star" />
                <span>{props.calificacion}</span> /10</p>
                <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                <p className="run-time"> Duracion: {props.duracion}’    .     <span>MMPA: PG-13 </span>    . 
                <span>Fecha:{props.fecha}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Actores: <a href="#">{props.actores}</a></p>
            </div>
        </div>
    )
}