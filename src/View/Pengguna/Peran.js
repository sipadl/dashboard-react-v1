import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {biayaTambahan, dataPengguna, dataPeran, tableOne} from '../../Lib/Datas'

export default class Peran extends Component {
    render() {
        const body = dataPeran.map((val,key) => (
            <tr key={key}>
                <td style={{placeContent:'center'}}><input type="checkbox" /></td>
                <td>{val.peran}</td>
                <td>{val.dibuat}</td>
                <td>{val.diperbarui}</td>
                <td>{val.action == '-' ? '-' : 
                    <>
                    <a className='m-0 px-1 btn btn-transparent' href="/edit-onboarding">
                    <i className="bx bx-pencil" style={{color: '#979C9E'}}></i>
                    </a>
                    <button className='m-0 px-1 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                        <i className="bx bx-trash" style={{color: '#979C9E'}}></i>
                    </button>
                    </>
                    }</td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb after ={'Peran'} before={'Pengguna & Peran'} />
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Peran'}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>

                    <div className='w-25 mt-4'>
                        <Input data={'cari'} placeholder={'Cari nama peran'} kelas={'mr-2'}/>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-purple btn-light mt-4'> 
                        <i className='bx bx-plus mx-2'></i>
                        Tambah Peran
                        </button>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table 
                    th={[' ','Peran','Dibuat','Diperbarui','Aksi']}
                    data={body}/>
                </div>
                <div className='mt-2'>
                 
                </div>
            </div>
        )
    }
}
