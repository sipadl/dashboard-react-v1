import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="header bg-light p-2">
            <div className="d-flex justify-content-end">
                <div className='mx-3 d-flex'>
                    <img src='https://placehold.co/50' className='rounded-circle' style={{width:'50px', height:'50px', objectFit:'cover'}} alt="https://placehold.co/50" />
                    <div className='d-inline mx-2'>
                        <p className='h5 m-0 p-0'>Administrator</p>
                        <small className="m-0 p-0">Admin</small>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
