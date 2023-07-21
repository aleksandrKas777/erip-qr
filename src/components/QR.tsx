import QRCode from "react-qr-code";



export const QR = ({value}: {value: string}) => {

    return (
        <div className={'qr-code'}>
            <ul>
                <ol className={'top'}>
                    <li className={'left'}></li>
                    <li className={'right'}></li>
                </ol>
                <ol className={'bot'} style={{alignItems: 'end'}}>
                    <li className={'left'}></li>
                    <li className={'right'}></li>
                </ol>

            </ul>
            {value.length > 0 && <QRCode size={256}
                     style={{height: "100%", maxWidth: "100%", width: "auto", padding: "5px"}}
                     value={value}
                     viewBox={`0 0 256 256`}/>}
        </div>
    )
}
