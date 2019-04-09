import Tegridy, {render, useState} from 'tegridy'

const MyFunctionalComponent = (props) => {
    const [number, setState] = useState(1);

    setTimeout(() => {
        setState(number+1)
    }, 1000);

    return (
        <div>
            <h1 style={{color: 'green'}}>Hello {props.name} here is your number: {number}</h1>
            <p className={'my-class'}>let's Code with tegridy</p>
        </div>
    )
};

const rootElement = document.querySelector('#root');

render(<MyFunctionalComponent name={'liron'}/>, rootElement);
