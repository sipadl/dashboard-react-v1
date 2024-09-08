import React, { Component } from 'react';
import { Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title } from '../../Component';
import { dataSettlement } from '../../Lib/Datas';
import iconeyes from '../../assets/eye.svg';

export default class Settlement extends Component {
    render() {
        const td = dataSettlement.map((value, key) => (
            <tr key={key}>
                <td>{value.noRef}</td>
                <td>{value.waktuSettlement}</td>
                <td>{value.totalAmount}</td>
                <td>{value.mdr}</td>
                <td>{value.netAmount}</td>
                <td>{value.jenisKartu}</td>
                <td>{value.terminalId}</td>
                <td>{value.mid}</td>
                <td>{value.status}</td>
                <td>
                    <a href="detail-settlement">
                        <img src={iconeyes} />
                    </a>
                </td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb  before={'Laporan'} after={'Settlement'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Settlement'}/>
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
                    <Table
                    th={[
                        'No Ref','Waktu Settlement','Total Amount','Fee Merchant / MDR (1%)','Net Amount','Jenis Kartu',
                        'Terminal ID', 'MID', 'Status','Aksi'
                    ]}
                     data={td}/>
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
