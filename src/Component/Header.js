import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="header bg-light p-2">
            <div className="d-flex justify-content-end">
                <div className='mx-3'>
                    <img src='https://placehold.co/50' className='rounded-circle' style={{width:'50px', height:'50px', objectFit:'cover'}} alt="https://placehold.co/50" />
                </div>
            </div>
        </div>
        )
    }
}
