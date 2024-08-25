import React from 'react'
import {Breadcrumb, Input, Pagination, SelectOption, Table, Title} from '../../Component'


export default function MDR() {
  return (
    <div>
    <Breadcrumb data={'Pengaturan > Merchant Discount Rate (MDR)'}/>
    <div className='mt-4'>
        <div className='d-flex justify-content-between'>
            <div>
                <Title data={'Merchant Discount Rate (MDR)'}/>
            </div>
        </div>
    </div>
   <div className='row'>
    <div className='col-md-12 mt-4'>
      <div className='h4 m-0 p-0'>Informasi Dasar</div>
      <small>Bagian untuk mengkonfigurasi biaya MDR</small>
    </div>
    <div className='col-md-6 col-xs-12 mt-2'>
      <div className='form-group'>
        <h6 className='label-form-col mx-1 m-0'>Jenis Kartu <span style={{color:'red'}}>*</span></h6>
        <Input data={'cari'} placeholder={' '} kelas={'mr-2'}/>
      </div>
    </div>
    <div className='col-md-6 col-xs-12 mt-2'>
      <div className='form-group'>
        <h6 className='label-form-col mx-1 m-0'>Tarif MDR (%) <span style={{color:'red'}}>*</span></h6>
        <Input data={'cari'} placeholder={'Tarif MDR. Contoh: 10%'} kelas={'mr-2'}/>
      </div>
    </div>
    <div className='col-md-12 col-xs-12 mt-4'>
      <div className='d-flex justify-content-end'>
        <button type='button' className='btn btn-light btn-sm  mx-2 px-4'>Batalkan</button>
        <button type='button' className='btn btn-primary btn-sm btn-purple px-4 '>
        <i style={{color:'white'}} size={20} className='bx bx-save mx-1' ></i>
          Submit</button>
    </div>
   </div>
   </div>
</div>
  )
}
