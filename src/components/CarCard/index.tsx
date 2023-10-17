import './styles.css'
import carImg from '../../assets/car-card 1.png'

export default function CarCard() {
    return (
        <div className="dct-card">
            <img src={carImg} alt="Carro" />
            <p>Lorem ipsum dolor</p>
        </div>
    );
}