import React from 'react'
import {Breadcrumb, ExportButton, Input, Title, Table} from '../../Component'
import { biayaTambahan } from '../../Lib/Datas'

export default function MDR() {
      const body = biayaTambahan.map((val, key) => (
        <tr key={key}>
          <td><img src={val.images} /></td>
            <td>{val.nama}</td>
            <td>{val.status}</td>
            <td>
            <a className='m-0 px-1 btn btn-transparent' href="/edit-biaya">
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
            <Breadcrumb after={'Merchant Discount Rate (MDR)'} before={'Pengaturan'}/>
            <div className='mt-4'>
                <div className='d-flex justify-content-between row'>
                    <div className='col-md-6'>
                        <Title data={'Merchant Discount Rate (MDR)'}/>
                    </div>
                    <div className='col-md-6 align-self-end text-end'>
                      <ExportButton />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 mt-4'>
                    <div className='d-flex justify-content-between row'>
                        <div className='col-md-6'>
                          <div className='w-50'>
                        <Input data={'cari'} placeholder={'Cari mdr'} kelas={'mr-2'}/>
                          </div>
                        </div>
                        <div className='col-md-6 align-self-end text-end'>
                            <a href="./tambah-mdr" className='btn btn-light btn-sm btn-purple'>
                                + Tambah MDR
                            </a>
                        </div>
                    </div>
                    <div className='mt-4'>
                    <Table 
                      th={['No','Logo','Nama Bank','Status','Aksi']}
                      data={body}/>
                      </div>
                </div>
            </div>
        </div>
    )
}
