// Mock data untuk testing

const mockParts = [
  {
    _id: '1',
    name: 'Intel Core i5-13600K',
    category: 'CPU',
    brand: 'Intel',
    model: 'i5-13600K',
    specification: {
      cores: 14,
      threads: 20,
      frequency: '3.0 GHz',
      tdp: 125
    },
    prices: [
      { marketplace: 'shopee', price: 2500000, timestamp: new Date(), availability: true },
      { marketplace: 'lazada', price: 2550000, timestamp: new Date(), availability: true },
      { marketplace: 'tokopedia', price: 2480000, timestamp: new Date(), availability: true }
    ],
    averagePrice: 2510000,
    rating: 4.8,
    reviews: 450
  },
  {
    _id: '2',
    name: 'NVIDIA RTX 4070',
    category: 'GPU',
    brand: 'NVIDIA',
    model: 'RTX 4070',
    specification: {
      memory: '12GB GDDR6X',
      tdp: 200,
      interface: 'PCIe 4.0'
    },
    prices: [
      { marketplace: 'shopee', price: 3200000, timestamp: new Date(), availability: true },
      { marketplace: 'lazada', price: 3250000, timestamp: new Date(), availability: true },
      { marketplace: 'tokopedia', price: 3180000, timestamp: new Date(), availability: true }
    ],
    averagePrice: 3210000,
    rating: 4.7,
    reviews: 320
  },
  {
    _id: '3',
    name: 'ASUS TUF Gaming Z790',
    category: 'Motherboard',
    brand: 'ASUS',
    model: 'TUF Gaming Z790',
    specification: {
      socket: 'LGA1700',
      pcie: 5.0,
      ram_support: 'DDR5'
    },
    prices: [
      { marketplace: 'shopee', price: 1800000, timestamp: new Date(), availability: true },
      { marketplace: 'lazada', price: 1850000, timestamp: new Date(), availability: true },
      { marketplace: 'tokopedia', price: 1780000, timestamp: new Date(), availability: true }
    ],
    averagePrice: 1810000,
    rating: 4.6,
    reviews: 280
  }
];

const mockStores = [
  {
    _id: '1',
    name: 'PC Store Jaya',
    owner: 'UMKM Elektronik Jaya',
    location: {
      latitude: -6.2088,
      longitude: 106.8456,
      address: 'Jl. Sudirman No. 10',
      city: 'Jakarta',
      province: 'DKI Jakarta'
    },
    phone: '021-123456',
    email: 'info@pcstore.id',
    website: 'www.pcstore.id',
    services: ['consultation', 'installation', 'repair'],
    technicians: [
      { name: 'Budi Santoso', expertise: ['CPU', 'Cooling', 'Assembly'], phone: '021-9876543' },
      { name: 'Adi Pratama', expertise: ['GPU', 'Storage', 'PSU'], phone: '021-9876544' }
    ],
    rating: 4.5,
    reviews: 234
  },
  {
    _id: '2',
    name: 'Komputer Semarang',
    owner: 'UMKM Elektronik Semarang',
    location: {
      latitude: -7.0056,
      longitude: 110.4114,
      address: 'Jl. Ahmad Yani No. 5',
      city: 'Semarang',
      province: 'Jawa Tengah'
    },
    phone: '024-234567',
    email: 'info@komputersemarang.id',
    website: 'www.komputersemarang.id',
    services: ['consultation', 'repair'],
    technicians: [
      { name: 'Rini Kusuma', expertise: ['Motherboard', 'RAM', 'Storage'], phone: '024-5555666' }
    ],
    rating: 4.3,
    reviews: 156
  }
];

const mockBuilds = [
  {
    _id: 'build1',
    userId: 'user123',
    title: 'Gaming PC Budget Friendly',
    budget: 15000000,
    purpose: 'gaming',
    components: [
      { category: 'CPU', partId: '1', partName: 'Intel i5-13600K', price: 2500000 },
      { category: 'GPU', partId: '2', partName: 'RTX 4070', price: 3200000 },
      { category: 'Motherboard', partId: '3', partName: 'ASUS TUF Gaming Z790', price: 1810000 },
      { category: 'RAM', partName: '32GB DDR5', price: 1800000 },
      { category: 'Storage', partName: '1TB NVMe SSD', price: 800000 },
      { category: 'PSU', partName: '850W Gold', price: 1200000 },
      { category: 'Case', partName: 'NZXT H510', price: 1500000 },
      { category: 'Cooling', partName: 'Noctua NH-D15', price: 900000 }
    ],
    totalCost: 13710000,
    compatibility: {
      isCompatible: true,
      issues: [],
      warnings: []
    },
    savedAt: new Date()
  }
];

module.exports = {
  mockParts,
  mockStores,
  mockBuilds
};
