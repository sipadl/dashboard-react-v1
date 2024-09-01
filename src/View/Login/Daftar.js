import React from 'react'
import { useFormik } from 'formik';
import { ImageKiri, Input, Placeholder } from '../../Component';
import Thumbnail from '../../assets/autopay.png'

export default function Daftar() {
    const formik = useFormik({
        initialValues: {},
        onSubmit:values => {
            console.log(values);
        },
    });
    return (
        <div className="container-fluid lg">
            <div className="row">
                <ImageKiri/>
                <div className="col-md-6 col-xs-12 align-self-center">
                    <div className="isi mx-5 w-75">
                        <div className="text-center">
                            <img className='w-50' src={Thumbnail}/>
                            <div className='h1'>Daftar</div>
                        </div>
                        <form onSubmit={() => formik.handleSubmit}>
                            <Placeholder kelas={"login-label mt-4"} name={"Nama Pengguna"}/>
                            <Input data={'username'} placeholder={"Nama Pengguna"} kelas={"w-100"}/>
                            <Placeholder kelas={"login-label mt-4"} name={"Email"}/>
                            <Input data={'username'} placeholder={"Email"} kelas={"w-100"}/>
                            <Placeholder kelas={"login-label mt-4"} name={"Kata Sandi"}/>
                            <Input data={'password'} placeholder={"Kata Sandi"} kelas={"w-100"}/>
                            <Placeholder kelas={"login-label mt-4"} name={"Konfirmasi Kata Sandi"}/>
                            <Input data={'password'} placeholder={"Konfirmasi Kata Sandi"} kelas={"w-100"}/>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <input type="checkbox" className="mx-1"/>
                                    Ingat Saya
                                </div>
                            </div>
                            <button className="btn btn-sm btn-purple w-100 mt-4">Daftar</button>
                        </form>
                        <div className="text-center mt-1">
                            <span className="text-gray">Sudah punya akun?
                                <a className="text-purple" href="/"> Masuk</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
