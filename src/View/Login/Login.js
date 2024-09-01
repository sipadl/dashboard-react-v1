import React from 'react'
import Thumbnail from '../../assets/autopay.png'
import { useFormik } from 'formik'
import { ImageKiri, Input, Placeholder } from '../../Component';
export default function Login() {
    const formik = useFormik({
        initialValues: {},
        onSubmit:values => {
            console.log(values);
            window.location.href = 'dashbor'
        },
    });

    return (
        <div className="container-fluid lg">
            <div className="row justify-content-center">
                <ImageKiri />
                <div className="col-md-6 col-xs-12 align-self-center">
                    <div className="isi mx-5 w-75">
                    <div className="text-center">
                    <img className='w-50' src={Thumbnail}/>
                    <div className='h1'>Masuk</div>
                    </div>
                    <form onSubmit={() => formik.handleSubmit}>
                        <Placeholder kelas={"mt-4 login-label"} name={"Nama Pengguna / Email"} />
                        <Input data={'username'} placeholder={"Nama Pengguna / Email"} kelas={"w-100 p-2"} />
                        <Placeholder kelas={"mt-4 login-label"} name={"Kata Sandi"} />
                        <Input data={'password'} placeholder={"Kata Sandi"} kelas={"w-100 p-2"} />
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <input type="checkbox" className="mx-1"/>
                                Ingat Saya
                            </div>
                            <a className="text-gray" href="lupa-password">Lupa Kata Sandi</a>
                        </div>
                        {/* for Production */}
                        {/* <button className="btn btn-sm btn-purple w-100 mt-4">Masuk</button> */}
                        <a href="/dashbor" className="btn btn-sm btn-purple w-100 mt-4">Masuk</a>
                    </form>
                    <div className="text-center mt-1">
                    <span className="text-gray">Belum Memiliki Akun ? <a className="text-purple" href="/daftar">Daftar Sekarang</a></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
