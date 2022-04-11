
import "./SensorCard.css"
const SensorCard = (props) => {

    const { sensor } = props;
    return (
        <div className="sensorCard">
            <table className="tableSensor">
                <thead>
                    <tr className="colorHead">
                        <td>ID</td>
                        <td>Marca</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{sensor._id}</td>
                        <td>{sensor.brand}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SensorCard