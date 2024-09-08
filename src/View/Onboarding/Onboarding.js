import React from 'react';
import { Breadcrumb, ExportButton, Input, Pagination, Table, Title } from '../../Component';
import { dataOnboarding } from '../../Lib/Datas';

export default function Onboarding() {
    const datax = dataOnboarding.map((val, key) => (
        <tr key={key}>
            <td>
                <img width={30} src={val.logo} />
            </td>
            <td>{val.name}</td>
            <td>{val.tipeBisnis}</td>
            <td>{val.telp}</td>
            <td>{val.email}</td>
            <td>{val.status ? 
                <div className="status-ijo">Active</div>
                : 
                <div className="status-merah">Inactive</div>
            }</td>
            <td>
                <a className='mx-2 btn btn-transparent' href="/edit-onboarding">
                        <i className="bx bx-pencil"></i>
                </a>
                <button className='mx-2 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                    <i className="bx bx-trash"></i>
                </button>
            </td>
        </tr>
    ))
  return (
    <div>
        <Breadcrumb after={'Onboarding'}/>
        <div className='mt-4'>
            <div className='d-flex justify-content-between'>
                <div>
                    <Title data={'Onboarding'}/>
                </div>
                <div>
                    <ExportButton />
                </div>
            </div>
        </div>
        <div className='w-100 mt-4'>
            <div className='d-flex justify-content-between'>
                <div className='row w-75 mt-4'>
                    <div className='col-md-4 col-xl-4 col-sm-12 col-xs-12'>
                    <Input data={'cari'} placeholder={'Pecarian'} kelas={'mr-2'}/>
                    </div>
                   
                </div>
                <div className='align-self-end'>
                    <button type="button" className='btn btn-light btn-sm btn-purple'>
                        + Tambah Onboarding
                    </button>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <Table 
            th={['Logo','Nama','Tipe Bisnis','Telpon','Email','Status','Aksi']}
            data={datax}/>
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
