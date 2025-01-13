import { FadeLoader } from 'react-spinners';
import './Loading.css';
const Loading = () => {
    return (
        <div className='loading'>
            <FadeLoader color='#343330' height={15} loading radius={2} width={6} margin={0} />
        </div>
    );
};

export default Loading;
