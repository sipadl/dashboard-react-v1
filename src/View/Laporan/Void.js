import React, {Component} from 'react'
import {Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import { tableOne } from '../../Lib/Datas';

export default class Void extends Component {
    render() {
        const dataTable = tableOne;
        return (
            <div>
                <Breadcrumb before={'Laporan'} after={'Void'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Void'}/>
                        </div>
                        <div>
                            <ExportButton />
                        </div>
                    </div>
                </div>
                <div className='w-auto mt-4'>
                <SelectOption name={'merchant'} data={['Kopi Kenangan', 'Janji Jiwa']} kelas={'w-auto'}/>
                </div>
                <div className='inputan mt-2 row'>
                    <div className='col-2'>
                        <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
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
                </div>
                <div className='p-0 mt-3'>
                    <Table data={dataTable}/>
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
