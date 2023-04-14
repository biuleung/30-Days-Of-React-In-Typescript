import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from './Stats.module.scss';
import { faBarChart } from '@fortawesome/free-solid-svg-icons';

function Stats() {
    return (
        <div className="d-flex justify-content-center">
            <div className={Style.statsIcons}>
                <FontAwesomeIcon className='fa-3x fa-rotate-270' icon={faBarChart} />
            </div>
        </div>
    );
}

export default Stats;
