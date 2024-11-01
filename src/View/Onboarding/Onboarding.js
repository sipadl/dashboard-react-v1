import React, { useEffect, useState } from 'react';
import { Breadcrumb, ExportButton, Input, Pagination, Table, Title } from '../../Component';
import { dataOnboarding } from '../../Lib/Datas';
import axios from "axios";

export default function Onboarding() {
    const [merchant, setMerchant] = useState([])
    useEffect(() => {
        const fectData = async () => {
            try {
                const res = await axios.get('http://47.254.142.62:8081/api/merchant/get');
                setMerchant(res.data.data);
            } catch (error) {
                console.log(error)
            }
        }


        fectData();
    },[])


    const datax = merchant.map((val, key) => (
        <tr key={key}>
            <td style={{placeContent:'center'}}><input type="checkbox" /></td>
            <td>
                <img width={50} src={'https://w7.pngwing.com/pngs/83/913/png-transparent-coffee-espresso-tea-cafe-starbucks-starbucks-logo-material-other-free-logo-design-template-trademark.png'} />
            </td>

            <td>{val.merchantName}</td>
            <td>{val.id}</td>
            <td>{val.merchantType}</td>
            <td>{val.phone}</td>
            <td>{val.email}</td>
            <td>
            {val.status == 1 ? 
                    <div className='body-status-ijo'>
                        <div className="status-ijo">Active</div>
                    </div>
                        :
                    <div className='body-status-merah'>
                        <div className="status-merah">Inactive</div>
                    </div>
                }
            </td>
            <td>
                <a className='m-0 px-1 btn btn-transparent' href="/edit-onboarding">
                        <i className="bx bx-pencil" style={{color: '#979C9E'}} ></i>
                </a>
                <button className='m-0 px-1 btn btn-transparent' type='button' onClick={ () => (alert('Anda Yakin Menghapus Data ini ?'))}>
                    <i className="bx bx-trash" style={{color: '#979C9E'}} ></i>
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
                    <a href="tambah_merchant" className='btn btn-light btn-sm btn-purple'>
                        + Tambah Onboarding
                    </a>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <Table 
            th={[' ','Logo','Nama Merchant','ID Merchant','Tipe Bisnis','Telpon','Email','Status','Aksi']}
            data={datax}/>
              
        </div>
    </div>
  )
}
