import React, {Component} from 'react'
import { Breadcrumb, Chart, ChartCircle, PieChart, SelectOption, Title } from '../Component'
import ico from '../assets/Icon.svg'

export default class Home extends Component {
    render() {
        return (
            <div style={{overflowX:'hidden'}}>
                <Breadcrumb after={"Dshboard"} />
                <Title kelas={"mt-3"} data={"Dashboard"}/>
                <div className="row">
                    <div className="col-md-2">
                    <SelectOption data={['Kopi Kenangan','Janji Jiwa', 'Indomaret']} kelas={"mt-2"} name={"Merchant"} />
                    </div>
                    <div className="col-md-2">
                    <SelectOption 
                    data={
                        ['Hari Ini','7 Hari Terakhir', '30 Hari Terakhir']
                        } 
                        kelas={"mt-2"} 
                        name={"Merchant"} 
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card-dashbord p-3 mt-2">
                            <div className="d-flex">
                                    <div className="">
                                        <div className="bg-purple-light p-2 fit rounded-circle">
                                        <div><img src={ico} /></div>
                                    </div>
                                </div>
                                <div className="mx-2 align-self-center">
                                    <div className="text-dashboard">Total Transaksi</div>
                                    <div className="number-dashboard">312</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-dashbord p-3 mt-2">
                            <div className="d-flex">
                                    <div className="">
                                        <div className="bg-purple-light p-2 fit rounded-circle">
                                        <div className="text-rp">Rp</div>
                                    </div>
                                </div>
                                <div className="mx-2 align-self-center">
                                    <div className="text-dashboard">Total Penjualan</div>
                                    <div className="number-dashboard">25.000.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-dashbord p-3 mt-2">
                        <div className="d-flex">
                                    <div className="">
                                        <div className="bg-purple-light p-2 fit rounded-circle">
                                        <div><img src={ico} /></div>
                                    </div>
                                </div>
                                <div className="mx-2 align-self-center">
                                    <div className="text-dashboard">Total Penjualan</div>
                                    <div className="number-dashboard">25.000.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <Chart name={"Void"} />
                    </div>
                    <div className="col-md-6">
                    <Chart name={"Refund"} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-dashbord mt-4 p-4">
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
