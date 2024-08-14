import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Metode, Transaksi} from './View'

export default class Index extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashbor" element={<Home />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/metode_pembayaran" element={<Metode />} />
            </Routes>
        </BrowserRouter>
    )
  }
}
