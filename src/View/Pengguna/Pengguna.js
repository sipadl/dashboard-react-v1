import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {dataPengguna, tableOne} from '../../Lib/Datas'

export default class Pengguna extends Component {
    render() {
        const datax = dataPengguna.map((val, key) => (
            <tr key={key}>
                <td style={{placeContent:'center'}}><input type="checkbox" /></td>
                <td>{val.NamaPengguna}</td>
                <td>{val.NamaLengkap}</td>
                <td>{val.Email}</td>
                <td>{val.Peran}</td>
                <td>Selamanya</td>
                <td>
                <a className='m-0 px-1 btn btn-transparent' href="/edit-onboarding">
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
                <Breadcrumb before={'Pengguna & Peran'} after={'Pengguna'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Pengguna'}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>

                    <div className='w-25 mt-4'>
                        <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-purple btn-light mt-4'> 
                        <i className='bx bx-plus mx-2'></i>
                        Tambah Pengguna
                        </button>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table 
                    th={['','Nama Pengguna','Nama Lengkap','Email','Peran','Aktif Sampai','Aksi']}
                    data={datax}/>
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
