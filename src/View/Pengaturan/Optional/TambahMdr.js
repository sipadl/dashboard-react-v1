import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';
import { Breadcrumb, FeeTable, InputGroup, PaymentMethod, SelectOption, Title } from '../../../Component';

export default function TambahMdr() {
  return (
    <div>
    <Breadcrumb after={'Tambah Merchant Discount Rate (MDR)'} before={'Merchant Discount Rate (MDR)'}/>
    <div className='mt-4'>
        <div className='d-flex justify-content-between row'>
            <div className='col-md-6'>
                <Title data={'Tambah Merchant Discount Rate (MDR)'}/>
            </div>
            <div className='col-md-6 align-self-end text-end'>
              {/* <ExportButton /> */}
            </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-12 mt-4'>
        <Formik
          initialValues={{
            nama: '',
            kodeUser: '',
            namapic: '',
            email: '',
            telepon: '',
            metode: '',
            alamat : '',
            status: 1
          }}
          onSubmit={async (value) => {
            try {
              const res = await axios.post('http://47.254.142.62:8081/api/merchant/create', value);
              console.log(res);
              window.location.href = '/onboarding';
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mt-0 row">
                <div className="col-md-12 col-xs-12">
                <div className="mb-4">
                <div className="h5 text-halaman-detail-small">Pilih Issuer</div>
                <small>Pilih issuer</small>
                </div>

                <label for="input" className="label-for-col col-xs-12 col-md-12 h6">Pilih Issuer
                    <span className="text-danger">*</span>
                </label>
                <SelectOption
                    data={['Bank BCA', 'Bank BRI']}
                    title={"Pilih Issuer"}
                    isRequired={true}
                    name={"issuer_id"}
                    placeholder={"Issuer"}
                    value={values.issuer_id}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="mt-4">
                    <div className="h5 text-halaman-detail-small">Debit</div>
                    <small>MDR metode pembayaran debit yang diterapkan pada issuer</small>
                    <FeeTable
                    field={['Sesama Bank', 'Debit Maestro', 'Debit Domestik Bank Lain']}
                    />
                    <FeeTable
                    title={'Kategori Merchant Khusus'}
                    field={['Pendidikan', 'Stasiun Pengisian Bahan Bakar Umum (SPBU) termasuk Badan Layanan Umum (BLU) dan Public Service Obligation (PSO)', 'Government to People (G2P) – Bantuan Sosial (Bansos)'
                        ,'People to Government (P2G) – Pajak, Paspor dan donasi sosial (Nirlaba)'
                    ]}
                    />
                </div>
                <div className="mt-4">
                    <div className="h5 text-halaman-detail-small">Kredit</div>
                    <small>MDR metode pembayaran kredit yang diterapkan pada issuer</small>
                    <FeeTable
                    field={[
                        'Sesama Bank',
                        'Visa',
                        'MasterCard',
                        'Japan Credit Bureau (JCB)',
                        'Union Pay (UP)',
                        'American Express (Amex) - Non MCC Khusus',
                        'American Express (Amex) - Retail, F&B, dll',
                        'American Express (Amex) - Merchant MNA'
                    ]}
                    />
                </div>
                <div className="mt-4">
                    <div className="h5 text-halaman-detail-small">QRIS</div>
                    <small>MDR metode pembayaran QRIS yang diterapkan pada issuer</small>
                    <FeeTable
                    field={[
                        'Usaha Mikro (UMI) - Nilai transaksi ≤ Rp 100.000',
                        'Usaha Mikro (UMI) - Nilai transaksi > Rp 100.000',
                        'Usaha Mikro (UMI)',
                        'Usaha Kecil (UKE)',
                        'Usaha Menengah (UME)',
                        'Usaha Besar (UBE)',
                        'Pendidikan',
                        'Stasiun Pengisian Bahan Bakar Umum (SPBU) termasuk Badan Layanan Umum (BLU) dan Public Service Obligation (PSO)',
                        'Government to People (G2P) – Bantuan Sosial (Bansos)',
                        'People to Government (P2G) – Pajak, Paspor dan donasi sosial (Nirlaba)',
                    ]}
                    />
                </div>
                <div className="mt-4">
                    <div className="h5 text-halaman-detail-small">E-Money</div>
                    <small>MDR metode pembayaran e-money yang diterapkan pada issuer</small>
                    <FeeTable
                    mode={'qris'}
                    field={[
                        'Flazz',
                        'Mandiri E-Money',
                        'Brizzi',
                        'TapCash',
                        'Jakcard'
                    ]}
                    />
                </div>
                <div className="mt-4">
                    <div className="h5 text-halaman-detail-small">Alipay</div>
                    <small>MDR metode pembayaran e-money yang diterapkan pada issuer</small>
                    <FeeTable
                    mode={'alipay'}
                    field={[
                        'Flazz',
                        'Mandiri E-Money',
                        'Brizzi',
                        'TapCash',
                        'Jakcard'
                    ]}
                    />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        </div>
    </div>
</div>
  )
}
