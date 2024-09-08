import React from 'react'
import { Breadcrumb, InputGroup } from '../../../Component'

export default function DetailVoid() {
  return (
    <div>
      <Breadcrumb before={"Laporan"} after={"Detail Void"} />
      <div className="mt-4 h2 text-halaman-detail">Detail Void</div>
      <div className="mt-5 h5 text-halaman-detail-small">Informasi Dasar</div>
      <small>Informasi Void Transaksi</small>
      <div className="mt-6 row">
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"No. Reff *"}
            name={"noReff"}
            value={'0020010'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Waktu Transaksi *"}
            name={"noReff"}
            value={'28/04/2022'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Total *"}
            name={"noReff"}
            value={'88.000'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jenis Kartu *"}
            name={"noReff"}
            value={'Debit - BCA'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jenis Transaksi *"}
            name={"noReff"}
            value={'Sale'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Terminal *"}
            name={"noReff"}
            value={'JKT001'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"MID *"}
            name={"noReff"}
            value={'MID12345678-JKT1'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Trace Number *"}
            name={"noReff"}
            value={'082378718888'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Batch Settlement *"}
            name={"noReff"}
            value={'BATCH20240724'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Alasan Void *"}
            name={"noReff"}
            textarea={true}
            value={'Void karena salah beli barang yang disuruh boss'}
            disabled={true}/>
        </div>
      </div>
    </div>
  )
}
