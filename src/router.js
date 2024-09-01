import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Acquiring, BiayaTambahan, Daftar, Devices, Edc, Home, Issuser, Login, LupaPassword, MDR, Metode, Pengguna, Peran, Refund, Settlement, SoundBox, Transaksi, Void, UbahKataSandi, Onboarding} from './View'

export default class Index extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/daftar" element={<Daftar />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/lupa-password" element={<LupaPassword />} />
                <Route path="/ubah-password" element={<UbahKataSandi />} />
                <Route path="/dashbor" element={<Home />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/metode_pembayaran" element={<Metode />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/settlement" element={<Settlement />} />
                <Route path="/perangkat" element={<Devices />} />
                <Route path="/qr_soundbox" element={<SoundBox />} />
                <Route path="/edc" element={<Edc />} />
                <Route path="/issuser" element={<Issuser />} />
                <Route path="/void" element={<Void />} />
                <Route path="/acquiring" element={<Acquiring />} />
                <Route path="/pengguna" element={<Pengguna />} />
                <Route path="/peran" element={<Peran />} />
                <Route path="/merchant_discount_rate" element={<MDR />} />
                <Route path="/biaya_tambahan" element={<BiayaTambahan />} />

            </Routes>
        </BrowserRouter>
    )
  }
}
