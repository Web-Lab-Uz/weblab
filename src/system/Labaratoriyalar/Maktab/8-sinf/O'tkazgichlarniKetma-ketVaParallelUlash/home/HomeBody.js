import React, { useRef, useEffect, Component, useState } from 'react';
import { Table, ButtonGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Container, Row, Col, Button, CardText, Card, CardColumns, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../style/main.scss';



export default function HomeBody() {
    const [massa, setMassa] = useState(5);

    function oshishMassa() {
        setMassa(massa + 1)
    }

    function kamayishMassa() {
        setMassa(massa - 1)
    }

    const [bikrlik, setBikrlik] = useState(50000);

    function oshishBikrlik() {
        setBikrlik(bikrlik + 100)
    }

    function kamayishBikrlik() {
        setBikrlik(bikrlik - 100)
    }

    // Chiziladigan yuza
    let ctxwidth = 600;
    let ctxheight = 500;
    let ctxcolor = '#ffffff'

    // sharcha
    let qutiColor = '#468df5'
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

    let minbikrlik = bikrlik - 0.3 * bikrlik / 100
    let maxbikrlik = bikrlik + 0.3 * bikrlik / 100
    let mindeformatsiya = ((9.81 * massa / minbikrlik) * 10000)
    let maxdeformatsiya = ((9.81 * massa / maxbikrlik) * 10000)

    function natijaOlish() {
        switch (navbatQiymati) {
            case 0:
                setdisplaytr1(" ");
                setx2y2Value(massa)
                setx3y2Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 1:
                setx4y2Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 2:
                setx5y2Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 3:
                setdisplaytr2(" ");
                setx2y3Value(massa)
                setx3y3Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 4:
                setx4y3Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 5:
                setx5y3Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 6:
                setdisplaytr3(" ");
                setx2y4Value(massa)
                setx3y4Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 7:
                setx4y4Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 8:
                setx5y4Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 9:
                setdisplaytr4(" ");
                setx2y5Value(massa)
                setx3y5Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 10:
                setx4y5Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 11:
                setx5y5Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 12:
                setdisplaytr5(" ");
                setx2y6Value(massa)
                setx3y6Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 13:
                setx4y6Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 14:
                setx5y6Value(((mindeformatsiya + ((maxdeformatsiya - mindeformatsiya) * (Math.floor(Math.random() * 8) + 2))) / 100).toFixed(5))
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 15:
                alert("yangi natija olish uchun sahifani qaytadan yuklang")
                break;
        }
    }

    const [osilishNuqtasiX, setOsilishNuqtasiX] = useState(80)
    const [osilishNuqtasidX, setOsilishNuqtasidX] = useState(40)
    const [osilishNuqtasiY, setOsilishNuqtasiY] = useState(50)
    const [osilishNuqtasidY, setOsilishNuqtasidY] = useState(20)
    const [widthYuk, setWidthYuk] = useState(50)
    const [heightYuk, setHeightYuk] = useState(50)

    // sharcha
    var x = 0
    var dctx = 0;

    function harakat() {
        dctx = 0;
        x = 1
    }

    const App = props => {

        const canvasRef = useRef()

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
            ctx.moveTo(50, 50)
            ctx.lineTo(150, 50)
            ctx.closePath()

            let qiymat1 = (9.81 * massa / minbikrlik) * 10000

            switch (x) {
                case 0:
                    ctx.moveTo(osilishNuqtasiX, osilishNuqtasiY)
                    ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 2 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 3 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 4 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 5 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 6 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 7 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 8 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 9 * osilishNuqtasidY)
                    ctx.lineTo(osilishNuqtasiX * 6 / 5, osilishNuqtasiY + 9.5 * osilishNuqtasidY)
                    ctx.stroke()
                    ctx.fillStyle = qutiColor
                    ctx.fillRect(osilishNuqtasiX * 6 / 5 - widthYuk / 2, osilishNuqtasiY + 9.5 * osilishNuqtasidY, widthYuk, heightYuk)
                    break;
                case 1:
                    if ((dctx) < qiymat1) {
                        ctx.moveTo(osilishNuqtasiX, osilishNuqtasiY)
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 2 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 3 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 4 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 5 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 6 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 7 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 8 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 9 * (osilishNuqtasidY + dctx))
                        ctx.lineTo(osilishNuqtasiX * 6 / 5, osilishNuqtasiY + 9.5 * (osilishNuqtasidY + dctx))
                        ctx.stroke()
                        ctx.fillStyle = qutiColor
                        ctx.fillRect(osilishNuqtasiX * 6 / 5 - widthYuk / 2, osilishNuqtasiY + 9.5 * (osilishNuqtasidY + dctx), widthYuk, heightYuk)
                    } else {
                        ctx.moveTo(osilishNuqtasiX, osilishNuqtasiY)
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 2 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 3 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 4 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 5 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 6 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 7 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX, osilishNuqtasiY + 8 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX + osilishNuqtasidX, osilishNuqtasiY + 9 * (osilishNuqtasidY + qiymat1))
                        ctx.lineTo(osilishNuqtasiX * 6 / 5, osilishNuqtasiY + 9.5 * (osilishNuqtasidY + qiymat1))
                        ctx.stroke()
                        ctx.fillStyle = qutiColor
                        ctx.fillRect(osilishNuqtasiX * 6 / 5 - widthYuk / 2, osilishNuqtasiY + 9.5 * (osilishNuqtasidY + qiymat1), widthYuk, heightYuk)
                    }
                    break;

            }


        }

        useEffect(() => {

            const canvas = canvasRef.current
            const context = canvas.getContext('2d');

            canvas.style.width = `${ctxwidth}px`;
            canvas.style.height = `${ctxheight}px`;

            canvas.width = ctxwidth * 1.1
            canvas.height = ctxheight * 1.1

            let animationFrameId

            const render = () => {
                dctx += (9.81 * massa / minbikrlik) * 100
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
                                    <CardTitle>Yuk massasi = {massa} kg</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishMassa}>+</button>
                                        <button onClick={kamayishMassa}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Bikrlik = {bikrlik} N/m</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishBikrlik}>+</button>
                                        <button onClick={kamayishBikrlik}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Erkin tushish tezlanishi = 9.81 m/s<sup>2</sup></CardTitle>
                                    <br />
                                    <Button color="warning">
                                        <Link to="/prujinabikrligi/malumot">Ma'lumot</Link>
                                    </Button>
                                    <Button onClick={harakat} color="info" className="mx-2">Tekshirish</Button>
                                    <Button onClick={natijaOlish} color="primary" className="mx-2">Natija olish</Button>
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
                                        <th>l<sub>1</sub>, sm</th>
                                        <th>l<sub>2</sub>, sm</th>
                                        <th>l<sub>3</sub>, sm</th>
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