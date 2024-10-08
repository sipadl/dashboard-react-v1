import React from 'react'
import { Breadcrumb, InputGroup } from '../../../Component'

export default function DetailRefund() {
  return (
    <div>
      <Breadcrumb before={"Laporan"} after={"Detail Refund"} />
      <div className="mt-4 h2 text-halaman-detail">Detail Refund</div>
      <div className="mt-4 h5 text-halaman-detail-small">Informasi Dasar</div>
      <small>Informasi Refund Transaksi</small>
      <div className="mt-4 row">
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"No. Reff"}
            isRequired={true}
            name={"noReff"}
            value={'0020010'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Waktu Transaksi"}
            isRequired={true}
            name={"noReff"}
            value={'28/04/2022'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Total"}
            isRequired={true}
            name={"noReff"}
            value={'88.000'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jenis Kartu"}
            isRequired={true}
            name={"noReff"}
            value={'Debit - BCA'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Jenis Transaksi"}
            isRequired={true}
            name={"noReff"}
            value={'Sale'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Terminal"}
            isRequired={true}
            name={"noReff"}
            value={'JKT001'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"MID"}
            isRequired={true}
            name={"noReff"}
            value={'MID12345678-JKT1'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Trace Number"}
            isRequired={true}
            name={"noReff"}
            value={'082378718888'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Batch Settlement"}
            isRequired={true}
            name={"noReff"}
            value={'BATCH20240724'}
            disabled={true}/>
        </div>
        <div className="col-md-6 col xs-12">
          <InputGroup
            title={"Alasan Void"}
            isRequired={true}
            name={"noReff"}
            textarea={true}
            value={'Void karena salah beli barang yang disuruh boss'}
            disabled={true}/>
        </div>
      </div>
    </div>
  )
}
