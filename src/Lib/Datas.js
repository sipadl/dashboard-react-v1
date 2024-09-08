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
     {
        title: 'Onboarding',
        icon: <i className='bx bx-store mx-1' ></i>,
        items: [],

    }, 
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
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
        typeTrans: 'Sale',
        terminal:'JKT001',
        mid:'0000001',
        trackNumber:'081290669170',
        batch:'Batch 1'
    },
    
]

export const metodePembayaran = [
    {
        metoode:'Debit',
        Kuantitas:'200',
        SubTotal:'15.400.000',
    },
    {
        metoode:'Kredit',
        Kuantitas:'200',
        SubTotal:'15.400.000',
    },
    {
        metoode:'Qris',
        Kuantitas:'200',
        SubTotal:'15.400.000',
    },
    {
        metoode:'E-Money',
        Kuantitas:'200',
        SubTotal:'15.400.000',
    },
]

export const dataSettlement = [
    {
        noRef:'0020010',
        waktuSettlement:'28/04/2022',
        totalAmount:'1.320.000',
        mdr:'13.200',
        netAmount:'1.306.800',
        jenisKartu:'Debit - BCA',
        terminalId:'JKT002',
        mid: 'MID12345678-JKT2',
        status:'Berhasil'

    }
]

export const dataPerangkat = [
    {
        sn:'SN12345678',
        tipePerangkat:'BDM 100',
        imei:'868174068747511',
        mid:'MID12345678-JKT1',
        tid:'554262406874733',
        sim:'081999089999',
        tanggal:'22/04/24'
    }
]

export const dataMerchant = [
    {
        images: 'https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Bank-BCA-1.png',
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
    
]


export const dataAcquiring = [
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: false
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: false
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
    },
    {
        MerchantId:'M01',
        MerchantName: 'Bank BCA',
        TipeBisnis: 'Retail',
        NomorAccount: '1234567890',
        KodeBank: '014',
        Mdr: '2.5%',
        Status: true
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
        peran:'Super Admin',
        dibuat: '-',
        diperbarui: '-',
        action: '-'
    },
    {
        peran:'Administrator',
        dibuat: '01-04-2024',
        diperbarui: '01-04-2024',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
    {
        peran:'Operator',
        dibuat: '01-04-2024',
        diperbarui: '01-04-2024',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
]

export const biayaTambahan = [
    {
        nama:'PPN',
        nilai:'10%',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
    {
        nama:'Admin',
        nilai:'5%',
        action: [<i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,]
    },
]


export const dataOnboarding = [
    {
        logo: 'https://w7.pngwing.com/pngs/83/913/png-transparent-coffee-espresso-tea-cafe-starbucks-starbucks-logo-material-other-free-logo-design-template-trademark.png',
        name: 'Starbucks',
        tipeBisnis: 'F&B',
        telp: '08131166****',
        email: 'project@example.co.id',
        status: true,
        action: [
            <i style={{color:'black'}} className='bx bxs-pencil mx-1' ></i>,
            <i style={{color:'black'}} className='bx bxs-books mx-1' ></i>
        ]
    },
]
