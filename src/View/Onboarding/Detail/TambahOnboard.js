import React from 'react'
import { Breadcrumb, InputGroup, Title } from '../../../Component'
import { Form, Formik } from 'formik'
import axios from 'axios'


export default function TambahOnboard() {
  return (
    <div>
        <Breadcrumb before={"Onboarding"} after={"Tambah Onboarding"}/>
            <div className="mt-4 h2 text-halaman-detail">Tambah Onboarding</div>
            <div className="mt-4 h5 text-halaman-detail-small">Informasi Dasar</div>
            <small>Informasi dasar Onboarding</small>
            <div>
                <Formik
                initialValues={{
                    mid:'',
                    tid:'',
                    merchantName:'',
                    merchantType:'',
                    contactPerson:'',
                    nib:'',
                    phone:'',
                    email:'',
                    status:1,
                    motherName:'',
                    accoundNumber:'',
                    bankCode:'',
                    address:'',
                    note:''
                }}
                onSubmit={async (value) => {
                    try {
                        const res = axios.post('http://47.254.142.62:8081/api/merchant/create', value);
                        console.log(res);
                        window.location.href = '/onboarding';
                    } catch (error) {
                        console.log(error)
                    }
                }}
                >
                  {
                    ({values, handleChange, handleBlur, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="mt-4 row">
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Merchant ID *"}
                                        name={"mid"}
                                        placeholder={"Merchant ID"}
                                        value={values.mid}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Terminal ID *"}
                                        name={"tid"}
                                        placeholder={"Terminal ID"}
                                        value={values.tid}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Merchant Name *"}
                                        name={"merchantName"}
                                        placeholder={"Merchant Name"}
                                        value={values.merchantName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Merchant Type *"}
                                        name={"merchantType"}
                                        placeholder={"Merchant Type"}
                                        value={values.merchantType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Contact PIC *"}
                                        name={"contactPerson"}
                                        placeholder={"Contact PIC"}
                                        value={values.contactPerson}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"NIB *"}
                                        name={"nib"}
                                        placeholder={"NIB"}
                                        value={values.nib}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Telepon *"}
                                        name={"phone"}
                                        placeholder={"Telepon"}
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Email *"}
                                        name={"email"}
                                        placeholder={"Email"}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Status *"}
                                        name={"status"}
                                        placeholder={"Status"}
                                        // value={values.status}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Nama Ibu *"}
                                        name={"motherName"}
                                        placeholder={"Nama Ibu"}
                                        value={values.motherName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Nomor Rekening *"}
                                        name={"accountNumber"}
                                        placeholder={"Nomor Rekening"}
                                        value={values.accountNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Bank Kode *"}
                                        name={"bankCode"}
                                        placeholder={"Bank Kode"}
                                        value={values.bankCode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        textarea={true}
                                        title={"Alamat *"}
                                        name={"address"}
                                        placeholder={"Alamat"}
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        textarea={true}
                                        title={"Catatan *"}
                                        name={"note"}
                                        placeholder={"Catatan"}
                                        value={values.note}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-12 col xs-12 text-end mt-4">
                                    <button type="reset" className="btn bg-ligt mx-2 px-4 btn-lgx">Cancel</button>
                                    <button type="submit" className="btn mx-2 btn-purple">
                                        <i className="bx bx-save mx-2"></i>
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            
    </div>
  )
}
