import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button } from 'react-bootstrap';

export const Calculator = () =>{

    var calcu = {
        a : '',
        b : '',
        op : '',
        result : '',
        isOp : false,
        all : ''
    }

    const handleClick = (ev) => {
        var clicked = ev.target.textContent;
        var d1 = document.getElementById('display1');
        var d2 = document.getElementById('display2');

        switch (clicked) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "00":
                if(calcu.isOp===false){
                    calcu.a += clicked;
                    calcu.all = calcu.a + calcu.op + calcu.b;
                    d2.innerHTML = calcu.all;
                }
                else if(calcu.isOp===true){
                    calcu.b += clicked;
                    calcu.all =  calcu.a + calcu.op + calcu.b;
                    d2.innerHTML = calcu.all;
                }
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if(calcu.isOp=== false){
                    calcu.op = clicked;
                    calcu.all =  calcu.a + calcu.op + calcu.b;
                    d2.innerHTML = calcu.all;
                    calcu.isOp = true;
                }
                else if(calcu.isOp===true){
                    toast('We only allow simple binary operations.', {position: "top-center"});
                }
                break;
            case "Del":
                calcu.all = calcu.all.slice(0,calcu.all.length-1);
                d2.innerHTML = calcu.all;
                break;
            case "=":
                calcu.result = eval(calcu.all);
                d2.innerHTML = calcu.result;
                d1.innerHTML = calcu.all;
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
                    <div className="col-12 mt-3 mb-2">
                        <p id='display1'></p>
                    </div>
                    <div className="col-12">
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
                <Button className='fullbtn' onClick={handleClick} variant="secondary">+</Button>
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
                <Button className='fullbtn' onClick={handleClick} variant="secondary">-</Button>
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
                <Button className='fullbtn' onClick={handleClick} variant="secondary">*</Button>
            </div>
            {/* fourth row */}
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">00</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">0</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">Del</Button>
            </div>
            <div className="col-3">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">/</Button>
            </div>
            {/* fifth row */}
            <div className="col-12">
                <Button className='fullbtn' onClick={handleClick} variant="secondary">=</Button>
            </div>
        </div>
        </>
    );
}