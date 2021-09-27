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

    const [uzunlik, setUzunlik] = useState(100);

    function oshishuzunlik() {
        setUzunlik(uzunlik + 1)
    }

    function kamayishuzunlik() {
        setUzunlik(uzunlik - 1)
    }

    // ishqalanish koeffitsienti
    const [ishqalanishKoeffitsienti, setishqalanishKOeffitsienti] = useState(0.009);

    // function oshishishqalanishKOeffitsienti() {
    //     setishqalanishKOeffitsienti(ishqalanishKOeffitsienti + 1)
    // }

    // function kamayishishqalanishKOeffitsienti() {
    //     setishqalanishKOeffitsienti(ishqalanishKOeffitsienti - 1)
    // }

    // qiyalik
    let qiyalik = Math.round(Math.sqrt((balandlik * balandlik + uzunlik * uzunlik)))
    let yaxlitlashXonasi = 1000
    let qiyalikBurchagi = Math.round((Math.atan(balandlik / uzunlik)) * 180 / Math.PI * yaxlitlashXonasi) / yaxlitlashXonasi;

    // const [qiyalikBurchagi, setqiyalikBurchagi] = useState(Math.round((Math.atan(balandlik / uzunlik)) * 180 / Math.PI * yaxlitlashXonasi) / yaxlitlashXonasi);

    // function oshishqiyalikBurchagi() {
    //     setqiyalikBurchagi(qiyalikBurchagi + 1)
    // }

    // function kamayishqiyalikBurchagi() {
    //     setqiyalikBurchagi(qiyalikBurchagi - 1)
    // }

    // Chiziladigan yuza
    let ctxwidth = 600;
    let ctxheight = 500;
    let ctxcolor = '#ffffff'

    // balandlik - h 
    let balandlikh = 450 - 4 * balandlik;

    // uzunlik - s
    let uzunliks = 50 + 4 * uzunlik;

    // sharcha
    let sharchaColor = 'red'
    var x = 0
    var dctx = 0;

    function harakat() {
        x = 1
        dctx = 0
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
    const [x2y3Value, setx2y3Value] = useState(null);
    const [x3y3Value, setx3y3Value] = useState(null);
    const [x4y3Value, setx4y3Value] = useState(null);
    const [x5y3Value, setx5y3Value] = useState(null);
    const [x2y4Value, setx2y4Value] = useState(null);
    const [x3y4Value, setx3y4Value] = useState(null);
    const [x4y4Value, setx4y4Value] = useState(null);
    const [x5y4Value, setx5y4Value] = useState(null);
    const [x2y5Value, setx2y5Value] = useState(null);
    const [x3y5Value, setx3y5Value] = useState(null);
    const [x4y5Value, setx4y5Value] = useState(null);
    const [x5y5Value, setx5y5Value] = useState(null);
    const [x2y6Value, setx2y6Value] = useState(null);
    const [x3y6Value, setx3y6Value] = useState(null);
    const [x4y6Value, setx4y6Value] = useState(null);
    const [x5y6Value, setx5y6Value] = useState(null);

    let alfaburchak = ((Math.atan(balandlik / uzunlik)) * 180 / Math.PI);

    let aniqtezlanish = (9.81 * (Math.sin(alfaburchak * Math.PI / 180) - 0.009 * Math.cos(alfaburchak * Math.PI / 180)));
    let mintezlanish = aniqtezlanish - 0.3 * aniqtezlanish / 100;
    let maxtezlanish = aniqtezlanish + 0.3 * aniqtezlanish / 100;
    let minvaqt = (Math.sqrt(2 * Math.sqrt((balandlik * balandlik + uzunlik * uzunlik) / 10000) / mintezlanish));
    let maxvaqt = (Math.sqrt(2 * Math.sqrt((balandlik * balandlik + uzunlik * uzunlik) / 10000) / maxtezlanish));


    function natijaOlish() {
            switch (navbatQiymati) {
                case 0:
                    setdisplaytr1(" ");
                    setx2y2Value(qiyalik)
                    setnavbatQiymati(navbatQiymati + 1)
                    setx3y2Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    break;
                case 1:
                    setx4y2Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 2:
                    setx5y2Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 3:
                    setdisplaytr2(" ");
                    setx2y3Value(qiyalik)
                    setx3y3Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 4:
                    setx4y3Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 5:
                    setx5y3Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 6:
                    setdisplaytr3(" ");
                    setx2y4Value(qiyalik)
                    setx3y4Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 7:
                    setx4y4Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 8:
                    setx5y4Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 9:
                    setdisplaytr4(" ");
                    setx2y5Value(qiyalik)
                    setx3y5Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 10:
                    setx4y5Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 11:
                    setx5y5Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 12:
                    setdisplaytr5(" ");
                    setx2y6Value(qiyalik)
                    setx3y6Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 13:
                    setx4y6Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 14:
                    setx5y6Value((minvaqt + ((maxvaqt - minvaqt) * (Math.floor(Math.random() * 8) + 2))).toFixed(5))
                    setnavbatQiymati(navbatQiymati + 1)
                    break;
                case 15:
                    alert("yangi natija olish uchun sahifani qaytadan yuklang")
                    break;
            }
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
            ctx.moveTo(50, 450)
            ctx.lineTo(uzunliks, 450)
            ctx.lineTo(50, balandlikh)
            ctx.closePath()
            ctx.stroke()

            let shart1 = 65 + dctx * Math.cos(alfa);
            let let1 = balandlikh - 15 + dctx * Math.sin(alfa)
            let ikkiPi = 2 * Math.PI

            ctx.fillStyle = sharchaColor
            ctx.beginPath()
            switch (x) {
                case 0:
                    ctx.arc(50 + 15, balandlikh - 15, 20, 0, ikkiPi, true)
                    break;
                case 1:
                    if ((shart1) < (uzunliks + 10)) {
                        ctx.arc(shart1, let1, 20, 0, ikkiPi, true)
                    } else {
                        if ((shart1) < (uzunliks + 50)) {
                            ctx.arc(shart1, 450 - 15, 20, 0, ikkiPi, true)
                        } else {
                            ctx.arc(uzunliks + 65, 450 - 15, 20, 0, ikkiPi, true)
                        }
                    }
                    break;
            }
            ctx.closePath()
            ctx.fill()
        }

        useEffect(() => {

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')

            canvas.style.width = `${ctxwidth}px`;
            canvas.style.height = `${ctxheight}px`;

            canvas.width = ctxwidth * 1.1
            canvas.height = ctxheight * 1.1

            let tezlatgich = 3
            let animationFrameId

            const render = () => {
                let shart = 65 + (dctx) * Math.cos(alfa);
                if ((shart) < 100) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa)
                } else if ((shart) < 150) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 1 * tezlatgich
                } else if ((shart) < 200) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 2 * tezlatgich
                } else if ((shart) < 250) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 3 * tezlatgich
                } else if ((shart) < 300) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 4 * tezlatgich
                } else if ((shart) < 350) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 5 * tezlatgich
                } else if ((shart) < 400) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 6 * tezlatgich
                } else if ((shart) < 450) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 7 * tezlatgich
                } else if ((shart) < 500) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 8 * tezlatgich
                } else if ((shart) < 550) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 9 * tezlatgich
                } else if ((shart) < 600) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 10 * tezlatgich
                } else if ((shart) < 650) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 11 * tezlatgich
                } else if ((shart) < 700) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 12 * tezlatgich
                } else if ((shart) < 750) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 13 * tezlatgich
                } else if ((shart) < 800) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 14 * tezlatgich
                } else if ((shart) < 850) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 15 * tezlatgich
                } else if ((shart) < 900) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 16 * tezlatgich
                } else if ((shart) < 950) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 17 * tezlatgich
                } else if ((shart) < 1000) {
                    dctx += ((uzunliks - 50) / 1000) / Math.sin(alfa) + 18 * tezlatgich
                } else {
                }

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
            <Container className="tekistezlanuvchanharakat">
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
                                    <CardTitle>Uzunlik = {qiyalik} sm</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishuzunlik}>+</button>
                                        <button onClick={kamayishuzunlik}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Qiyalik burchagi = {qiyalikBurchagi}&#176;</CardTitle>
                                    <CardTitle>Ishqalanish koeffitsienti = {ishqalanishKoeffitsienti} sm</CardTitle>
                                    <Button color="warning">
                                        <Link to="/tekistezlanuvchanharakat/malumot">Ma'lumot</Link>
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
                                        <th>s, sm</th>
                                        <th>t<sub>1</sub>, s</th>
                                        <th>t<sub>2</sub>, s</th>
                                        <th>t<sub>3</sub>, s</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={displaytr1}>
                                        <th scope="row">1</th>
                                        <td>{x2y2Value}</td>
                                        <td>{x3y2Value}</td>
                                        <td>{x4y2Value}</td>
                                        <td>{x5y2Value}</td>
                                    </tr>
                                    <tr className={displaytr2}>
                                        <th scope="row">2</th>
                                        <td>{x2y3Value}</td>
                                        <td>{x3y3Value}</td>
                                        <td>{x4y3Value}</td>
                                        <td>{x5y3Value}</td>
                                    </tr>
                                    <tr className={displaytr3}>
                                        <th scope="row">3</th>
                                        <td>{x2y4Value}</td>
                                        <td>{x3y4Value}</td>
                                        <td>{x4y4Value}</td>
                                        <td>{x5y4Value}</td>
                                    </tr>
                                    <tr className={displaytr4}>
                                        <th scope="row">4</th>
                                        <td>{x2y5Value}</td>
                                        <td>{x3y5Value}</td>
                                        <td>{x4y5Value}</td>
                                        <td>{x5y5Value}</td>
                                    </tr>
                                    <tr className={displaytr5}>
                                        <th scope="row">5</th>
                                        <td>{x2y6Value}</td>
                                        <td>{x3y6Value}</td>
                                        <td>{x4y6Value}</td>
                                        <td>{x5y6Value}</td>
                                    </tr>
                                </tbody>
                            </Table></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}