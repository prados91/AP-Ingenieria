import { FadeLoader } from 'react-spinners';
//import './Loading.css';
import classes from './Loading.module.css';
const Loading = () => {
    return (
        <div className={classes.loading}>
            <FadeLoader color='#343330' height={15} loading radius={2} width={6} margin={0} />
        </div>
    );
};

export default Loading;
