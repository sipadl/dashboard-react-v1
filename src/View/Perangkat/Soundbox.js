import React from 'react'
import { Breadcrumb, Input, SelectOption, Title, Table, Pagination, ExportButton } from '../../Component'
import { dataPerangkat, tableOne } from '../../Lib/Datas';

export default function SoundBox() {
const dataTable = dataPerangkat;
const td = dataTable.map((value,key) => (
    <tr key={key}>
        <td style={{placeContent:'center'}}><input type="checkbox" /></td>
        <td>{value.sn}</td>
        <td>{value.tipePerangkat}</td>
        <td>{value.imei}</td>
        <td>{value.mid}</td>
        <td>{value.tid}</td>
        <td>{value.sim}</td>
        <td>{value.tanggal}</td>
        <td>
            <a className='m-0 px-1 btn btn-transparent' href="/edit-sound">
                <i className="bx bx-pencil" style={{color: '#979C9E'}} ></i>
            </a>
            <button className='m-0 px-1 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                <i className="bx bx-trash" style={{color: '#979C9E'}} ></i>
            </button>
        </td>
    </tr>
))
  return (
    <div>
        <Breadcrumb before={'Manegement Perangkat'} after={'QR Sound Box'}/>
        <div className='mt-4'>
            <div className='d-flex justify-content-between'>
                <div>
                    <Title data={'QR Sound Box'}/>
                </div>
                <div>
                    <ExportButton />
                </div>
            </div>
        </div>
        <div className='w-auto mt-4'>
            {/* <div className='row'>
                <div className='col-md-2 col-sm-12 col-xs-2 col-xs-12'>
                <SelectOption name={'perangkat'} data={['EDC', 'Sound Box']} kelas={'w-100'}/>
                </div>
            </div> */}
            <div className='d-flex justify-content-between'>
                <div className='row mt-4'>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <Input data={'cari'} placeholder={'Cari nomor SN'} kelas={'mr-2'}/>
                    </div>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <SelectOption name={'waktu'} data={['7 Hari Terakhir ', 'Hari Ini', '30 Hari Terakhir']} kelas={'w-100'}/>
                    </div>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <SelectOption name={'cabang'} data={['Semua Cabang', 'Jakarta Timur', 'Jakarta Selatan','Jakarta Barat']} kelas={'w-100'}/>
                    </div>
                </div>
                <div className='align-self-end'>
                    <a href="/tambah-sound" className='btn btn-light btn-sm btn-purple'>
                        + Tambah Soundbox
                    </a>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <Table 
            th={[' ','SN','Tipe Perangkat','IMEI','MID','TID','SIM','Tanggal Aktivasi','Aksi']}
            data={td}/>
            <Pagination
                itemsPerPage={10}
                totalItems={50}
                paginate={5}
                currentPage={2}
            />
        {/* <table className='col-md-12 table table-responsive table-bordered' >
            <thead>
                <th>
                    <td>SN</td>
                    <td>Tipe Perangkat</td>
                    <td>IMEI</td>
                    <td>TID</td>
                </th>
            </thead>
        </table> */}
        </div>
    </div>
  )
}
