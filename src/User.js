import { useState } from 'react';

function User(props) {
    const [val, setVal] = useState(0);

    const upBoth = () => {
        props.setHomeVal(props.homeVal + 1)
        setVal(val + 1)
    }

    return <>    <button onClick={() => upBoth()}>Click</button>
        <p>{props.name}       value   {val}
        </p>
    </>
}

export default User;