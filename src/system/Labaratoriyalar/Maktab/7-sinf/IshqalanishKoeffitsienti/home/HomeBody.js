import React, { useRef, useEffect,  useState } from 'react';
import { Table,  Container, Row, Col, Button, Card, CardColumns, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../style/main.scss';



export default function HomeBody() {
    const [ishqalanishKoeffitsienti, setIshqalanishKoeffitsienti] = useState(90);

    function oshishIshqalanishKoeffitsienti() {
        setIshqalanishKoeffitsienti(ishqalanishKoeffitsienti + 1)
    }

    function kamayishIshqalanishKoeffitsienti() {
        setIshqalanishKoeffitsienti(ishqalanishKoeffitsienti - 1)
    }

    const [yukMassasi, setYukMassasi] = useState(10);

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
    const [displaytr6, setdisplaytr6] = useState("d-none");
    const [displaytr7, setdisplaytr7] = useState("d-none");
    const [displaytr8, setdisplaytr8] = useState("d-none");
    const [displaytr9, setdisplaytr9] = useState("d-none");
    const [displaytr10, setdisplaytr10] = useState("d-none");

    const [x2y2Value, setx2y2Value] = useState(null);
    const [x3y2Value, setx3y2Value] = useState(null);
    const [x2y3Value, setx2y3Value] = useState(null);
    const [x3y3Value, setx3y3Value] = useState(null);
    const [x2y4Value, setx2y4Value] = useState(null);
    const [x3y4Value, setx3y4Value] = useState(null);
    const [x2y5Value, setx2y5Value] = useState(null);
    const [x3y5Value, setx3y5Value] = useState(null);
    const [x2y6Value, setx2y6Value] = useState(null);
    const [x3y6Value, setx3y6Value] = useState(null);
    const [x2y7Value, setx2y7Value] = useState(null);
    const [x3y7Value, setx3y7Value] = useState(null);
    const [x2y8Value, setx2y8Value] = useState(null);
    const [x3y8Value, setx3y8Value] = useState(null);
    const [x2y9Value, setx2y9Value] = useState(null);
    const [x3y9Value, setx3y9Value] = useState(null);
    const [x2y10Value, setx2y10Value] = useState(null);
    const [x3y10Value, setx3y10Value] = useState(null);
    const [x2y11Value, setx2y11Value] = useState(null);
    const [x3y11Value, setx3y11Value] = useState(null);

    let minIshqalanishKoeffitsienti = ishqalanishKoeffitsienti - 0.3 * ishqalanishKoeffitsienti / 100;
    let maxIshqalanishKoeffitsienti = ishqalanishKoeffitsienti + 0.3 * ishqalanishKoeffitsienti / 100;

    let minSirpanishIshqalanishKuchi = minIshqalanishKoeffitsienti * yukMassasi * 9.81;
    let maxSirpanishIshqalanishKuchi = maxIshqalanishKoeffitsienti * yukMassasi * 9.81;

    function natijaOlish() {
        switch (navbatQiymati) {
            case 0:
                setdisplaytr1(" ")
                setx2y2Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y2Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 1:
                setdisplaytr2(" ")
                setx2y3Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y3Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 2:
                setdisplaytr3(" ")
                setx2y4Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y4Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 3:
                setdisplaytr4(" ")
                setx2y5Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y5Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 4:
                setdisplaytr5(" ")
                setx2y6Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y6Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 5:
                setdisplaytr6(" ")
                setx2y7Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y7Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 6:
                setdisplaytr7(" ")
                setx2y8Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y8Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 7:
                setdisplaytr8(" ")
                setx2y9Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y9Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 8:
                setdisplaytr9(" ")
                setx2y10Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y10Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 9:
                setdisplaytr10(" ")
                setx2y11Value(yukMassasi / 100)
                setnavbatQiymati(navbatQiymati + 1)
                setx3y11Value((((minSirpanishIshqalanishKuchi + ((maxSirpanishIshqalanishKuchi - minSirpanishIshqalanishKuchi) * (Math.floor(Math.random() * 8) + 2)))) / 1000000).toFixed(7))
                break;
            case 10:
                alert("yangi natija olish uchun sahifani qaytadan yuklang")
                break;
        }
    }

    let ctxwidth = 600;
    let ctxheight = 500;
    let ctxcolor = '#ffffff'
    let zoom = 1.1

    // harakat
    var x = 0
    var dctx = 0;

    function harakat() {
        x = 1
        dctx = 0
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

            ctx.strokeStyle='blue';
            
            ctx.beginPath()
            ctx.moveTo(50, zoom * ctxheight - zoom * 100 + 10)
            ctx.lineTo(zoom * (ctxwidth - 100), zoom * ctxheight - zoom * 100 + 10)
            ctx.rect(50 + 50, zoom * ctxheight - zoom * 100 - 50, 75, 60);
            ctx.closePath()
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(50 + 50 + 75, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.lineTo(50 + 50 + 75 + 50, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.arc(50 + 50 + 75 + 50 + 10 , zoom * ctxheight - zoom * 100 - 50 + 25, 10, Math.PI, 3/2 *Math.PI, true)
            ctx.moveTo(50 + 50 + 75 + 50 + 10 + 10 +10 , zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.arc(50 + 50 + 75 + 50 + 10 + 10 , zoom * ctxheight - zoom * 100 - 50 + 25, 10, 0, 1/2 *Math.PI, true)
            ctx.moveTo(50 + 50 + 75 + 50 + 10 + 10 + 10, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.lineTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.arc(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 30, zoom * ctxheight - zoom * 100 - 50 + 25, 30, Math.PI, 3 * Math.PI, false)
            ctx.moveTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 60, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.lineTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 40 + 30, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.closePath()
            ctx.stroke()

            ctx.fillStyle = "blue"
            ctx.beginPath()
            ctx.lineTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 40 + 40, zoom * ctxheight - zoom * 100 - 50 + 25)
            ctx.lineTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 40 + 30, zoom * ctxheight - zoom * 100 - 50 + 25 + 10)
            ctx.lineTo(50 + 50 + 75 + 50 + 10 + 10 + 10 + 50 + 40 + 30, zoom * ctxheight - zoom * 100 - 50 + 25 - 10)
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
            

        }

        useEffect(() => {

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')

            canvas.style.width = `${ctxwidth}px`;
            canvas.style.height = `${ctxheight}px`;

            canvas.width = ctxwidth * zoom
            canvas.height = ctxheight * zoom

            let animationFrameId

            const render = () => {
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
            <Container className="ishqalanishkoeffitsienti">
                <Row>
                    <Col md="6" className="umumiyMaydon">
                        <App />
                    </Col>
                    <Col md="6">
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Ishqalanish koeffitsienti - µ = {ishqalanishKoeffitsienti / 10000}</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishIshqalanishKoeffitsienti}>+</button>
                                        <button onClick={kamayishIshqalanishKoeffitsienti}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Yuk massasi - m = {yukMassasi / 100} kg</CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={oshishYukMassasi}>+</button>
                                        <button onClick={kamayishYukMassasi}>-</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Erkin tushish tezlanishi - g = 9.81 m/s<sup>2</sup></CardTitle>
                                    <br />
                                    <Button color="warning">
                                        <Link to="/ishqalanishkoeffitsienti/malumot">Ma'lumot</Link>
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
                                        <th>F<sub>i(s)</sub>, N</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={displaytr1}>
                                        <th scope="row">1</th>
                                        <td>{x2y2Value}</td>
                                        <td>{x3y2Value}</td>
                                    </tr>
                                    <tr className={displaytr2}>
                                        <th scope="row">2</th>
                                        <td>{x2y3Value}</td>
                                        <td>{x3y3Value}</td>
                                    </tr>
                                    <tr className={displaytr3}>
                                        <th scope="row">3</th>
                                        <td>{x2y4Value}</td>
                                        <td>{x3y4Value}</td>
                                    </tr>
                                    <tr className={displaytr4}>
                                        <th scope="row">4</th>
                                        <td>{x2y5Value}</td>
                                        <td>{x3y5Value}</td>
                                    </tr>
                                    <tr className={displaytr5}>
                                        <th scope="row">5</th>
                                        <td>{x2y6Value}</td>
                                        <td>{x3y6Value}</td>
                                    </tr>
                                    <tr className={displaytr6}>
                                        <th scope="row">6</th>
                                        <td>{x2y7Value}</td>
                                        <td>{x3y7Value}</td>
                                    </tr>
                                    <tr className={displaytr7}>
                                        <th scope="row">7</th>
                                        <td>{x2y8Value}</td>
                                        <td>{x3y8Value}</td>
                                    </tr>
                                    <tr className={displaytr8}>
                                        <th scope="row">8</th>
                                        <td>{x2y9Value}</td>
                                        <td>{x3y9Value}</td>
                                    </tr>
                                    <tr className={displaytr9}>
                                        <th scope="row">9</th>
                                        <td>{x2y10Value}</td>
                                        <td>{x3y10Value}</td>
                                    </tr>
                                    <tr className={displaytr10}>
                                        <th scope="row">10</th>
                                        <td>{x2y11Value}</td>
                                        <td>{x3y11Value}</td>
                                    </tr>
                                </tbody>
                            </Table></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}