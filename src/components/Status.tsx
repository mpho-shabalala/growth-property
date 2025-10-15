
import './status.css';

export default function status({status, statusText}: {status: boolean, statusText: string}) {
    return (
        <p className={`
            statusStyle
            ${status? 'green lighten-1' : 'red lighten-1'}`}>
            {statusText}
        </p>

    )
}