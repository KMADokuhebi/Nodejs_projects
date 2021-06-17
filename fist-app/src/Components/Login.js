import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Login = () => {
    const [loginn, setloginn] = useState(false)


    const [User, setUser] = useState({
        username: "",
        password: ""

    })


    const [check, setcheck] = useState(false)

    const [fillmessage, setfillfillmessage] = useState({
        status: true,
        body: {
            fillmessage: "login ok"
        }
    })



    const onHandleLogin = () => {
        if (User.username === "" || User.password === "") {
            setcheck(true)
            setfillfillmessage({
                status: false,
                body: {
                    fillmessage: "error"
                }
            })

        } else {
            setcheck(true)
            setfillfillmessage({
                status: true,
                body: {
                    fillmessage: "login ok"
                }
            })
            // goi api tra ve user , o day luon dung
            let res = {
                status: true,
                body: {
                    message: 'login success',
                    data: {
                        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthaXRvcnlvdWdhIn0.LEioYnH7T0eZtrWR3iLt3dBMutlKCFwQkrvCYdgs1ME"

                    }
                }
            }
            // check lai backend tra ve dung k
            if (res.status === true) {
                setcheck(true)
                cookies.set('jwt', res.body.data.jwt)

            }


        }


    }
    // check cookues
    useEffect(() => {
        try {


            if (cookies.get('jwt') !== undefined) {
                // 'const jwt = cookies.get('Jwt')'
                // goi len back end de giai ma cho ra user name pass ro check database roi gui lai frontend
                const ress = {
                    status: true,
                    body: {
                        message: '',
                        data: {
                            username: 'dokuhebi'
                        }
                    }
                }


                if (ress.status === true) {
                    setloginn(true)
                    setUser({ ...User, username: ress.body.data.username })
                }
                else {
                    setloginn(false)
                    setUser('no one')
                }
            }
        } catch (error) {
            console.log(error)
        }

    }, [loginn])

    console.log(loginn)
    console.log(User.username)




    return (


        <Grid container justify="center" spacing={8} style={{ marginTop: '1em' }}>
            <Grid item xs={8}>
                <TextField onChange={(e) => setUser({ ...User, username: e.target.value })} id="#outlined-basic" label="Username" variant="outlined" />

            </Grid>
            <Grid item xs={8}>
                <TextField onChange={(e) => setUser({ ...User, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" />
            </Grid>
            <Grid item xs={8}>
                <Button onClick={onHandleLogin} variant="contained">Login</Button>

            </Grid >


            {
                check && (
                    <Grid item xs={8}>
                        <Alert severity={(fillmessage.status && 'success') || 'error'} > {fillmessage.body.fillmessage}</Alert>
                    </Grid>
                )
            }
            <Grid item xs={8}>
                {
                    loginn && <h1>Hello, {User.username}</h1>

                }

            </Grid>



        </Grid >



    )
}
export default Login;