import React, { Component } from 'react';
import { Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title } from '../../Component';
import { metodePembayaran } from '../../Lib/Datas';

export default class Metode extends Component {
    render() {
        const dataTable = metodePembayaran;
        const td = dataTable.map((value, key) => (
            <tr key={key}>
                <td>{value.metoode}</td>
                <td>{value.Kuantitas}</td>
                <td>{value.SubTotal}</td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb before={'Laporan'} after={'Metode Pembayaran'}/>
                <div className='mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Title data={'Metode Pembayaran'}/>
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
                    th={['Metode Pembayaran','Kuantitas','Subtotal']}
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
