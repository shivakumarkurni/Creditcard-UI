import React, { Component } from 'react';
import axios from 'axios';

class GenerateOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpData: {
                // referenceNo:'',
                beneficiaryId: '',
                otp: ''
            }
        }
    }

    handleOtp = (event) => {
        const { otpData } = this.state;
        otpData[event.target.name] = event.target.value;
        this.setState({ otpData });
        console.log(otpData);
    }

    validateOtp = () => {
        const { otpData } = this.state;
        console.log(otpData);
        //this.props.history.push('./addPayee');
        axios.get('http://10.117.189.248/8087/fundtransfer/test/12/234').then((response) => {
            console.log(response);
            alert(response.data.message);
            if (response.data.statusCode !== 400) {
               // this.props.history.push('./payeeList');
            }
        }).catch(function (err) {
            console.log(err);
            alert(err);
        })
    }

    render() {
        console.log(this.state.referenceNo);
        return (
            <div className="otptablesize">
                <table className="table">
                    <tbody>
                        {/* <tr>
                            <td><label>Reference.No:</label></td>
                            <td><input type="number" name="referenceNo" onChange={this.handleOtp} value={this.state.referenceNo}/></td>
                        </tr> */}
                        <tr>
                            <td><label>Benificiary Id</label></td>
                            <td><input type="number" name="beneficiaryId" onChange={this.handleOtp} /></td>
                        </tr>
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" name="otp" onChange={this.handleOtp} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GenerateOtp;