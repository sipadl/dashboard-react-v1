import React from 'react'
import { Breadcrumb, InputGroup } from '../../../Component'

export default function EditEdc() {
  return (
    <div>
      <Breadcrumb before={"Manajemen Perangkat"} after={"Tambah EDC"} />
      <div className="mt-4 h2 text-halaman-detail">Tambah EDC</div>
      <div className="mt-5 h5 text-halaman-detail-small">Informasi Dasar</div>
      <small>Informasi dasar EDC</small>
      <div className="mt-6 row">
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Tipe Perangkat *"}
            name={"tipePerangkat"}
            placeholder={"Tipe Perangkat"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"SN *"}
            name={"sn"}
            placeholder={"SN"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"IMEI *"}
            placeholder={"IMEI"}
            name={"imei"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"SIM *"}
            placeholder={"SIM"}
            name={"sim"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Koneksi *"}
            placeholder={"Koneksi"}
            name={"koneksi"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Kesehatan Baterai *"}
            placeholder={"Kesehatan Baterai"}
            name={"battery"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Pointer *"}
            placeholder={"Pointer"}
            name={"battery"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Longitude *"}
            placeholder={"Longitude"}
            name={"battery"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Latitude *"}
            placeholder={"Latitude"}
            name={"battery"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Tanggal Aktivasi *"}
            tipe={"date"}
            placeholder={"Tanggal Aktivasi"}
            name={"battery"}
            />
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Alamat *"}
            textarea={true}
            placeholder={"Alamat"}
            name={"battery"}
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
