import React from 'react'
import Thumbnail from '../../assets/autopay.png'
import { useFormik } from 'formik'
import { ImageKiri, Input, Placeholder } from '../../Component';
export default function UbahKataSandi() {
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
                    <div className='h1 mb-4'>Ubah Kata Sandi</div>
                    </div>
                    <form onSubmit={() => formik.handleSubmit}>
                    <p className='p-text-purple mb-0 text-center'>
                    Kata Sandi pada akun yang baru di buat adalah default. Ubah password terlebih dahulu untuk dapat masuk ke aplikasi.
                    </p>
                        <Placeholder kelas={"h5 mt-4"} name={"Kata Sandi Lama"} />
                        <Input data={'username'} placeholder={"Kata Sandi Lama"} kelas={"w-100"} />
                        <Placeholder kelas={"h5 mt-4"} name={"Kata Sandi Baru"} />
                        <Input data={'username'} placeholder={"Kata Sandi Baru"} kelas={"w-100"} />
                        <Placeholder kelas={"h5 mt-4"} name={"Konfimasi Kata Sandi"} />
                        <Input data={'username'} placeholder={"Konfimasi Kata Sandi"} kelas={"w-100"} />
                        {/* for Production */}
                        {/* <button className="btn btn-sm btn-purple w-100 mt-4">Masuk</button> */}
                        <a href="/" className="btn btn-sm btn-purple w-100 mt-4">Ubah Kata Sandi</a>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
