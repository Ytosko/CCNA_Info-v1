import React, { Component } from 'react';
import './Login.css';
import $ from 'jquery';
import * as firebase from 'firebase';
import nodemailer from 'nodemailer';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const override = css`display: block; margin: 0 auto; border-color: #3D94F6;`;

var firebaseConfig = {
    apiKey: "AIzaSyCqRBXisvw_76iCFf0NAtbBgErbaA5AgII",
    authDomain: "ccna-f2c07.firebaseapp.com",
    databaseURL: "https://ccna-f2c07.firebaseio.com",
    projectId: "ccna-f2c07",
    storageBucket: "ccna-f2c07.appspot.com",
    messagingSenderId: "33426470764",
    appId: "1:33426470764:web:9161687057ad1a936c6549",
    measurementId: "G-EXGHK7EX9K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};
var xo = 0;
export class Home extends Component {
    static displayName = Home.name;


    constructor(props) {
        super(props);
        const $ = window.$;

        this.state = {
            loading: true
        };
    }
    runlog() {
        var doxy = document.getElementById("username-field1");
        if (typeof (doxy) != 'undefined' && doxy != null) {
            document.getElementById("loading").style.display = "grid";
            var name = doxy.value;
            var email = document.getElementById("username-field2").value;
            console.log(name + " " + email);
            var consolas = 0;
            firebase.database().ref("/").orderByKey().once("value").then(function (snapshot) {

                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();

                    var xof = childSnapshot.val().Key;

                    var name_val = childSnapshot.val().Name;
                    var id_val = childSnapshot.val().Email;

                    if (name == name_val && email == id_val) {
                        console.log(key);
                        consolas++;


                        var template_params = {
                            "reply_to": "Saiki Sarkar",
                            "to_name": name_val,
                            "code": xof
                        }

                        var service_id = "default_service";
                        var template_id = "template_HsUEilJq";
                        window.emailjs.send(service_id, template_id, template_params).then(res => {
                            document.getElementById("sos").style.display = "none";
                            document.getElementById("lukacupi").style.display = "grid";
                            window.alert("The verification code is sent to your email address\nPlease check both the inbox and spam folder for the code");
                            xo = 1;
                            document.getElementById("loading").style.display = "none";
                        }).catch(err => console.error('Failed to send feedback. Error: ', err));
                    }

                });
            }).then(success => {
                if (consolas == 0) {
                    window.alert("Wrong info");
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("lukacupi").style.display = "none";
                    xo = 1;
                }
            });
        }
    }
    runlogup() {
        var xui = document.getElementById("username-field3");
        if (typeof (xui) != 'undefined' && xui != null) {
            document.getElementById("loading").style.display = "grid";
            var code = xui.value;
            var consolas = 0;
            firebase.database().ref("/").orderByKey().once("value").then(function (snapshot) {

                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();

                    var xof = childSnapshot.val().Key;

                    var name_val = childSnapshot.val().Name;
                    var id_val = childSnapshot.val().Email;
                    var pass_val = childSnapshot.val().pass;

                    if (code == xof) {
                        consolas = 1;
                        document.getElementById("wrapper").style.display = "grid";
                        var msg = "Name : " + name_val + "\nEmail : " + id_val + "\nPassword : " + pass_val;
                        document.getElementById("text").value = msg;
                        document.getElementById("sei").style.display = "none";
                        document.getElementById("text").readOnly = true;
                        xo = 1;
                        document.getElementById("loading").style.display = "none";
                    }
                });
            }).then(success => {
                if (consolas == 0) {
                    window.alert("Please try again");
                    document.getElementById("wrapper").style.display = "none";
                    xo = 1;
                    document.getElementById("loading").style.display = "none";
                }
            });
        }
    }
    runclose() {
        window.close();
    }
    render() {
        return (
            <div id="hui">
                <div id="jio">
                    <div>
                        <form id="login-form" onSubmit = "return false">
                            <h1>CSE 2nd Major 2016-17</h1>
                            <br />
                            <div className="huix" id = "loading">
                                <BeatLoader
                                    css={override}
                                    size={20}
                                    color={"#3D94F6"}
                                    loading={this.state.loading}
                                /><span id="wor">Please wait</span>
                            </div>
                            <div id="sos">
                                <br />
                                <br />
                                <input type="text" name="username" id="username-field1" class="login-form-field" placeholder="Name" />
                                <br />
                                <input type="text" name="email" id="username-field2" class="login-form-field" placeholder="E-mail" />
                                <br />
                                <button type="reset" id="login-form-submit" onClick={() => this.runlog()}>Get Code</button>
                            </div>
                            <br />

                            <div id="lukacupi">
                                <div id="sei">
                                    <input type="text" name="username" id="username-field3" class="login-form-field" placeholder="Enter Code" />
                                    <br />
                                    <button type="reset" id="logup-form-submitx" onClick={() => this.runlogup()}> Get password </button>
                                </div>
                                <br />
                                <div id="wrapper">
                                    <textarea placeholder="Share something" id="text" name="text" rows="3"></textarea>
                                    <br />
                                    <button type="reset" id="logup-form-submit" onClick={() => this.runclose()}> Close </button>
                                    <br />
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
