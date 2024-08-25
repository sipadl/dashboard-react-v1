import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {dataAcquiring, tableOne} from '../../Lib/Datas'

export default class Acquiring extends Component {
    render() {
        return (
            <div>
                <Breadcrumb data={'Acquiring'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Acquiring'}/>
                        </div>
                        <div>
                            <button className='btn btn-sm btn-light'> 
                            <i className='bx bx-export mx-2'></i>
                            Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-25 mt-4'>
                {/* <SelectOption name={'merchant'} data={['Kopi Kenangan', 'Janji Jiwa']} kelas={'w-auto'}/> */}
                <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
                </div>
                {/* <div className='inputan mt-2 row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-2'>
                        <SelectOption
                            name={'cari'}
                            data={['7 Hari Terakhir', 'Hari Ini']}
                            kelas={'mx-2'}/>
                    </div>
                    <div className='col-2'>
                        <SelectOption
                            name={'cari'}
                            data={['Semua Cabang', 'Cabang 1', 'Cabang 2']}
                            kelas={'mx-2'}/>
                    </div>
                    <div className='col-2'>
                        <SelectOption
                            name={'cari'}
                            data={['Semua Metode Bayar', 'Bank Transfer']}
                            kelas={'mx-2'}/>
                    </div>
                </div> */}
                <div className='p-0 mt-3'>
                    <Table data={dataAcquiring}/>
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
