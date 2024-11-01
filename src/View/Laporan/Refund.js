import React, {Component} from 'react'
import {Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import { tableOne } from '../../Lib/Datas';
import iconeyes from '../../assets/eye.svg'

export default class Refund extends Component {
    render() {
        const td = tableOne.map((value, key) => (
            <tr key={key}>
                <td>{value.noRef}</td>
                <td>{value.timeTrans}</td>
                <td>{value.timeTrans}</td>
                <td>{value.totalTrans}</td>
                <td>{value.typeCard}</td>
                <td>{value.typeTrans}</td>
                <td>{value.terminal}</td>
                <td>{value.mid}</td>
                <td>{value.trackNumber}</td>
                <td>{value.batch}</td>
                <td>
                    <a href="detail-refund">
                        <img src={iconeyes} />
                    </a>
                </td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb before={'Laporan'} after={'Refund'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Refund'}/>
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
                    <div className='col-xl-2 col-md-6 col-xs-12 mt-2 mx-0'>
                        <Input data={'cari'} placeholder={'Pecarian No Reff'} kelas={'mr-2'}/>
                    </div>
                    <div className='col-xl-2 col-md-6 col-xs-12 mt-2 mx-0'>
                        <SelectOption
                            name={'cari'}
                            data={['7 hari terakhir', 'Hari ini','30 hari terakhir', 'custom']}
                            kelas={''}/>
                    </div>
                    <div className='col-xl-2 col-md-6 col-xs-12 mt-2 mx-0'>
                        <SelectOption
                            name={'cari'}
                            data={['Semua Cabang', 'Cabang 1', 'Cabang 2']}
                            kelas={''}/>
                    </div>
                    <div className='col-xl-2 col-md-6 col-xs-12 mt-2 mx-0'>
                        <SelectOption
                            name={'cari'}
                            data={['Semua metode bayar', 'Bank transfer']}
                            kelas={''}/>
                    </div>
                </div>
                <div className='p-0 mt-3'>
                    <Table 
                        data={td} 
                        th={[
                            'No Ref','Waktu Transaksi','Waktu Refund','Total','Jenis Kartu','Jenis Transaksi',
                            'Terminal', 'MID', 'Trace Number', 'Batch Settlement','Aksi'
                        ]}
                        />
                </div>
                <div className='mt-2'>
                 
                </div>
            </div>
        )
    }
}
