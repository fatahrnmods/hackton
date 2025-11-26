# Dokumentasi API

## Base URL
```
http://localhost:5000/api
```

## Authentication
Saat ini menggunakan user ID sederhana. Untuk production, gunakan JWT token.

---

## 🔧 Compatibility Endpoints

### 1. Check Compatibility
**POST** `/compatibility/check`

Mengecek kompatibilitas komponen PC yang dipilih.

**Request Body:**
```json
{
  "components": {
    "cpu": {
      "name": "Intel i5-13600K",
      "socket": "LGA1700"
    },
    "motherboard": {
      "name": "ASUS TUF Gaming Z790",
      "socket": "LGA1700"
    },
    "ram": {
      "name": "32GB DDR5",
      "type": "DDR5"
    },
    "gpu": {
      "name": "RTX 4070",
      "interface": "PCIe 4.0"
    },
    "psu": {
      "wattage": 850
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "compatibility": {
    "isCompatible": true,
    "issues": [],
    "warnings": ["Consider upgrading to 950W PSU for better efficiency"]
  }
}
```

### 2. Get Recommendations
**GET** `/compatibility/recommendations/:purpose/:budget`

Dapatkan rekomendasi komponen berdasarkan purpose dan budget.

**Parameters:**
- `purpose`: gaming | workstation | office
- `budget`: Budget dalam IDR (numeric)

**Example:**
```
GET /compatibility/recommendations/gaming/15000000
```

**Response:**
```json
{
  "success": true,
  "purpose": "gaming",
  "budget": "Under 15000000 IDR",
  "recommendations": {
    "cpu": "Intel i5 13th Gen / AMD Ryzen 5 5500",
    "gpu": "RTX 4060 / RX 6600",
    "ram": "16GB DDR5",
    "storage": "512GB SSD",
    "psu": "650W"
  }
}
```

---

## 💰 Pricing Endpoints

### 1. Calculate Dynamic Price
**POST** `/pricing/calculate`

Hitung harga dinamis berdasarkan market data.

**Request Body:**
```json
{
  "partId": "507f1f77bcf86cd799439011",
  "marketPrices": [
    { "marketplace": "shopee", "price": 1200000 },
    { "marketplace": "lazada", "price": 1250000 },
    { "marketplace": "tokopedia", "price": 1180000 },
    { "marketplace": "blibli", "price": 1300000 }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "pricing": {
    "basePrice": 1232500,
    "margin": 184875,
    "sellingPrice": 1417375,
    "marketplaceBreakdown": {
      "shopee": 1200000,
      "lazada": 1250000,
      "tokopedia": 1180000,
      "blibli": 1300000
    },
    "timestamp": "2024-11-26T10:00:00.000Z"
  }
}
```

### 2. Get Market Comparison
**GET** `/pricing/market-comparison/:partName`

Bandingkan harga di berbagai marketplace.

**Example:**
```
GET /pricing/market-comparison/RTX%204070
```

**Response:**
```json
{
  "success": true,
  "comparison": {
    "partName": "RTX 4070",
    "marketplaces": {
      "shopee": { "price": 3200000, "availability": true },
      "lazada": { "price": 3250000, "availability": true },
      "tokopedia": { "price": 3180000, "availability": true },
      "blibli": { "price": 3300000, "availability": false }
    },
    "lowestPrice": 3180000,
    "lowestMarketplace": "tokopedia",
    "timestamp": "2024-11-26T10:00:00.000Z"
  }
}
```

### 3. Bulk Calculate Pricing
**POST** `/pricing/bulk-calculate`

Hitung harga untuk multiple parts sekaligus.

**Request Body:**
```json
{
  "parts": [
    {
      "id": "1",
      "marketPrices": [
        { "marketplace": "shopee", "price": 1200000 },
        { "marketplace": "lazada", "price": 1250000 }
      ]
    },
    {
      "id": "2",
      "marketPrices": [
        { "marketplace": "shopee", "price": 3200000 },
        { "marketplace": "lazada", "price": 3250000 }
      ]
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "pricing": [
    { "partId": "1", "basePrice": 1225000, "sellingPrice": 1408750 },
    { "partId": "2", "basePrice": 3225000, "sellingPrice": 3708750 }
  ],
  "totalEstimate": 5117500
}
```

---

## 🏪 Store Endpoints

### 1. Find Nearest Stores
**POST** `/stores/nearest`

Cari toko terdekat dari lokasi user.

**Request Body:**
```json
{
  "latitude": -6.2088,
  "longitude": 106.8456,
  "maxDistance": 50
}
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "stores": [
    {
      "_id": "1",
      "name": "PC Store Jaya",
      "location": {
        "latitude": -6.2088,
        "longitude": 106.8456,
        "address": "Jl. Sudirman No. 10",
        "city": "Jakarta",
        "province": "DKI Jakarta"
      },
      "phone": "021-123456",
      "rating": 4.5,
      "services": ["consultation", "installation"],
      "distance": 0.5,
      "estimatedTravelTime": 5,
      "isOpen": true
    }
  ]
}
```

### 2. Get Store Details
**GET** `/stores/:storeId`

Dapatkan detail lengkap toko.

**Response:**
```json
{
  "success": true,
  "store": {
    "_id": "1",
    "name": "PC Store Jaya",
    "owner": "UMKM Elektronik Jaya",
    "location": { ... },
    "phone": "021-123456",
    "email": "info@pcstore.id",
    "website": "www.pcstore.id",
    "inventory": [
      { "partId": "1", "quantity": 5, "price": 1200000 }
    ],
    "services": ["consultation", "installation", "repair"],
    "technicians": [
      { "name": "Budi", "expertise": ["CPU", "Cooling"], "phone": "021-9876543" }
    ],
    "rating": 4.5,
    "reviews": 234
  }
}
```

### 3. Search Stores
**POST** `/stores/search`

Search toko berdasarkan query atau kota.

**Request Body:**
```json
{
  "query": "PC Store",
  "city": "Jakarta"
}
```

---

## 🖥️ Build Endpoints

### 1. Create Build
**POST** `/builds/create`

Buat PC build baru.

**Request Body:**
```json
{
  "userId": "user123",
  "title": "Gaming PC Build 2024",
  "budget": 15000000,
  "purpose": "gaming",
  "components": [
    { "category": "CPU", "partName": "Intel i5-13600K", "price": 2500000 },
    { "category": "GPU", "partName": "RTX 4060", "price": 3200000 }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "build": {
    "userId": "user123",
    "title": "Gaming PC Build 2024",
    "budget": 15000000,
    "purpose": "gaming",
    "components": [...],
    "totalCost": 5700000,
    "savedAt": "2024-11-26T10:00:00.000Z"
  },
  "message": "Build created successfully"
}
```

### 2. Get Build
**GET** `/builds/:buildId`

Dapatkan detail build.

### 3. Get User Builds
**GET** `/builds/user/:userId`

Dapatkan semua build milik user.

### 4. Update Build
**PUT** `/builds/:buildId`

Update build.

### 5. Delete Build
**DELETE** `/builds/:buildId`

Hapus build.

---

## 🤖 Consultant Endpoints

### 1. Chat with AI
**POST** `/consultant/chat`

Chat dengan AI consultant.

**Request Body:**
```json
{
  "message": "Saya ingin membangun PC untuk gaming dengan budget 10 juta, rekomendasi apa?",
  "context": {
    "history": [
      "Halo, saya baru di dunia PC"
    ]
  }
}
```

**Response:**
```json
{
  "success": true,
  "response": {
    "message": "Halo! Untuk budget 10 juta gaming PC, saya rekomendasikan...",
    "timestamp": "2024-11-26T10:00:00.000Z"
  }
}
```

### 2. Recommend Build
**POST** `/consultant/recommend-build`

Dapatkan rekomendasi build dari AI.

**Request Body:**
```json
{
  "budget": 15000000,
  "purpose": "gaming",
  "preferences": {
    "brand": "Intel",
    "gpu_priority": true
  }
}
```

### 3. Generate Tutorial
**POST** `/consultant/generate-tutorial`

Generate step-by-step tutorial untuk membangun PC.

**Request Body:**
```json
{
  "components": [
    { "category": "CPU", "name": "Intel i5-13600K" },
    { "category": "GPU", "name": "RTX 4070" }
  ]
}
```

### 4. Request Technician Connection
**POST** `/consultant/technician-connection`

Request koneksi dengan teknisi lokal.

**Request Body:**
```json
{
  "userLocation": {
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "serviceNeeded": "Installation consultation",
  "buildInfo": { ... }
}
```

**Response:**
```json
{
  "success": true,
  "request": {
    "requestId": "REQ-1700000000000",
    "serviceNeeded": "Installation consultation",
    "location": { ... },
    "status": "pending",
    "createdAt": "2024-11-26T10:00:00.000Z",
    "message": "Permintaan konsultasi teknisi Anda telah dibuat..."
  }
}
```

---

## Error Handling

### Error Response Format
```json
{
  "error": "Error message describing what went wrong"
}
```

### Common HTTP Status Codes
- `200` - Success
- `400` - Bad Request (missing/invalid parameters)
- `404` - Not Found
- `500` - Internal Server Error

### Example Error Response
```json
{
  "error": "Components data required"
}
```

---

## Rate Limiting

Saat ini tidak ada rate limiting. Untuk production, tambahkan:
- 100 requests per minute per IP
- 1000 requests per minute per user

---

## Testing

### Menggunakan Postman
1. Import collection atau buat requests manual
2. Set base URL: `http://localhost:5000/api`
3. Test setiap endpoint

### Menggunakan cURL
Lihat contoh di atas untuk setiap endpoint.

### Menggunakan Frontend
Frontend sudah ter-setup untuk call semua endpoints.
