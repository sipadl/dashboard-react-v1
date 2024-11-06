import React from 'react';

const FeeTable = ({field, title, mode}) => {
    const body = field.map((val, key) => (
        <tr key={key}>
            <td className='main-text'>{field[key]}</td>
            <td>
                <input type="text" defaultValue="0.15%" className="form-control"/>
            </td>
            {mode == 'qris' ? '' : 
            <td>
                <input type="text" defaultValue="0%" className="form-control"/>
            </td>
            }
        </tr>
    ))
    return (
        <div className="mt-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">{
                                title
                                    ? title
                                    : 'Jenis Kartu'
                            }</th>
                        {
                            mode == 'qris'
                                ? <th scope="col" className="">MDR</th>
                                : mode == 'alipay'
                                    ? <> < th scope = "col" className = "" > Transaksi Reguler</th> < th scope = "col" className = "" > Transaksi G2P / P2G(
                                        a.l bantuan sosial,
                                        pembayaran pajak,
                                        paspor,
                                        dan donasi(nirlaba)
                                    )</th> </>
            :
            <>
            <th scope="col" className="">On Us</th > <th scope="col" className="">Off Us</th>
                                    </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    );
};

export default FeeTable;
