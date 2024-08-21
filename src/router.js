import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Devices, Edc, Home, Merchant, Metode, Refund, Settlement, SoundBox, Transaksi} from './View'

export default class Index extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashbor" element={<Home />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/metode_pembayaran" element={<Metode />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/settlement" element={<Settlement />} />
                <Route path="/perangkat" element={<Devices />} />
                <Route path="/sound_box" element={<SoundBox />} />
                <Route path="/Edc" element={<Edc />} />
                <Route path="/Merchant" element={<Merchant />} />

            </Routes>
        </BrowserRouter>
    )
  }
}
