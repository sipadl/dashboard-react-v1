import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './View/Home';

export default class Index extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
  }
}
