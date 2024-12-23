import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { StatCardProps } from '../lib/defn';
import '../styles/cards/cards.css';

const StatCard = ({ title, icon, total, stat, change, duration }: StatCardProps) => {
    return (
        <div className="stat_card-wrapper">
            <div className="stat_card-container">
                <div className="stat_card-icon-container">
                    <span>{icon}</span>
                </div>
                <div className='stat_card-info-container'>
                    <div className='stat_card-title'>{title}</div>
                    <div className='stat_card-total'>{total}</div>
                    <div className={`stat_card-percentage ${change}`}>
                        <span>{change === 'positive' ? <FaArrowUp /> : <FaArrowDown />}</span>
                        <span style={{ fontWeight: 'bold' }}>{stat}%</span>
                        <span style={{ color: '#292D32' }}>{duration} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
