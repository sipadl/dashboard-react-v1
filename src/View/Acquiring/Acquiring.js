import React, {Component} from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import {dataAcquiring, tableOne} from '../../Lib/Datas'

export default class Acquiring extends Component {
    render() {
        const datas = dataAcquiring.map((val, key) => (
            <tr key={key}>
                <td>{val.MerchantId}</td>
                <td>{val.MerchantName}</td>
                <td>{val.TipeBisnis}</td>
                <td>{val.NomorAccount}</td>
                <td>{val.KodeBank}</td>
                <td>{val.Mdr}</td>
                <td>
                {val.Status ? 
                    <div className='body-status-ijo'>
                        <div className="status-ijo">Active</div>
                    </div>
                        :
                    <div className='body-status-merah'>
                        <div className="status-merah">Inactive</div>
                    </div>
                }
                </td>
            </tr>
        ))
        return (
            <div>
                <Breadcrumb after={'Acquiring'}/>
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
                {/* <SelectOption name={'merchant'} data={['Kopi Kenangan', 'Janji Jiwa']} kelas={'w-auto dropdown-purple'}/> */}
                <Input data={'cari'} placeholder={'Cari ID Merchant'} kelas={'mr-2'}/>
                </div>
                {/* <div className='inputan mt-2 row'>
                    <div className='col-2'>
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
                </div> */}
                <div className='p-0 mt-3'>
                    <Table 
                    th={['ID Merchant', 'Nama Merchant','Tipe Bisnis',
                        'Nomor Akun','Kode Bank', 'MDR', 'Status'
                    ]}
                    data={datas}/>
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
