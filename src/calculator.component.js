import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button } from 'react-bootstrap';

export const Calculator = () =>{

    const handleClick = (ev) => {
        let clicked = ev.target.textContent;
        switch (clicked) {
            case "1":
                
                break;
        
            default:
                break;
        }
    }


    return(
        <>
        <div className="row">
            <div className="col-12 calc rounded">
                <div className="row">
                    <div className="col-12 mt-3">
                        <p id='display1'></p>
                    </div>
                    <div className="col-12 mt-3">
                        <p id='display2'></p>
                    </div>
                </div>
            </div>
            {/* first row */}
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">1</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">2</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">3</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Add</Button>
            </div>
            {/* second row */}
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">4</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">5</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">6</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Sub</Button>
            </div>
            {/* third row */}
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">7</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">8</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">9</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Mul</Button>
            </div>
            {/* fourth row */}
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">00</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">0</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Sqr</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Div</Button>
            </div>
            {/* fifth row */}
            <div className="col-12">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">=</Button>
            </div>
        </div>
        </>
    );
}