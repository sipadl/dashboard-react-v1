import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Acquiring, BiayaTambahan, Daftar, Devices, Edc, Home, Issuser, Login, LupaPassword, MDR, Metode, Pengguna, Peran, Refund, Settlement, SoundBox, Transaksi, Void, UbahKataSandi, Onboarding, DetailVoid, DetailRefund, DetailSettlement, TambahDevice, EditDevice, TambahEdc, EditEdc, TambahSound, EditSound, TambahBiayaBaru, EditBiayaBaru, TambahOnboard, EditIssuer, TambahMdr} from './View'

export default class Index extends Component {
  
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/daftar" element={<Daftar />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="laporan/detail-void" element={<DetailVoid />} />
                <Route path="laporan/detail-refund" element={<DetailRefund />} />
                <Route path="laporan/detail-settlement" element={<DetailSettlement />} />
                <Route path="/tambah-device" element={<TambahDevice />} />
                <Route path="/edit-device" element={<EditDevice />} />
                <Route path="/tambah-edc" element={<TambahEdc />} />
                <Route path="/tambah-sound" element={<TambahSound />} />
                <Route path="/edit-sound" element={<EditSound />} />
                <Route path="/tambah-biaya-baru" element={<TambahBiayaBaru />} />
                <Route path="/edit-biaya" element={<EditBiayaBaru />} />
                <Route path="/edit-edc" element={<EditEdc />} />
                <Route path="/lupa-password" element={<LupaPassword />} />
                <Route path="/ubah-password" element={<UbahKataSandi />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="laporan/transaksi" element={<Transaksi />} />
                <Route path="laporan/metode_pembayaran" element={<Metode />} />
                <Route path="laporan/refund" element={<Refund />} />
                <Route path="laporan/settlement" element={<Settlement />} />
                <Route path="managmenet_perangkat/perangkat" element={<Devices />} />
                <Route path="managmenet_perangkat/qr_soundbox" element={<SoundBox />} />
                <Route path="managmenet_perangkat/edc" element={<Edc />} />
                <Route path="/issuer" element={<Issuser />} />
                <Route path="/tambah-issuer" element={<EditIssuer />} />
                <Route path="/edit-issuer" element={<EditIssuer />} />
                <Route path="laporan/void" element={<Void />} />
                <Route path="/acquiring" element={<Acquiring />} />
                <Route path="pengguna_&_peran/pengguna" element={<Pengguna />} />
                <Route path="pengguna_&_peran/peran" element={<Peran />} />
                <Route path="pengaturan/merchant_discount_rate" element={<MDR />} />
                <Route path="pengaturan/tambah-mdr" element={<TambahMdr />} />
                <Route path="pengaturan/biaya_tambahan" element={<BiayaTambahan />} />
                <Route path="/tambah_merchant" element={<TambahOnboard />} />
            </Routes>
        </BrowserRouter>
    )
  }
}
