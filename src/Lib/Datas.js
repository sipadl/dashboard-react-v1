export const Menus = [
    {
        title: 'Dashbor',
        icon: <i className='bx bx-home mx-1' ></i>,
        items: [],
    }, {
        title: 'Laporan',
        icon: <i className='bx bx-bar-chart-alt-2 mx-1'></i>,
        items: ['Transaksi', 'Metode Pembayaran','Void' , 'Refund', 'Settlement']
    }, {
        title: 'Managmenet Perangkat',
        icon: <i className='bx bxs-devices mx-1' ></i>,
        items: ['Perangkat', 'QR Soundbox', 'EDC']
    }, 
    {
        title: 'Issuser',
        icon: <i className='bx bx-store mx-1' ></i>,
        items: [],

    }, 
    {
        title: 'Acquiring',
        icon: <i className='bx bx-store mx-1' ></i>,
        items: [],
    },
    //  {
    //     title: 'Merchant',
    //     icon: <i className='bx bx-store mx-1' ></i>,
    //     items: [],

    // }, 
    {
        title: 'Pengguna & Peran',
        icon: <i className='bx bx-user-circle mx-1' ></i>,
        items: ['Pengguna', 'Peran' ],

    }, {
        title: 'Pengaturan',
        icon: <i className='bx bx-cog mx-1' ></i>,
        items: ['Merchant Discount Rate', 'Biaya Tambahan']
    }
]

export const tableOne = [
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    {
        noRef:'1',
        timeTrans:'2',
        totalTrans:'10000',
        typeCard:'Debit - BCA',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
]

export const dataMerchant = [
    {
        images: 'https://placehold.co/50',
        name: 'BCA',
        kodeIssuser: 'BCA',
        kontakPerson: 'Jhon Doe',
        email: 'project@example.co.id',
        telp: '08131166****',
        status: true,
        action: [
            <i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,
            <i style={{color:'black'}} className='bx bxs-books mx-1' ></i>
        ]
    },
    {
        images: 'https://placehold.co/50',
        name: 'BSI',
        kodeIssuser: 'BSI',
        kontakPerson: 'Jhon Doe',
        email: 'project@example.co.id',
        telp: '08131166****',
        status: true,
        action: [
            <i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,
            <i style={{color:'black'}} className='bx bxs-books mx-1' ></i>
        ]
    },
    {
        images: 'https://placehold.co/50',
        name: 'BNI',
        kodeIssuser: 'BNI',
        kontakPerson: 'Jhon Doe',
        email: 'project@example.co.id',
        telp: '08131166****',
        status: true,
        action: [
            <i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,
            <i style={{color:'black'}} className='bx bxs-books mx-1' ></i>
        ]
    },
]


export const dataAcquiring = [
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: <div className="badge badge-success bg-success">Active</div>
    },
]

export const dataPengguna = [
    {
        NamaPengguna: 'Jhon Doe',
        NamaLengkap: 'John S Doe',
        Email: 'john@doe.co.id',
        Peran: 'SuperAdmin',
        ExpirateDate: 'Selamanya',
        action: [
            <i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,
            <i style={{color:'black'}} className='bx bxs-books mx-1' ></i>
        ]
    }
]   


export const dataPeran = [
    {
        peran:'super admin',
        dibuat: '-',
        diperbarui: '-',
        action: '-'
    },
    {
        peran:'administrator',
        dibuat: '01-04-2024',
        diperbarui: '01-04-2024',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
    {
        peran:'operator',
        dibuat: '01-04-2024',
        diperbarui: '01-04-2024',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
]

export const biayaTambahan = [
    {
        nama:'ppn',
        nilai:'10%',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
    {
        nama:'Admin',
        nilai:'5%',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
]