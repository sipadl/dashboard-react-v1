import React, {Component} from 'react'
import {Breadcrumb, ExportButton, Input, Pagination, SelectOption, Table, Title} from '../../Component'
import {Button} from 'react-bootstrap'
import { tableOne } from '../../Lib/Datas';
import axios from 'axios';

export default class Transaksi extends Component {
    
    componentDidMount() {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://47.254.142.62:8081/api/transaksi/get');
            console.log(res)
            this.setState({ data: res.data, loading: false });
          } catch (error) {
            this.setState({ error: error.message, loading: false });
          }
        };
    
        fetchData();
      }

    render() {
        console.log(this.state)
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
                    <div className='col-md-6 col-xl-2 col-xs-12'>
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
