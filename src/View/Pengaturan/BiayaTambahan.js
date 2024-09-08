import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {biayaTambahan, dataPengguna, dataPeran, tableOne} from '../../Lib/Datas'

export default class BiayaTambahan extends Component {
    render() {
        const body = biayaTambahan.map((val, key) => (
            <tr key={key}>
                <td>{val.nama}</td>
                <td>{val.nilai}</td>
                <td>
                    <a className='mx-2 btn btn-transparent' href="/edit-biaya">
                            <i className="bx bx-pencil"></i>
                    </a>
                    <button className='mx-2 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                        <i className="bx bx-trash"></i>
                    </button>
                </td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb after={'Biaya Tambahan'} before={'Pengaturan'} />
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Biaya Tambahan'}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>

                    <div className='w-25 mt-4'>
                        <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
                    </div>
                    <div>
                        <a href="/tambah-biaya-baru" className='btn btn-sm btn-purple btn-light mt-4'> 
                        <i className='bx bx-plus mx-2'></i>
                        Tambah Biaya Tambahan
                        </a>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table
                    th={['Nama','Nilai (%)','Aksi']}
                    data={body}
                    />
                </div>
                <div className='mt-2'>
                <Pagination
                itemsPerPage={10}
                totalItems={50}
                paginate={5}
                currentPage={2}
                />
                </div>
            </div>
        )
    }
}
