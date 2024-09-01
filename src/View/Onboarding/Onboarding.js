import React from 'react';
import { Breadcrumb, ExportButton, Input, Pagination, Table, Title } from '../../Component';
import { dataOnboarding } from '../../Lib/Datas';

export default function Onboarding() {
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
            <Table data={dataOnboarding}/>
            <Pagination
                itemsPerPage={10}
                totalItems={50}
                paginate={5}
                currentPage={2}
            />
        {/* <table className='col-md-12 table table-responsive table-bordered' >
            <thead>
                <th>
                    <td>SN</td>
                    <td>Tipe Perangkat</td>
                    <td>IMEI</td>
                    <td>TID</td>
                </th>
            </thead>
        </table> */}
        </div>
    </div>
  )
}
