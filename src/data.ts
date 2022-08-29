export default {
    pharmacies: [
        {
            id: 1,
            pharmacy: 'Test Pharmacy 1',
            address: 'address, of the, pharmacy, 1',
            phone: "0123456789",
            email: 'pharmacy1@testmail.com'
        },
        {
            id: 2,
            pharmacy: 'Test Pharmacy 2',
            address: 'address, of the, pharmacy, 2',
            phone: "0123456789",
            email: 'pharmacy2@testmail.com'
        },
        {
            id: 3,
            pharmacy: 'Test Pharmacy 3',
            address: 'address, of the, pharmacy, 3',
            phone: "0123456789",
            email: 'pharmacy3@testmail.com'
        },
        {
            id: 4,
            pharmacy: 'Test Pharmacy 4',
            address: 'address, of the, pharmacy, 4',
            phone: "0123456789",
            email: 'pharmacy4@testmail.com'
        },
        {
            id: 5,
            pharmacy: 'Test Pharmacy 5',
            address: 'address, of the, pharmacy, 5',
            phone: "0123456789",
            email: 'pharmacy5@testmail.com'
        },
    ],
    medicines: [
        {
            name: 'Panadol',
            sciName: 'Paracetemol',
            stocks: [
                {
                    pharmacy: 1,
                    stock: 50,
                    mrp: 50.00
                },
                {
                    pharmacy: 2,
                    stock: 10,
                    mrp: 62.00
                },
                {
                    pharmacy: 4,
                    stock: 0,
                    mrp: 42.00
                },
            ]
        },
        {
            name: 'Panadol',
            sciName: 'Paracetemol',
            stocks: [
                {
                    pharmacy: 1,
                    stock: 100,
                    mrp: 250.00
                },
                {
                    pharmacy: 3,
                    stock: 10,
                    mrp: 260.00
                }
            ]
        }
    ]
}