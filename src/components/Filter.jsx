import classNames from 'classnames';
import 'bulma/css/bulma.css';

export const Filter = (props) => {
    const {value, onChange} = props;

    return (
        <div className='panel-tabs'>
            <button
                onClick={() => onChange('ALL')}
                className={classNames({'is-active': value === 'ALL'})}
            >All</button>
            <button
                onClick={() => onChange('TODO')}
                className={classNames({'is-active': value === '1TODO'})}
            >ToDo</button>
            <button
                onClick={() => onChange('DONE')}
                className={classNames({'is-active': value === 'DONE'})}
            >Done</button>
        </div>
    );
}

export default Filter;
