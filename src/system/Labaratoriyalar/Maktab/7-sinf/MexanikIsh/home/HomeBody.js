import React, { useRef, useEffect, Component, useState } from 'react';
import { Table, ButtonGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Container, Row, Col, Button, CardText, Card, CardColumns, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../style/main.scss';



export default function HomeBody() {
    const [balandlik, setBalandlik] = useState(50);

    function oshishbalandlik() {
        setBalandlik(balandlik + 1)
    }

    function kamayishbalandlik() {
        setBalandlik(balandlik - 1)
    }

    const [uzunlik, setUzunlik] = useState(80);

    function oshishuzunlik() {
        setUzunlik(uzunlik + 1)
    }

    function kamayishuzunlik() {
        setUzunlik(uzunlik - 1)
    }

    const [yukMassasi, setYukMassasi] = useState(100);

    function oshishYukMassasi() {
        setYukMassasi(yukMassasi + 1)
    }

    function kamayishYukMassasi() {
        setYukMassasi(yukMassasi - 1)
    }


    // Natijalalarni ko'rchatish scripti
    const [navbatQiymati, setnavbatQiymati] = useState(0);
    const [displaytr1, setdisplaytr1] = useState("d-none");
    const [displaytr2, setdisplaytr2] = useState("d-none");
    const [displaytr3, setdisplaytr3] = useState("d-none");
    const [displaytr4, setdisplaytr4] = useState("d-none");
    const [displaytr5, setdisplaytr5] = useState("d-none");

    const [x2y2Value, setx2y2Value] = useState(null);
    const [x3y2Value, setx3y2Value] = useState(null);
    const [x4y2Value, setx4y2Value] = useState(null);
    const [x5y2Value, setx5y2Value] = useState(null);
    const [x6y2Value, setx6y2Value] = useState(null);
    const [x2y3Value, setx2y3Value] = useState(null);
    const [x3y3Value, setx3y3Value] = useState(null);
    const [x4y3Value, setx4y3Value] = useState(null);
    const [x5y3Value, setx5y3Value] = useState(null);
    const [x6y3Value, setx6y3Value] = useState(null);
    const [x2y4Value, setx2y4Value] = useState(null);
    const [x3y4Value, setx3y4Value] = useState(null);
    const [x4y4Value, setx4y4Value] = useState(null);
    const [x5y4Value, setx5y4Value] = useState(null);
    const [x6y4Value, setx6y4Value] = useState(null);
    const [x2y5Value, setx2y5Value] = useState(null);
    const [x3y5Value, setx3y5Value] = useState(null);
    const [x4y5Value, setx4y5Value] = useState(null);
    const [x5y5Value, setx5y5Value] = useState(null);
    const [x6y5Value, setx6y5Value] = useState(null);
    const [x2y6Value, setx2y6Value] = useState(null);
    const [x3y6Value, setx3y6Value] = useState(null);
    const [x4y6Value, setx4y6Value] = useState(null);
    const [x5y6Value, setx5y6Value] = useState(null);
    const [x6y6Value, setx6y6Value] = useState(null);

    function natijaOlish() {
        switch (navbatQiymati) {
            case 0:
                setdisplaytr1(" ");
                setnavbatQiymati(navbatQiymati + 1)
                setx2y2Value(yukMassasi)
                setx3y2Value(9.81 * yukMassasi)
                setx4y2Value(balandlik)
                setx5y2Value((9.81 * yukMassasi *  ishqalanishKoeffitsienti).toFixed(2))
                setx6y2Value(uzunlik)
                break;
            case 1:
                setdisplaytr2(" ");
                setnavbatQiymati(navbatQiymati + 1)
                setx2y3Value(yukMassasi)
                setx3y3Value(9.81 * yukMassasi)
                setx4y3Value(balandlik)
                setx5y3Value((9.81 * yukMassasi *  ishqalanishKoeffitsienti).toFixed(2))
                setx6y3Value(uzunlik)
                break;
            case 2:
                setdisplaytr3(" ");
                setnavbatQiymati(navbatQiymati + 1)
                setx2y4Value(yukMassasi)
                setx3y4Value(9.81 * yukMassasi)
                setx4y4Value(balandlik)
                setx5y4Value((9.81 * yukMassasi *  ishqalanishKoeffitsienti).toFixed(2))
                setx6y4Value(uzunlik)
                break;
            case 3:
                setdisplaytr4(" ");
                setnavbatQiymati(navbatQiymati + 1)
                setx2y5Value(yukMassasi)
                setx3y5Value(9.81 * yukMassasi)
                setx4y5Value(balandlik)
                setx5y5Value((9.81 * yukMassasi *  ishqalanishKoeffitsienti).toFixed(2))
                setx6y5Value(uzunlik)
                break;
            case 4:
                setdisplaytr5(" ");
                setnavbatQiymati(navbatQiymati + 1)
                setx2y6Value(yukMassasi)
                setx3y6Value(9.81 * yukMassasi)
                setx4y6Value(balandlik)
                setx5y6Value((9.81 * yukMassasi *  ishqalanishKoeffitsienti).toFixed(2))
                setx6y6Value(uzunlik)
                break;
            case 5:
                alert("yangi natija olish uchun sahifani qaytadan yuklang")
                break;
        }
    }

    // Chiziladigan yuza
    let ctxwidth = 600;
    let ctxheight = 500;
    let ctxcolor = '#ffffff'

    // balandlik - h 
    let balandlikh = 450 - 4 * balandlik;

    // uzunlik - s
    let uzunliks = 50 + 4 * uzunlik;

    const [ishqalanishKoeffitsienti, setishqalanishKOeffitsienti] = useState(0.009);

    // sharcha
    let sharchaColor = 'red'
    var x = 0
    var dctx = 0;

    function harakat() {
        x = 1
        dctx = 0
    }

    const App = props => {

        const canvasRef = useRef()

        let alfa = Math.atan(balandlik / uzunlik)

        const draw = (ctx, dctx) => {

            ctx.fillStyle = ctxcolor
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(0, ctxheight)
            ctx.lineTo(ctxwidth, ctxheight)
            ctx.lineTo(ctxwidth, 0)
            ctx.closePath()
            ctx.stroke()
            ctx.fill()

            ctx.strokeStyle = '#00ffff'
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.moveTo(30, 450)
            ctx.lineTo(uzunliks, 450)
            ctx.closePath()
            ctx.stroke()
            
            ctx.strokeStyle = '#00ffff'
            ctx.beginPath()
            ctx.moveTo(ctxwidth - 50, 450)
            ctx.lineTo(ctxwidth - 50, balandlikh)
            ctx.closePath()
            ctx.stroke()
            
            switch (x){
                case 0:

                ctx.fillStyle = "red"
                    ctx.beginPath()
                    ctx.rect(50, 410, 40, 40);
                    ctx.fill()
                    ctx.closePath()
        
                    ctx.fillStyle = "red"
                    ctx.beginPath()
                    ctx.rect(508, 400, 40, 40);
                    ctx.fill()
                    ctx.closePath()

                    break;
                case 1:
                    if(50 + dctx < uzunliks - 70){
                        ctx.fillStyle = "red"
                        ctx.beginPath()
                        ctx.rect(50 + dctx, 410, 40, 40);
                        ctx.fill()
                        ctx.closePath()

                        ctx.fillStyle = "red"
                        ctx.beginPath()
                        ctx.rect(508, 400, 40, 40);
                        ctx.fill()
                        ctx.closePath()
    
                    } else{
                        ctx.fillStyle = "red"
                        ctx.beginPath()
                        ctx.rect(uzunliks - 70, 410, 40, 40);
                        ctx.fill()
                        ctx.closePath()

                        if(dctx + 50 - uzunliks + 70 < 450 - balandlikh + 60 - 120){
                            ctx.fillStyle = "red"
                            ctx.beginPath()
                            ctx.rect(508, 400 - (dctx + 50 - uzunliks + 70), 40, 40);
                            ctx.fill()
                            ctx.closePath()

                        } else{
                            ctx.fillStyle = "red"
                            ctx.beginPath()
                            ctx.rect(508, 450 - balandlikh + 60, 40, 40);
                            ctx.fill()
                            ctx.closePath()
                        }
                    }
                    break;
            }

        }

        useEffect(() => {

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')

            canvas.style.width = `${ctxwidth}px`;
            canvas.style.height = `${ctxheight}px`;

            canvas.width = ctxwidth * 1.1
            canvas.height = ctxheight * 1.1

            let animationFrameId

            const render = () => {
                dctx ++ 
                draw(context, dctx)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()

            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }, [draw])

        return <canvas ref={canvasRef} {...props} />
    }

    return (
        <>
            <Container className="mexanik-ish">
                <Row>
                    <Col md="6" className="umumiyMaydon">
                        <App />
                    </Col>
                    <Col md="6">
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Balandlik = {balandlik} sm</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishbalandlik}>+</button>
                                        <button onClick={kamayishbalandlik}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Uzunlik = {uzunlik} sm</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishuzunlik}>+</button>
                                        <button onClick={kamayishuzunlik}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                            <CardBody>
                                    <CardTitle>Yuk massasi = {yukMassasi} g</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishYukMassasi}>+</button>
                                        <button onClick={kamayishYukMassasi}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Ishqalanish koeffitsienti = {ishqalanishKoeffitsienti}</CardTitle>
                                    <Button color="warning">
                                        <Link to="/mexanikish/malumot">Ma'lumot</Link>
                                    </Button>
                                    <Button color="info" className="mx-2" onClick={harakat}>Tekshirish</Button>
                                    <Button color="primary" className="mx-2" onClick={natijaOlish}>Natija olish</Button>
                                    <Button color="success">Hisoblash</Button>
                                </CardBody>
                            </Card>
                        </CardColumns>
                        <div className="natijalarmaydoni kurinish1">
                            <Table hover dark>
                                <thead>
                                    <tr className={displaytr1}>
                                        <th>#</th>
                                        <th>m, kg</th>
                                        <th>F<sub>og'</sub>, N</th>
                                        <th>h, sm</th>
                                        <th>F<sub>t</sub>, N</th>
                                        <th>s, m</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={displaytr1}>
                                        <th scope="row">1</th>
                                        <td>{x2y2Value}</td>
                                        <td>{x3y2Value}</td>
                                        <td>{x4y2Value}</td>
                                        <td>{x5y2Value}</td>
                                        <td>{x6y2Value}</td>
                                    </tr>
                                    <tr className={displaytr2}>
                                        <th scope="row">2</th>
                                        <td>{x2y3Value}</td>
                                        <td>{x3y3Value}</td>
                                        <td>{x4y3Value}</td>
                                        <td>{x5y3Value}</td>
                                        <td>{x6y3Value}</td>
                                    </tr>
                                    <tr className={displaytr3}>
                                        <th scope="row">3</th>
                                        <td>{x2y4Value}</td>
                                        <td>{x3y4Value}</td>
                                        <td>{x4y4Value}</td>
                                        <td>{x5y4Value}</td>
                                        <td>{x6y4Value}</td>
                                    </tr>
                                    <tr className={displaytr4}>
                                        <th scope="row">4</th>
                                        <td>{x2y5Value}</td>
                                        <td>{x3y5Value}</td>
                                        <td>{x4y5Value}</td>
                                        <td>{x5y5Value}</td>
                                        <td>{x6y5Value}</td>
                                    </tr>
                                    <tr className={displaytr5}>
                                        <th scope="row">5</th>
                                        <td>{x2y6Value}</td>
                                        <td>{x3y6Value}</td>
                                        <td>{x4y6Value}</td>
                                        <td>{x5y6Value}</td>
                                        <td>{x6y6Value}</td>
                                    </tr>
                                </tbody>
                            </Table></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}