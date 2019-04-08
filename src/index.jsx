import Tegridy, {render} from 'tegridy'

const jsx = (
    <div>
        <h1 style={'color: green'}>hello tegridy</h1>
        <p onClick={() => console.log('hello')}>just another javascript framework</p>
    </div>
);

const rootElement = document.querySelector('#root');

render(jsx, rootElement);
