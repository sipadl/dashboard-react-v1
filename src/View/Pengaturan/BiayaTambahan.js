import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {dataPengguna, dataPeran, tableOne} from '../../Lib/Datas'

export default class BiayaTambahan extends Component {
    render() {
        return (
            <div>
                <Breadcrumb after={'BiayaTambahan'} before={'Pengaturan'} />
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
                        <button className='btn btn-sm btn-purple btn-light mt-4'> 
                        <i className='bx bx-plus mx-2'></i>
                        Tambah Peran
                        </button>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table data={dataPeran}/>
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
