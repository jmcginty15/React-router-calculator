import { useParams } from 'react-router-dom';
import doMath from './helpers';

const Math = () => {
    const { operation, num1, num2 } = useParams();
    console.log(operation, num1, num2);
    const result = doMath(operation, parseInt(num1), parseInt(num2));

    return (
        <div>{result}</div>
    )
}

export default Math;