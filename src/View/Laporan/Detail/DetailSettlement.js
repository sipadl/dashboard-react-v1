import React from 'react'
import { Breadcrumb, InputGroup } from '../../../Component'

export default function DetailSettlement() {
  return (
    <div>
      <Breadcrumb before={"Laporan"} after={"Detail Settlement"} />
      <div className="mt-4 h2 text-halaman-detail">Detail Settlement</div>
      <div className="mt-5 h5 text-halaman-detail-small">Informasi Dasar</div>
      <small>Informasi Settlement Transaksi</small>
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
            title={"Waktu Settlement *"}
            name={"noReff"}
            value={'28/04/2022'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Status *"}
            name={"noReff"}
            value={'Berhasil'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jumlah Transaksi *"}
            name={"noReff"}
            value={'35'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Total Amount *"}
            name={"noReff"}
            value={'1.320.000'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Fee Merchant/MDR (1%) *"}
            name={"noReff"}
            value={'13.200'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Net Amount *"}
            name={"noReff"}
            value={'1.306.800'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Bank Accquiring *"}
            name={"noReff"}
            value={'BCA'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jenis Transaksi *"}
            name={"noReff"}
            value={'Settlement'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Terminal ID *"}
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
