import React from 'react'
import {
    Breadcrumb,
    Input,
    SelectOption,
    Title,
    Table,
    Pagination,
    ExportButton
} from '../../Component'
import {dataMerchant, tableOne} from '../../Lib/Datas';

export default function Issuser() {
    const td = dataMerchant.map((val , key) => (
        <tr key={key}>
            <td>{key}</td>
            <td><img src={val.images} /></td>
            <td>{val.name}</td>
            <td>{val.kodeIssuser}</td>
            <td>{val.kontakPerson}</td>
            <td>{val.email}</td>
            <td>{val.telp}</td>
            <td>
                <div class="slider-container">
                <input type="radio" id="left" name="toggle" checked="checked" />
                    <label for="left" class="toggle"></label>

                    <input type="radio" id="right" name="toggle" />
                        <label for="right" class="toggle"></label>

                        <div class="slider">
                            <div class="slider-button"></div>
                        </div>
                    </div>
            </td>
            <td>
                <a className='m-0 px-1 btn btn-transparent' href="/edit-issuer">
                    <i className="bx bx-pencil" style={{color: '#979C9E'}}></i>
                </a>
                <button className='m-0 px-1 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                    <i className="bx bx-trash" style={{color: '#979C9E'}}></i>
                </button>
            </td>
        </tr>
    ))
    return (
        <div>
            <Breadcrumb after={'Issuser'}/>
            <div className='mt-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Title data={'Issuer'}/>
                    </div>
                    <div>
                        <ExportButton/>
                    </div>
                </div>
            </div>
            <div className='w-auto mt-4'>
                <div className='row'>
                    <div className='col-md-2 col-sm-12 col-xs-2 col-xs-12'>
                        <SelectOption name={'perangkat'} data={['EDC', 'Soundbox']} kelas={'w-100'}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='row mt-4'>
                        <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                            <Input data={'cari'} placeholder={'Cari nama issuer'} kelas={'mr-2'}/>
                        </div>
                        <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                            <SelectOption
                                name={'waktu'}
                                data={['7 Hari Terakhir ', 'Hari ini', '30 hari terakhir']}
                                kelas={'w-100'}/>
                        </div>
                        <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                            <SelectOption
                                name={'cabang'}
                                data={['Semua cabang', 'Jakarta timur', 'Jakarta selatan', 'Jakarta barat']}
                                kelas={'w-100'}/>
                        </div>
                    </div>
                    <div className='align-self-end'>
                        <button type="button" className='btn btn-light btn-sm btn-purple'>
                            + Tambah Issuer
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <Table 
                th={['No','Logo','Nama','Kode Issuer','Kontak Person','Email','No. Telepon', 'Status', 'Aksi']}
                data={td}/>
                <Pagination itemsPerPage={10} totalItems={50} paginate={5} currentPage={2}/> {/* <table className='col-md-12 table table-responsive table-bordered' >
            <thead>
                <th>
                    <td>SN</td>
                    <td>Tipe Perangkat</td>
                    <td>IMEI</td>
                    <td>TID</td>
                </th>
            </thead>
        </table> */
                }
            </div>
        </div>
    )
}
