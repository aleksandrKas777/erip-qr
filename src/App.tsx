import React, {useState} from 'react';
import './App.css';
import {QR} from "./components/QR";
import html2canvas from "html2canvas";

const download = function (canvas: HTMLCanvasElement) {
    const link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
}

function App() {

    const [value, setValue] = useState('')

    const getImg = () => {
        if (value.length === 0) return
        html2canvas(document.querySelector("#capture")!).then(canvas => {
            download(canvas)
            setValue('')
        })
    }


    return (
        <div className="App">
            <main onClick={getImg} id={'capture'}>
                <QR value={value}/>

            </main>

            <div className={'block-input'}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <button>clear</button>
            </div>


        </div>
    );
}

export default App;
