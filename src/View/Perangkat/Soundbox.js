import React from 'react'
import { Breadcrumb, Input, SelectOption, Title, Table, Pagination, ExportButton } from '../../Component'
import { tableOne } from '../../Lib/Datas';

export default function SoundBox() {
const dataTable = tableOne;
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
            <div className='row'>
                <div className='col-md-2 col-sm-12 col-xs-2 col-xs-12'>
                <SelectOption name={'perangkat'} data={['EDC', 'Sound Box']} kelas={'w-100'}/>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='row mt-4'>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
                    </div>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <SelectOption name={'waktu'} data={['7 Hari Terakhir ', 'Hari Ini', '30 Hari Terakhir']} kelas={'w-100'}/>
                    </div>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <SelectOption name={'cabang'} data={['Semua Cabang', 'Jakarta Timur', 'Jakarta Selatan','Jakarta Barat']} kelas={'w-100'}/>
                    </div>
                </div>
                <div className='align-self-end'>
                    <button type="button" className='btn btn-light btn-sm btn-purple'>
                        + Tambah Perangkat
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <Table data={dataTable}/>
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
