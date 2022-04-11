
import "./SensorCard.css"
const SensorCard = () => {
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
                        <td>FAGAS4</td>
                        <td>Movius</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SensorCard