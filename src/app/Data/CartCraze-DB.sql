-- Create Database
CREATE DATABASE IF NOT EXISTS cartcrazeDB;

-- Use That DB
USE cartcrazeDB;

-- Create `cares` table
CREATE TABLE IF NOT EXISTS cares (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  desc_ TEXT,
  price DECIMAL(10, 2),
  rating FLOAT,
  stock INT,
  img VARCHAR(255),
  reviews INT,
  category VARCHAR(50)
);

-- Insert products into `cares` table
INSERT INTO cares (id, title, desc_, price, rating, stock, img, reviews, category) VALUES
(1, "Krishna's Car Juice - Skin Reviver", "A fun skincare gel named after Krishna's glow formula, made for all skin types.", 499, 4.6, 20, "/Care/krishna's-car-juice.webp", 6292, "cares"),
(2, "Skin Lightening Cream", "Brightens dull skin and reduces pigmentation for a radiant glow.", 699, 4.4, 15, "/Care/skin-ligtening-cream.webp", 1075, "cares"),
(3, "AppleCare+ for iPhones", "Premium warranty and damage protection plan for Apple iPhones.", 14999, 4.8, 30, "/Care/applecare-for-iphones.webp", 4718, "cares"),
(4, "Aqui Care Hydrating Gel", "Hydrating gel with aloe vera for refreshed and moisturized skin.", 399, 4.3, 18, "/Care/aqui-care.webp", 2844, "cares"),
(5, "Beardo Beard & Hair Growth Oil", "Powerful beard and hair growth oil enriched with natural ingredients.", 799, 4.5, 25, "/Care/beardo-beard&hair-growth-oil.webp", 4523, "cares"),
(6, "Korean Glow Beauty Serum", "Imported serum from Korea for glass-like glowing skin.", 1099, 4.7, 12, "/Care/korean-glow.webp", 6740, "cares"),
(7, "Dove Dryness Care Shampoo", "Nourishing shampoo that eliminates dryness and restores softness.", 349, 4.4, 28, "/Care/dove-dryness-care-shampoo.webp", 7619, "cares"),
(8, "Vcare Insta Facial Kit", "Instant glow facial kit for quick party-ready skin care.", 499, 4.3, 22, "/Care/Vcare-insta-facial.webp", 6911, "cares"),
(9, "Aroma Care Pearl Glow Kit", "Aroma-rich skin care kit for pearl-like radiant skin.", 599, 4.4, 19, "/Care/aroma-care-pearl-glow.webp", 1784, "cares"),
(10, "CeraVe Moisturising & Cleansing Lotion", "Dual-purpose lotion for cleansing and deep moisturising.", 1299, 4.6, 10, "/Care/ceraVeMoisturising-CleansingLotion.webp", 1948, "cares"),
(11, "Caret Organic Vitamin C Serum", "Natural Vitamin C serum for anti-aging and skin brightening.", 799, 4.5, 14, "/Care/caret-organic-vitamin-C.webp", 4683, "cares"),
(12, "Maree Hair Care Bundle", "Complete hair care combo for smooth, strong, and shiny hair.", 1599, 4.6, 17, "/Care/maree-hair-care-bundle.webp", 4863, "cares");

-- Create essentials table
CREATE TABLE IF NOT EXISTS essentials (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    desc_ TEXT,
    price INT,
    rating FLOAT,
    stock INT,
    img VARCHAR(255),
    reviews INT,
    category VARCHAR(50)
);

-- Insert data into essentials table
INSERT INTO essentials (id, title, desc_, price, rating, stock, img, reviews, category) VALUES
(1, "Easy-Going Tote Bag by Mokobara", "Spacious and stylish tote bag for everyday use.", 1499, 4.5, 15, "/Essentials/easy-going-tote-moko-bara.webp", 1438, "essentials"),
(2, "Kitchenware Home Essentials Set", "Complete set of essential kitchen tools for daily cooking.", 1999, 4.6, 18, "/Essentials/kitchenware-home-Essentials.webp", 9120, "essentials"),
(3, "Puma Men's Crew T-Shirt", "Comfortable and stylish full-sleeve crewneck t-shirt.", 899, 4.3, 22, "/Essentials/pumaMen-crew.webp", 8133, "essentials"),
(4, "MARS Tools Of Titans Brush Set", "Professional makeup brush set with 10+ tools.", 1299, 4.7, 12, "/Essentials/MARS-Tools-Of-Titans-Makeup Brush-Set.webp", 9170, "essentials"),
(5, "Fastrack Black Square Sunglasses", "Trendy and durable sunglasses for men.", 1290, 4.4, 10, "/Essentials/fastrack-mens-black-square-sunglasses.webp", 8604, "essentials"),
(6, "Easy Storage Modular Superdrawer", "High-capacity modular drawer system for smart storage.", 1599, 4.6, 14, "/Essentials/easy-storage-modyular-supardrawer.webp", 1880, "essentials"),
(7, "Hand Tool Kit BMT108C", "Multipurpose tool kit for home repairs and DIY projects.", 1790, 4.5, 20, "/Essentials/hand-tool-kit-BMT108C.webp", 9978, "essentials"),
(8, "Blue Heaven Bridal Makeup Kit", "Complete bridal makeup collection with premium products.", 1099, 4.3, 25, "/Essentials/blue-heaven-bridal-makeupKit.webp", 1412, "essentials"),
(9, "Adventure Medical Kits Pack", "Compact first-aid medical kit for all types of travel.", 849, 4.4, 16, "/Essentials/adventure-medical-kits.webp", 1253, "essentials"),
(10, "Herbs All-in-One Glam Kit", "Complete glam kit with herbal beauty products.", 1399, 4.6, 19, "/Essentials/herbs-all-in-one-glam-kit.webp", 9370, "essentials"),
(11, "Stanley Home Tool Kit", "Reliable and strong tools for every home need.", 1899, 4.5, 17, "/Essentials/stanley-home-tool-kit.webp", 8902, "essentials"),
(12, "Maped Study Geometry Box", "Geometry box set with all essential stationery items.", 299, 4.2, 30, "/Essentials/maped-study-geometry-box.webp", 9637, "essentials"),
(13, "Wakefit Sage Study Table", "Minimalist and durable study table for focused work.", 4999, 4.7, 8, "/Essentials/wakefit-sage-study-table.webp", 9234, "essentials"),
(14, "Grammar & Composition Book Set", "Combo of grammar and writing books for students.", 699, 4.4, 24, "/Essentials/grammer-composition-book-set.webp", 4396, "essentials"),
(15, "Ultrasonic Tooth Cleaning Tools", "Professional-grade dental cleaning tool set.", 1199, 4.5, 21, "/Essentials/ultrasonic-tooth-cleaning-tools.webp", 1594, "essentials"),
(16, "Men’s Full Sleeve Crewneck T-Shirt", "Casual everyday wear t-shirt with comfortable fit.", 799, 4.3, 23, "/Essentials/mens-wear-sleeve-crewneck-Tshirt.webp", 1096, "essentials");

-- Create gadgets Table
CREATE TABLE IF NOT EXISTS gadgets (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  desc_ TEXT,
  price INT,
  rating FLOAT,
  stock INT,
  img VARCHAR(255),
  reviews INT,
  category VARCHAR(50)
);

-- Insert Data into gadgets table
INSERT INTO gadgets (id, title, desc_, price, rating, stock, img, reviews, category) VALUES
(1, "XPG Spectrix D60G RAM", "High-performance RGB DDR4 RAM for gaming and heavy multitasking.", 4599, 4.5, 32, "/Gadgets/Adata-XPG-Spectrix-D60G.webp", 3263, "Gadgets"),
(2, "Smart Air Purifier", "HEPA filter with smart sensors for real-time air quality control.", 7499, 4.3, 18, "/Gadgets/Air-purifier.webp", 5613, "Gadgets"),
(3, "Curved Gaming Monitor", "32-inch FHD curved display with 165Hz refresh rate and low latency.", 18999, 4.7, 15, "/Gadgets/Curved-Monitor.Webp", 4462, "Gadgets"),
(4, "Echo Dot (Smart Speaker)", "Voice-controlled smart speaker with Alexa and improved bass.", 3499, 4.4, 25, "/Gadgets/Echo-dot.webp", 2777, "Gadgets"),
(5, "Fitness Smartwatch", "Tracks heart rate, steps, sleep and syncs with your phone.", 2299, 4.2, 50, "/Gadgets/fitness-smartwatch.webp", 7007, "Gadgets"),
(6, "Gaming CPU Tower", "Custom-built CPU with RGB fans and latest-gen processor.", 47999, 4.6, 7, "/Gadgets/Gaming-CPU.webp", 2093, "Gadgets"),
(7, "Wired Gaming Headset", "Surround sound headphones with noise-canceling mic.", 1999, 4.3, 40, "/Gadgets/gaming-headset.webp", 1475, "Gadgets"),
(8, "RGB Gaming Setup", "Full RGB desk setup with accessories and lighting sync.", 15999, 4.8, 12, "/Gadgets/Gaming-setup.webp", 4926, "Gadgets"),
(9, "Latest 5G Smartphone", "Edge-to-edge display with 5G support and fast charging.", 27999, 4.5, 20, "/Gadgets/latest-smartphone.webp", 5914, "Gadgets"),
(10, "Portable Bluetooth Speaker", "Compact design with powerful bass and waterproof body.", 1399, 4.4, 33, "/Gadgets/portable-speaker.webp", 7474, "Gadgets"),
(11, "RGB Mechanical Keyboard", "Full-sized keyboard with customizable lighting effects.", 2999, 4.6, 22, "/Gadgets/rgb-keyboard.webp", 3918, "Gadgets"),
(12, "Smart Wireless Earbuds", "Touch control earbuds with clear audio and long battery life.", 1799, 4.2, 45, "/Gadgets/smart-wireless-earbuds.webp", 1088, "Gadgets"),
(13, "Fast Charging Power Bank", "10000mAh power bank with quick charge support and LED display.", 1099, 4.3, 60, "/Gadgets/fast-charging-power-bank.webp", 3161, "Gadgets");

-- Create travels table
CREATE TABLE IF NOT EXISTS travels (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    desc_ TEXT,
    price INT,
    rating FLOAT,
    stock INT,
    img VARCHAR(255),
    reviews INT,
    category VARCHAR(100)
);

-- Insert data into travels table
INSERT INTO travels (id, title, desc_, price, rating, stock, img, reviews, category) VALUES
(1, 'Safari Eclipse Cabin Luggage', 'Compact and durable cabin-size trolley ideal for frequent flyers.', 2799, 4.3, 30, '/Travel/Safari-Eclipse-Cabin.webp', 7215, 'travels'),
(2, 'Torrento Expandable Luggage', 'Spacious, expandable travel bag with smooth wheels and secure zippers.', 3499, 4.5, 20, '/Travel/Torrento-Expandable.webp', 3039, 'travels'),
(3, 'Kaka Travel Backpack', 'Stylish, multifunctional backpack with anti-theft design and USB port.', 1799, 4.2, 42, '/Travel/Kaka-travel-backpack.webp', 7735, 'travels'),
(4, 'Park Avenue Travel Kit', 'Essential grooming kit for men with premium toiletries for travel.', 499, 4.0, 58, '/Travel/Park-Avenue-travel-kit.webp', 6177, 'travels'),
(5, 'Tata 1mg First Aid Travel Pouch', 'Compact first aid kit for safe and smart travel emergencies.', 399, 4.4, 65, '/Travel/Tata-1mg-first-aid-kit-travel-pouch.webp', 5832, 'travels'),
(6, 'Nestasia Travel Kit - Set of 4', 'Organize all your travel essentials with this durable kit set.', 999, 4.3, 37, '/Travel/Nestasia-travel-kit-set-of-4.webp', 9378, 'travels'),
(7, 'Mokobara Transit Luggage Set', 'Premium luggage set with scratch-resistant surface and TSA locks.', 5999, 4.7, 15, '/Travel/mokobara-transit-luggage-set.webp', 5893, 'travels'),
(8, 'American Tourister Breett', 'Trusted brand offering reliable, stylish, and durable travel gear.', 4499, 4.5, 25, '/Travel/american-tourister-breett.webp', 9192, 'travels'),
(9, 'Mamaearth Men’s Perfume Set', 'Travel-sized premium fragrance set for men by Mamaearth.', 699, 4.1, 50, '/Travel/mamaearth-mens-eau-de-perfum-set.webp', 7453, 'travels'),
(10, 'Xiaomi Ultra Slim Power Bank', '10000mAh fast-charging slim power bank with Type-C input/output.', 1299, 4.4, 38, '/Travel/xiaomi-ultra-slim-power-bank.webp', 9086, 'travels'),
(11, 'JBL Flip Essential Bluetooth Speaker', 'Waterproof portable speaker with powerful bass and long battery.', 3199, 4.6, 22, '/Travel/jbl-flip-essential-portable-bluetooth.webp', 3897, 'travels'),
(12, 'boAt Wireless Earbuds', 'Stylish and ergonomic wireless earbuds with long battery life.', 1699, 4.3, 45, '/Travel/boat-wireless-earbuds.webp', 7583, 'travels'),
(13, 'Maxis Duffel Bag', 'Spacious, lightweight duffel bag perfect for weekend getaways.', 799, 4.2, 32, '/Travel/maxis-duffel-bag.webp', 4210, 'travels'),
(14, 'Matein Carry-On Backpack', 'Expandable carry-on backpack with laptop sleeve and charging port.', 1599, 4.5, 29, '/Travel/matein-carry-on-backpack.webp', 1999, 'travels'),
(15, 'Skybags Cityscape Backpack', 'Urban-style travel backpack with multiple compartments.', 1299, 4.3, 40, '/Travel/skybags-cityscape.webp', 3630, 'travels');