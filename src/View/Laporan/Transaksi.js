import React, {Component} from 'react'
import {Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import { tableOne } from '../../Lib/Datas';

export default class Transaksi extends Component {
    render() {
        const dataTable = tableOne;
        const td = dataTable.map((value, key) => (
            <tr key={key}>
                <td>{value.noRef}</td>
                <td>{value.timeTrans}</td>
                <td>{value.totalTrans}</td>
                <td>{value.typeCard}</td>
                <td>{value.typeTrans}</td>
                <td>{value.terminal}</td>
                <td>{value.mid}</td>
                <td>{value.trackNumber}</td>
                <td>{value.batch}</td>
            </tr>
        ));
        

        return (
            <div>
                <Breadcrumb before={'Laporan'} after={'Transaksi'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Transaksi'}/>
                        </div>
                        <div>
                            <ExportButton />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-2 col-xs-12'>
                        <SelectOption name={'merchant'} data={['Kopi Kenangan', 'Janji Jiwa']} kelas={'w-100  dropdown-purple'}/>
                    </div>
                </div>
                <div className='inputan mt-2 row'>
                    <div className='col-2'>
                        <Input data={'cari'} placeholder={'Pecarian No Reff'} kelas={'mr-2'}/>
                    </div>
                    <div className='col-2'>
                        <SelectOption
                            name={'cari'}
                            data={['7 hari terakhir', 'Hari ini','30 hari terakhir', 'custom']}
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
                            data={['Semua metode bayar', 'Bank transfer']}
                            kelas={'mx-2'}/>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table 
                    data={td} 
                    th={[
                        'No Ref','Waktu Transaksi','Total','Jenis Kartu','Jenis Transaksi',
                        'Terminal', 'MID', 'Trace Number', 'Batch Settlement'
                    ]}
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
