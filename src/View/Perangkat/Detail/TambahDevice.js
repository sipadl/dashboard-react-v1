import React from 'react'
import {Breadcrumb, InputGroup} from '../../../Component'
import {Form, Formik} from 'formik'
import axios from 'axios'

export default function TambahDevice() {
    return (
        <div>
            <Breadcrumb before={"Manajemen Perangkat"} after={"Tambah Perangkat"}/>
            <div className="mt-4 h2 text-halaman-detail">Tambah Perangkat</div>
            <div className="mt-4 h5 text-halaman-detail-small">Informasi Dasar</div>
            <small>Informasi dasar perangkat</small>
            <Formik
                initialValues={{
                    tipePerangkat: '',
                    serialNumber: '',
                    imeiNumber: '',
                    sim: '',
                    koneksi: '',
                    battery: '',
                    printer: '',
                    longitude: '',
                    latitude: '',
                    tanggalAktivasi: '',
                    alamat: ''
                }}
                onSubmit={async (values) => {
                  try {
                    const response = await axios.post('http://47.254.142.62:8081/api/devices/new', values);
                    console.log(response);
                  } catch (err) {
                    console.log(err)
                  }
                }}>
                {
                    ({values, handleChange, handleBlur, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="mt-4 row">
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Tipe Perangkat *"}
                                        name={"tipePerangkat"}
                                        placeholder={"Tipe Perangkat"}
                                        value={values.tipePerangkat}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"SN *"}
                                        name={"serialNumber"}
                                        placeholder={"SN"}
                                        value={values.serialNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"IMEI *"}
                                        name={"imeiNumber"}
                                        placeholder={"IMEI"}
                                        value={values.imeiNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"SIM *"}
                                        name={"simCardNumber"}
                                        placeholder={"SIM"}
                                        value={values.simCardNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Koneksi *"}
                                        name={"koneksi"}
                                        placeholder={"Koneksi"}
                                        value={values.koneksi}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Kesehatan Baterai *"}
                                        name={"battery"}
                                        placeholder={"Kesehatan Baterai"}
                                        value={values.battery}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Printer *"}
                                        name={"printer"}
                                        placeholder={"Printer"}
                                        value={values.printer}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Longitude *"}
                                        name={"longitude"}
                                        placeholder={"Longitude"}
                                        value={values.longitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Latitude *"}
                                        name={"latitude"}
                                        placeholder={"Latitude"}
                                        value={values.latitude}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Tanggal Aktivasi *"}
                                        tipe={"date"}
                                        name={"tanggalActive"}
                                        placeholder={"Tanggal Aktivasi"}
                                        value={values.tanggalActive}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-6 col xs-12">
                                    <InputGroup
                                        title={"Alamat *"}
                                        name={"alamat"}
                                        textarea={true}
                                        placeholder={"Alamat"}
                                        value={values.alamat}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </div>
                                <div className="col-md-12 col xs-12 text-end">
                                    <button type="reset" className="btn bg-ligt mx-2 px-4 btn-lgx">Cancel</button>
                                    <button type="submit" className="btn mx-2 btn-purple">
                                        <i className="bx bx-save mx-2"></i>
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
