import React, { useRef, useEffect, Component, useState } from 'react';
import { Table, ButtonGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Container, Row, Col, Button, CardText, Card, CardColumns, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../style/main.scss';



export default function HomeBody() {
    const [shakl, setShakl] = useState(" ");

    function shaklUzgarishKub() {
        setShakl("Kub")
        twoCardBodyOn()
        setOneValue("Kub tomoni: a")
        setTwoCardTitle("d-none")
        setOneSeeValue(kubTomoni)
        setMassa(kubTomoni * kubTomoni * kubTomoni / 100);
    }
    function shaklUzgarishShar() {
        setShakl("Shar")
        twoCardBodyOn()
        setOneValue("Shar radiusi: R")
        setTwoCardTitle("d-none")
        setOneSeeValue(sharRadiusi)
        setMassa(4 / 3 * sharRadiusi * sharRadiusi * sharRadiusi * Math.PI / 100)
    }
    function shaklUzgarishSilindr() {
        setShakl("Silindr")
        twoCardBodyOn()
        setOneValue("Silindr balandligi: H")
        setTwoCardTitle(" ")
        setTwoValue("Silindr asosining radiusi: r")
        setOneSeeValue(silindrBalandligi)
        setTwoSeeValue(silindrRadiusi)
        setMassa(Math.PI * silindrRadiusi * silindrRadiusi * silindrBalandligi / 100)
    }

    const [twoCardBody, setTwoCardBody] = useState("d-none");
    const [twoCardTitle, setTwoCardTitle] = useState("d-none");

    const [oneValue, setOneValue] = useState(" ");
    const [twoValue, setTwoValue] = useState(" ");

    const [oneSeeValue, setOneSeeValue] = useState(" ");
    const [twoSeeValue, setTwoSeeValue] = useState(" ");

    const [kubTomoni, setKubTomoni] = useState(5);
    const [sharRadiusi, setSharRadiusi] = useState(4);
    const [silindrBalandligi, setSilindrBalandligi] = useState(3);
    const [silindrRadiusi, setSilindrRadiusi] = useState(2);

    function twoCardBodyOn() {
        setTwoCardBody(" ")
    }

    function oshishFunksiyasi() {
        switch (shakl) {
            case "Kub":
                setKubTomoni(kubTomoni + 1)
                setOneSeeValue(kubTomoni + 1)
                break;
            case "Shar":
                setSharRadiusi(sharRadiusi + 1)
                setOneSeeValue(sharRadiusi + 1)
                break;
            case "Silindr":
                setSilindrBalandligi(silindrBalandligi + 1)
                setOneSeeValue(silindrBalandligi + 1)
                break;
        }
    }
    function kamayishFunksiyasi() {
        switch (shakl) {
            case "Kub":
                setKubTomoni(kubTomoni - 1)
                setOneSeeValue(kubTomoni - 1)
                break;
            case "Shar":
                setSharRadiusi(sharRadiusi - 1)
                setOneSeeValue(sharRadiusi - 1)
                break;
            case "Silindr":
                setSilindrBalandligi(silindrBalandligi - 1)
                setOneSeeValue(silindrBalandligi - 1)
                break;
        }
    }

    function oshishSilindrAsosiRadiusi() {
        setSilindrRadiusi(silindrRadiusi + 1)
        setTwoSeeValue(silindrRadiusi + 1)
    }
    function kamayishSilindrAsosiRadiusi() {
        setSilindrRadiusi(silindrRadiusi - 1)
        setTwoSeeValue(silindrRadiusi - 1)
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
    const [x2y3Value, setx2y3Value] = useState(null);
    const [x2y4Value, setx2y4Value] = useState(null);
    const [x2y5Value, setx2y5Value] = useState(null);
    const [x2y6Value, setx2y6Value] = useState(null);

    const [massa, setMassa] = useState(" ");

    function massaniAniqlash() {
        switch (shakl) {
            case "Kub":
                setMassa(kubTomoni * kubTomoni * kubTomoni / 100);
                break;
            case "Shar":
                setMassa(4 / 3 * sharRadiusi * sharRadiusi * sharRadiusi * Math.PI / 100)
                break;
            case "Silindr":
                setMassa(Math.PI * silindrRadiusi * silindrRadiusi * silindrBalandligi / 100)
                break;
        }
    }


    function natijaOlish() {
        massaniAniqlash()
        switch (navbatQiymati) {
            case 0:
                setdisplaytr1(" ");
                setx2y2Value(massa)
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 1:
                setdisplaytr2(" ");
                setx2y3Value(massa)
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 2:
                setdisplaytr3(" ");
                setx2y4Value(massa)
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 3:
                setdisplaytr4(" ");
                setx2y5Value(massa)
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 4:
                setdisplaytr5(" ");
                setx2y6Value(massa)
                setnavbatQiymati(navbatQiymati + 1)
                break;
            case 5:
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
            ctx.moveTo(200, 130)
            ctx.lineTo(200, 350)
            ctx.closePath();
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(150, 350)
            ctx.lineTo(250, 350)
            ctx.closePath()
            ctx.stroke()
            let qiymat1 = (9.81 * massa / 1) * 10000

            switch (x) {
                case 0:
                    ctx.moveTo(70, 150)
                    ctx.lineTo(330, 150)
                    ctx.lineTo(330, 220)
                    ctx.lineTo(290, 270)
                    ctx.lineTo(370, 270)
                    ctx.lineTo(330, 220)
                    ctx.moveTo(70, 150)
                    ctx.lineTo(70, 220)
                    ctx.lineTo(30, 270)
                    ctx.lineTo(110, 270)
                    ctx.lineTo(70, 220)
                    ctx.stroke()
                    switch (shakl) {
                        case "kub":
                            ctx.fillStyle = "red"
                            ctx.rect(50, 260, kubTomoni, kubTomoni)
                            ctx.fill()
                            break;
                    }
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
                dctx += (9.81 * massa / 1) * 100
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
            <Container className="massaniulchash">
                <Row>
                    <Col md="6" className="umumiyMaydon">
                        <App />
                    </Col>
                    <Col md="6">
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Yuk shakli = {shakl} </CardTitle>
                                    <div className="tugmalar-jamlanmasi">
                                        <button onClick={shaklUzgarishKub}>kub</button>
                                        <button onClick={shaklUzgarishShar}>shar</button>
                                        <button onClick={shaklUzgarishSilindr}>silindr</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className=" ">
                                <CardBody className={twoCardBody}>
                                    <CardTitle className="oneValueClass">{oneValue} = {oneSeeValue} sm
                                        <div className="tugmalar-jamlanmasi">
                                            <button onClick={oshishFunksiyasi}>+</button>
                                            <button onClick={kamayishFunksiyasi}>-</button>
                                        </div>
                                    </CardTitle>
                                    <CardTitle className={twoCardTitle}>{twoValue} = {twoSeeValue} sm
                                        <div className="tugmalar-jamlanmasi">
                                            <button onClick={oshishSilindrAsosiRadiusi}>+</button>
                                            <button onClick={kamayishSilindrAsosiRadiusi}>-</button>
                                        </div>
                                    </CardTitle>
                                    <br />
                                    <Button color="warning">
                                        <Link to="/shayinlitaroziyordamidajismmassasi/malumot">Ma'lumot</Link>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={displaytr1}>
                                        <th scope="row">1</th>
                                        <td>{x2y2Value}</td>
                                    </tr>
                                    <tr className={displaytr2}>
                                        <th scope="row">2</th>
                                        <td>{x2y3Value}</td>
                                    </tr>
                                    <tr className={displaytr3}>
                                        <th scope="row">3</th>
                                        <td>{x2y4Value}</td>
                                    </tr>
                                    <tr className={displaytr4}>
                                        <th scope="row">4</th>
                                        <td>{x2y5Value}</td>
                                    </tr>
                                    <tr className={displaytr5}>
                                        <th scope="row">5</th>
                                        <td>{x2y6Value}</td>
                                    </tr>
                                </tbody>
                            </Table></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}