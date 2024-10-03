import React from 'react'
import { Breadcrumb, InputGroup } from '../../../Component'

export default function TambahBiayaBaru() {
  return (
    <div>
      <Breadcrumb before={"Pengaturan"} after={"Tambah Biaya Tambahan"} />
      <div className="mt-4 h2 text-halaman-detail">Tambah Biaya Tambahan</div>
      <div className="mt-4 h5 text-halaman-detail-small">Informasi Dasar</div>
      <small>Informasi dasar Biaya Tambahan</small>
      <div className="mt-4 row">
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Nama Biaya Tambahan *"}
            name={"tipePerangkat"}
            placeholder={"Nama Biaya Tambahan"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Bentuk Biaya Tambahan *"}
            name={"Bentuk Biaya Tambahan"}
            placeholder={"Bentuk Biaya Tambahan"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Tipe Biaya Tambahan *"}
            placeholder={"Tipe Biaya Tambahan"}
            name={"Tipe Biaya Tambahan"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Nilai Biaya Tambahan (% or fixed amount) *"}
            placeholder={"Nilai Biaya Tambahan (% or fixed amount)"}
            name={"Nilai Biaya Tambahan (% or fixed amount)"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Keterangan *"}
            placeholder={"Keterangan"}
            textarea={true}
            name={"Keterangan"}
            />
        </div>
        <div className="col-md-12 col xs-12 text-end">
            <button type="reset" className="btn bg-ligt mx-2 px-4 btn-lgx">Cancel</button>
            <button type="submit" className="btn mx-2 btn-purple">
                <i className="bx bx-save mx-2"></i>
                Simpan</button>
        </div>
      </div>
    </div>
  )
}
