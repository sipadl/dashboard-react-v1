import React from 'react'
import Thumbnail from '../../assets/autopay.png'
import { useFormik } from 'formik'
import { ImageKiri, Input, Placeholder } from '../../Component';
export default function LupaPassword() {
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
                    <div className='h1 mb-4'>Lupa Kata Sandi</div>
                    </div>
                    <form onSubmit={() => formik.handleSubmit}>
                    <p className='p-text-purple mb-0 text-center'>
                        Silakan masukkan alamat email Anda di bawah ini untuk mengatur ulang kata sandi Anda.
                    </p>
                        <Placeholder kelas={"h5 mt-4"} name={"Email"} />
                        <Input data={'username'} placeholder={"Email"} kelas={"w-100"} />
                        {/* for Production */}
                        {/* <button className="btn btn-sm btn-purple w-100 mt-4">Masuk</button> */}
                        <a href="/" className="btn btn-sm btn-purple w-100 mt-4">Kirim</a>
                    </form>
                    <div className="text-center mt-2">
                    <span className="text-gray">Sudah punya akun ? <a className="text-purple" href="/">Masuk</a></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
