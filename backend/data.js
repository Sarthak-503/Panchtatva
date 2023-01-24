import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Pranav',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sarthak',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

    products: [
      {
        // _id: '1',
        name: 'Divya Swasari Pravahi',
        slug: 'divya-svasari-pravahi',
        category: 'Medicine',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya swasari pravahi activates the cells of the lungs. It alleviates respiratory tract and lung inflammation. Its use enhances easy expulsion of cough deposited in the lungs. It is an effective ayurvedic medicine used for the treatment of asthma.',
      },
      {
        // _id: '2',
        name: 'Divya Taila (50ml)',
        slug: 'divya-taila',
        category: 'Nutrition',
        image: '/images/p2.jpg',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'Divya taila is useful for Psorasis, Skin inflammation, Sthanik Shoth(Local Inflammation) & work as Skin Nourisher.',
      },
      {
        // _id: '3',
        name: 'LaxmiVilas Ras',
        slug: 'laxmi-vilas-ras',
        category: 'Cosmetics',
        image: '/images/p3.jpg',
        price: 25,
        countInStock: 0,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'Laxmivilas Ras is a traditional Ayurvedic formulation that cures a cough, cold and rhinitis. It soothes the throat and sinuses.',
      },
      {
       // _id: '4',
       name: 'Divya Usirasav',
       slug: 'divya-usirasav',
        category: 'Medicine',
        image: '/images/p4.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya Usirasav is an ayurvedic product used for ahaemostatic and pitta pacifying. It is diuretic, cooling, tranquilizer and blood purifier. Divya Usirasav is a liquid ',
      },
      {
        // _id: '1',
        name: 'Divya Swasari Pravahi',
        slug: 'divya-svasari-pravahi',
        category: 'Medicine',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya swasari pravahi activates the cells of the lungs. It alleviates respiratory tract and lung inflammation. Its use enhances easy expulsion of cough deposited in the lungs. It is an effective ayurvedic medicine used for the treatment of asthma.',
      },
      {
        // _id: '1',
        name: 'Divya Swasari Pravahi',
        slug: 'divya-svasari-pravahi',
        category: 'Medicine',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya swasari pravahi activates the cells of the lungs. It alleviates respiratory tract and lung inflammation. Its use enhances easy expulsion of cough deposited in the lungs. It is an effective ayurvedic medicine used for the treatment of asthma.',
      },
      {
        // _id: '1',
        name: 'Divya Swasari Pravahi',
        slug: 'divya-svasari-pravahi',
        category: 'Medicine',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya swasari pravahi activates the cells of the lungs. It alleviates respiratory tract and lung inflammation. Its use enhances easy expulsion of cough deposited in the lungs. It is an effective ayurvedic medicine used for the treatment of asthma.',
      },
      {
        // _id: '1',
        name: 'Divya Swasari Pravahi',
        slug: 'divya-svasari-pravahi',
        category: 'Medicine',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'Divya swasari pravahi activates the cells of the lungs. It alleviates respiratory tract and lung inflammation. Its use enhances easy expulsion of cough deposited in the lungs. It is an effective ayurvedic medicine used for the treatment of asthma.',
      },
    ],
  };
  export default data;
  