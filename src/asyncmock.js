

// const products = [
//     {
//         id:"1",
//         reference: "HNK-01",
//         category:"SmartTV",
//         price: 1599,
//         img:"https://primera-entrega-tekni.vercel.app/img/tv1.webp",
//         idCat:"3",
//         features:"Immerse yourself in stunning visuals with our Smart TV's 4K UHD display, delivering vibrant colors and sharp details. Enjoy a smart viewing experience with built-in streaming apps and voice control.",
//         compatibility:"Connect effortlessly with multiple HDMI and USB ports. Our Smart TV is compatible with various devices, offering seamless connectivity for gaming consoles, soundbars, and more.",
//         updates:"Powered by the latest version of [Smart TV OS], our TV receives regular updates, ensuring access to new features, improved performance, and the latest streaming services."
//     },
//     {
//         id:"2",
//         reference: "NLX-01",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone1.webp",
//         features:"Unleash unparalleled performance with the cutting-edge octa-core processor and a spacious 128GB storage. Capture every detail with the high-resolution camera.",
//         compatibility:"Stay ahead with 5G connectivity for lightning-fast downloads and seamless streaming. Share effortlessly with Bluetooth 5.0 and enjoy the convenience of wireless charging.",
//         updates: "Experience the latest Android [version] for a smooth and intuitive interface. Regular updates ensure your smartphone is always optimized and secure."
//     },
//     {
//         id:"3",
//         reference:"NLX-02",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone2.webp",
//         features:"Immerse yourself in stunning visuals on the expansive Super AMOLED display. The powerful octa-core processor and 256GB storage redefine your smartphone experience.",
//         compatibility:"Embrace the future with 5G connectivity. Connect seamlessly with Bluetooth 5.0 and enjoy wireless charging for a hassle-free experience.",
//         updates:"Powered by the latest Android [version], our smartphone guarantees the latest features and security updates, keeping your device at its best."

//     },
//     {
//         id:"4",
//         reference: "NLX-03",
//         category:"Smartphone",
//         price:799 ,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone3.webp",
//         features:"Revolutionize your smartphone experience with our flagship model. The octa-core processor and 512GB storage deliver unmatched power and storage capabilities.",
//         compatibility: "Step into the future with 5G connectivity for lightning-fast data speeds. Connect effortlessly with Bluetooth 5.0 and experience wireless charging convenience.",
//         updates:"Experience the pinnacle of Android [version] with our smartphone. Regular updates ensure your device is always optimized, secure, and up-to-date."
//     },
//     {
//         id:"5",
//         reference:"NLX-04",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone4.webp",
//         features:"Our smartphone's octa-core processor ensures a smooth and responsive experience. With 256GB storage, it's a powerhouse for your multimedia and productivity needs.",
//         compatibility:"Connect seamlessly with 5G technology. Bluetooth 5.0 facilitates easy sharing, and wireless charging adds a touch of convenience to your daily routine.",
//         updates: "Enjoy the latest Android [version] features and security updates. Our regular software updates keep your smartphone running at its peak."
//     },
//     {
//         id:"6",
//         reference:"NLX-05",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone5.webp",
//         features:"Experience the future with our octa-core powerhouse and 128GB storage. Capture stunning moments with the advanced camera system.",
//         compatibility:"Connect effortlessly with 5G speed and share seamlessly with Bluetooth 5.0. Cut the cords with wireless charging for a clutter-free experience.",
//         updates:"Our smartphone runs on the latest Android [version], ensuring you have access to the latest features and security enhancements through regular updates."
//     },
//     {
//         id:"7",
//         reference:"NLX-06",
//         category:"Smartphone",
//         price:799 ,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone6.webp",
//         features:"Immerse yourself in cinematic brilliance with our Super AMOLED display. The octa-core processor and 256GB storage redefine your smartphone experience.",
//         compatibility:"Stay connected with the power of 5G. Share wirelessly with Bluetooth 5.0 and experience the convenience of wireless charging for a tangle-free lifestyle.",
//         updates:"Powered by the latest Android [version], our smartphone ensures you stay at the forefront with the latest features and security updates."
//     },
//     {
//         id:"8",
//         reference:"NLX-07",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone7.webp",
//         features: "Elevate your smartphone experience with the powerful octa-core processor and 128GB storage. Capture every detail with our advanced camera system.",
//         compatibility:"Experience the future with 5G connectivity. Connect effortlessly with Bluetooth 5.0 and enjoy the convenience of wireless charging for a seamless digital life.",
//         updates:"Stay updated and secure with the latest Android [version]. Our smartphone receives regular updates, ensuring optimal performance and cutting-edge features."
//     },
//     {
//         id:"9",
//         reference:"NLX-08",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone8.webp",
//         features: "Our smartphone is a multitasking marvel, powered by an advanced octa-core processor and featuring 256GB storage. Capture stunning visuals with our high-resolution camera.",
//         compatibility:"Stay ahead with 5G connectivity, and effortlessly share with Bluetooth 5.0. Cut the cords with wireless charging for a truly modern smartphone experience.",
//         updates:"Experience the latest Android [version] with our smartphone. Regular updates ensure your device is always optimized and secure, delivering a premium user experience."
//     },
//     {
//         id:"10",
//         reference:"NLX-09",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone9.webp",
//         features:"Revolutionize your smartphone experience with our flagship model. The octa-core processor and 512GB storage deliver unparalleled power and storage capabilities.",
//         compatibility: "Step into the future with 5G connectivity. Connect effortlessly with Bluetooth 5.0 and experience wireless charging convenience.",
//         updates:"Experience the pinnacle of Android [version] with our smartphone. Regular updates ensure your device is always optimized, secure, and up-to-date."
//     },
//     {
//         id:"11",
//         reference:"NLX-10",
//         category:"Smartphone",
//         price:799,
//         idCat:"2",
//         img:"https://primera-entrega-tekni.vercel.app/img/smartphone10.webp",
//         features:"Our smartphone's octa-core processor ensures a smooth and responsive experience. With 256GB storage, it's a powerhouse for your multimedia and productivity needs.",
//         compatibility: "Connect seamlessly with 5G technology. Bluetooth 5.0 facilitates easy sharing, and wireless charging adds a touch of convenience to your daily routine.",
//         updates:"Enjoy the latest Android [version] features and security updates. Our regular software updates keep your smartphone running at its peak."
//     },
//     {
//         id:"12",
//         reference:"XKX-01",
//         category:"Laptop",
//         price: 1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop1.webp",
//         features:"Experience top-notch performance with our laptop's powerful processor and expansive 512GB SSD storage. Enjoy crystal-clear visuals on the high-resolution display.",
//         compatibility:"Stay connected on the go with ultra-fast Wi-Fi 6 technology. Connect seamlessly to other devices with Bluetooth 5.0 and experience lightning-fast file transfers.",
//         updates:"Run on the latest Windows [version], ensuring a user-friendly interface. Enjoy automatic updates for the latest features and security enhancements."
//     },
//     {
//         id:"13",
//         reference: "HNK-02",
//         category:"SmartTV",
//         price: 1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv2.webp",
//         features:"Step into the future with our Smart TV's Quantum Dot technology, delivering an unparalleled color and contrast experience. Access a world of entertainment with the intuitive Smart Hub interface.",
//         compatibility:"Connect wirelessly with Bluetooth and Wi-Fi, and enjoy multiple HDMI and USB ports for diverse device connections. Our Smart TV seamlessly integrates with gaming consoles, sound systems, and more.",
//         updates:"Running on the latest version of [Smart TV OS], our TV guarantees regular updates for a constantly evolving and optimized viewing experience."
//     },
//     {
//         id:"14",
//         reference: "HNK-03",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv3.webp",
//         features:"Transform your living room with our Smart TV's bezel-less design and 8K resolution. Immerse yourself in lifelike visuals and access your favorite content effortlessly with voice control.",
//         compatibility:"Connect seamlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV is compatible with a range of devices, offering a versatile entertainment hub for gaming, streaming, and more.",
//         updates: "Experience the power of [Smart TV OS], providing a user-friendly interface and access to a wide array of apps. Regular updates ensure your Smart TV stays at the forefront of technology."
//     },
//     {
//         id:"15",
//         reference:"HNK-04",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv4.webp",
//         features:"Experience cinematic brilliance with our Smart TV's OLED display, offering deep blacks and vibrant colors. Enjoy a smart home integration with voice control and compatibility with leading smart home platforms.",
//         compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV seamlessly integrates with gaming consoles, soundbars, and other devices for a complete entertainment setup.",
//         updates:"Powered by the latest version of [Smart TV OS], our TV ensures regular updates for enhanced features, improved security, and access to the latest streaming services."
//     },
//     {
//         id:"16",
//         reference:"HNK-05",
//         category:"SmartTV",
//         price: 1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv5.webp",
//         features:"Enhance your entertainment experience with our Smart TV's QLED display and adaptive brightness. Navigate through a world of content with the intuitive Smart Hub and enjoy personalized recommendations.",
//         compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV is designed to seamlessly integrate with various devices, providing a hassle-free entertainment setup.",
//         updates:"Running on the latest version of [Smart TV OS], our TV guarantees regular updates, ensuring continuous improvements, and access to the latest features and apps."
//     },
//     {
//         id:"17",
//         reference:"HNK-06",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv6.webp",
//         features:"Immerse yourself in a true home theater experience with our Smart TV's Dolby Vision HDR and Dolby Atmos sound. Access your favorite content with ease using voice control and explore a wide range of apps.",
//         compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV is compatible with gaming consoles, sound systems, and various devices, offering a versatile entertainment hub.",
//         updates:"Experience the seamless interface of [Smart TV OS], with regular updates ensuring your TV is always optimized and ready for the latest streaming services."
//     },
//     {
//         id:"18",
//         reference:"HNK-07",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv7.webp",
//         features:"Revolutionize your viewing experience with our Smart TV's Mini-LED display technology, providing enhanced contrast and brightness. Access a world of content with the integrated streaming apps and voice-controlled navigation.",
//         compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV seamlessly integrates with gaming consoles, soundbars, and more for a complete entertainment solution.",
//         updates:"Running on the latest version of [Smart TV OS], our TV ensures regular updates, keeping your Smart TV at the cutting edge of technology with new features and enhanced performance."
//     },
//     {
//         id:"19",
//         reference:"HNK-08",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv8.webp",
//         features:"Elevate your home entertainment with our Smart TV's Crystal Processor and immersive sound quality. Enjoy a seamless viewing experience with voice-controlled navigation and a user-friendly interface.",
//         compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV seamlessly integrates with various devices, offering a versatile entertainment hub for your home.",
//         updates:"Experience the latest advancements with [Smart TV OS], providing regular updates for improved features, security, and access to a diverse range of streaming services."
//     },
//     {
//         id:"20",
//         reference:"HNK-09",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv9.webp",
//         features: "Transform your living room with our Smart TV's sleek design and 4K HDR display. Enjoy hands-free control with built-in voice recognition and explore a vast library of apps with ease.",
//         compatibility:"Connect seamlessly with multiple HDMI and USB ports. Our Smart TV is designed for compatibility with gaming consoles, sound systems, and a variety of other devices for a connected entertainment experience.",
//         updates:"Powered by the latest version of [Smart TV OS], our TV receives regular updates, ensuring your Smart TV stays up-to-date with new features, security enhancements, and app additions."
//     },
//     {
//         id:"21",
//         reference:"HNK-10",
//         category:"SmartTV",
//         price:1599,
//         idCat:"3",
//         img:"https://primera-entrega-tekni.vercel.app/img/tv10.webp",
//         features:"Step into a world of vibrant colors and sharp details with our Smart TV's QLED display. Navigate through a multitude of apps effortlessly with voice control and enjoy a truly personalized entertainment experience.",
//         compatibility:"Connect seamlessly with multiple HDMI and USB ports. Our Smart TV is designed for compatibility with gaming consoles, soundbars, and other devices for a complete home entertainment setup.",
//         updates:"Running on the latest version of [Smart TV OS], our TV ensures regular updates, keeping your Smart TV optimized and ready for the latest features and streaming services."
//     },
//     {
//         id:"22",
//         reference:"XKX-02",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop2.webp",
//         features:"Boost your productivity with our laptop's octa-core processor and large 1TB HDD. Immerse yourself in a stunning visual experience on the high-definition display.",
//         compatibility:"Connect effortlessly with versatile USB-C ports and stay online with the latest Wi-Fi 6 technology. Experience hassle-free Bluetooth 5.0 connectivity for all your devices.",
//         updates:"Built on the foundation of Windows [version], our laptop ensures a familiar and efficient user experience. Regular updates keep your system optimized and secure."
//     },
//     {
//         id:"23",
//         reference:"XKX-03",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop3.webp",
//         features:"Unleash creativity with our laptop's powerful hexa-core processor and 256GB SSD. Enjoy immersive visuals on the vibrant Full HD display with touchscreen functionality.",
//         compatibility:"Connect to peripherals seamlessly with Thunderbolt 4 ports. Stay connected with Wi-Fi 6 technology and transfer files effortlessly with Bluetooth 5.1.",
//         updates:"Experience the seamless integration of macOS [version]. Our laptop receives regular updates for performance optimization and the latest features."
//     },
//     {
//         id:"24",
//         reference:"XKX-04",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop4.webp",
//         features:"Experience smooth multitasking with our laptop's octa-core processor and 512GB SSD storage. Enjoy crisp visuals on the high-resolution display with anti-glare technology.",
//         compatibility:"Stay connected with ultra-fast Wi-Fi 6 and versatile USB-C ports. Connect wirelessly to other devices with Bluetooth 5.0 for efficient file sharing.",
//         updates: "Run on the latest version of Windows, ensuring a secure and user-friendly computing experience. Automatic updates keep your system running smoothly."
//     },
//     {
//         id:"25",
//         reference:"XKX-05",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop5.webp",
//         features:"Our laptop excels in performance with its hexa-core processor and generous 1TB HDD. Immerse yourself in stunning visuals on the high-definition display.",
//         compatibility:"Connect seamlessly with USB-C and HDMI ports. Stay online with the latest Wi-Fi 6 technology and share effortlessly with Bluetooth 5.0.",
//         updates:"Experience the latest features and security enhancements with Windows [version]. Our laptop ensures regular updates for a reliable and secure computing environment."
//     },
//     {
//         id:"26",
//         reference:"XKX-06",
//         category:"Laptop",
//         price:1099 ,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop6.webp",
//         features:"Fuel your creativity with our laptop's octa-core processor and 256GB SSD. Immerse yourself in vibrant visuals on the high-resolution display with IPS technology.",
//         compatibility:"Connect to a variety of peripherals with USB-C and HDMI ports. Stay connected on the go with Wi-Fi 6 and share files effortlessly with Bluetooth 5.1.",
//         updates:"Experience the power of Windows [version]. Our laptop receives regular updates, keeping your system optimized and secure."
//     },
//     {
//         id:"27",
//         reference:"XKX-07",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop7.webp",
//         features:"Our laptop is a powerhouse with its octa-core processor and lightning-fast 1TB SSD. Enjoy a visual feast on the high-resolution display with a high refresh rate.",
//         compatibility:"Connect seamlessly with Thunderbolt 4 ports and stay online with Wi-Fi 6 technology. Experience efficient file transfers with Bluetooth 5.1 connectivity.",
//         updates:"Built on the foundation of macOS [version], our laptop ensures a sleek and user-friendly experience. Regular updates keep your system at its best."
//     },
//     {
//         id:"28",
//         reference:"XKX-08",
//         category:"Laptop",
//         price:1099 ,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop8.webp",
//         features:"Experience unmatched performance with our laptop's hexa-core processor and 512GB SSD storage. Enjoy a crisp and clear visual experience on the high-definition display.",
//         compatibility:"Connect effortlessly with versatile USB-C ports and stay online with Wi-Fi 6 technology. Share files with ease using Bluetooth 5.0 connectivity.",
//         updates:"Run on the latest version of Windows, ensuring a secure and efficient computing experience. Automatic updates keep your system optimized and secure."
//     },
//     {
//         id:"29",
//         reference:"XKX-09",
//         category:"Laptop",
//         price:1099,
//         idCat:"1",
//         img:"https://primera-entrega-tekni.vercel.app/img/laptop9.webp",
//         features:"Elevate your productivity with our laptop's powerful octa-core processor and expansive 1TB HDD. Immerse yourself in stunning visuals on the high-definition display.",
//         compatibility:"Stay connected with versatile USB-C ports and the latest Wi-Fi 6 technology. Connect wirelessly with Bluetooth 5.1 for efficient file sharing.",
//         updates:"Experience the latest features and security enhancements with Windows [version]. Our laptop ensures regular updates for a reliable and secure computing environment."
//     },
//     {
//         id:"30",
//         reference:"KJN-01",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset3.webp",
//         features:"Elevate your music experience with our premium wireless headset. Boasting Hi-Res audio, touch-sensitive controls, and a foldable design for portability, it's the perfect blend of style and functionality.",
//         compatibility:"Wirelessly connect via Bluetooth 5.0 and enjoy seamless compatibility with smartphones, tablets, and other Bluetooth-enabled devices. NFC pairing adds a touch of convenience.",
//         updates:"Designed to work seamlessly across multiple operating systems, our wireless headset ensures compatibility and receives regular firmware updates for continuous improvement."
//     },
//     {
//         id:"31",
//         reference:"KJN-02",
//         category:"Headset",
//         price:179 ,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset4.webp",
//         features:"Immerse yourself in crystal-clear communication with our business-grade headset. Featuring noise-canceling microphones, comfortable padding, and a lightweight design, it's ideal for professional use.",
//         compatibility:"Connect easily via USB or 3.5mm audio jack for versatile compatibility with computers, laptops, and other devices. Perfect for business meetings and virtual collaboration.",
//         updates:"Engineered for seamless integration with various operating systems, our business headset receives regular updates to enhance compatibility and ensure optimal performance."
//     },
//     {
//         id:"32",
//         reference:"KJN-03",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset5.webp",
//         features:"Step into the world of virtual reality with our immersive VR headset. Featuring high-resolution displays, 3D spatial audio, and ergonomic design, it delivers an unparalleled VR experience.",
//         compatibility:"Connect to your VR system effortlessly with USB and HDMI connections. Designed for compatibility with leading VR platforms, our headset ensures a smooth VR journey.",
//         updates:"Compatible with major operating systems, our VR headset receives regular updates to enhance the virtual reality experience and introduce new features."
//     },
//     {
//         id:"33",
//         reference:"KJN-04",
//         category:"Headset",
//         price:179 ,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset6.webp",
//         features:"Unleash your inner athlete with our sports-focused wireless headset. Sweat-resistant, secure fit, and customizable EQ settings make it the perfect companion for your active lifestyle.",
//         compatibility:"Connect wirelessly via Bluetooth 5.0 for hassle-free workouts. Compatible with most smartphones and fitness devices, our headset is designed to keep up with your active routine.",
//         updates:"Compatible with various operating systems, our sports headset receives regular updates to improve performance during workouts and enhance overall user experience."
//     },
//     {
//         id:"34",
//         reference:"KJN-05",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset7.webp",
//         features:"Immerse yourself in gaming audio perfection with our surround sound gaming headset. Featuring customizable RGB lighting, on-the-fly EQ adjustments, and a comfortable design, it's a gamer's dream.",
//         compatibility:"Connect effortlessly with USB and 3.5mm audio jacks. Designed for compatibility with gaming consoles, PCs, and mobile devices for a versatile gaming experience.",
//         updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced performance and additional features."
//     },
//     {
//         id:"35",
//         reference:"KJN-06",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset8.webp",
//         features:"Experience cinematic sound quality with our premium over-ear headphones. Boasting Hi-Res audio, active noise cancellation, and a luxurious design, it's the epitome of audio excellence.",
//         compatibility:"Connect wirelessly via Bluetooth 5.1 for an untethered listening experience. Compatible with smartphones, tablets, and other Bluetooth-enabled devices for on-the-go luxury.",
//         updates:"Designed for seamless integration with various operating systems, our premium headphones receive regular firmware updates to enhance audio quality and introduce new features."
//     },
//     {
//         id:"36",
//         reference:"KJN-07",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset9.webp",
//         features:"Elevate your gaming experience with our wireless gaming headset. Featuring low-latency audio, customizable RGB lighting, and a comfortable fit, it's a must-have for avid gamers.",
//         compatibility:"Connect wirelessly via 2.4GHz wireless or Bluetooth 5.0 for versatile gaming setups. Compatible with gaming consoles, PCs, and mobile devices for a true gaming ecosystem.",
//         updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced gaming performance and added features."
//     },
//     {
//         id:"37",
//         reference:"KJN-08",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset2.webp",
//         features:"Experience gaming like never before with our high-performance gaming headset. Dynamic surround sound, customizable RGB lighting, and a comfortable fit make it the ultimate gaming accessory.",
//         compatibility:"Connect effortlessly with USB and 3.5mm audio jacks. Designed for compatibility with gaming consoles, PCs, and mobile devices for a versatile gaming experience.",
//         updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced performance and additional features."
//     },
//     {
//         id:"38",
//         reference:"KJN-09",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset10.webp",
//         features:"Immerse yourself in the ultimate audio experience with our premium noise-canceling headphones. Featuring Hi-Res audio, touch-sensitive controls, and a foldable design for portability.",
//         compatibility:"Connect wirelessly via Bluetooth 5.1 and enjoy seamless compatibility with smartphones, tablets, and other Bluetooth-enabled devices. NFC pairing adds a touch of convenience.",
//         updates:"Designed for seamless integration with various operating systems, our noise-canceling headphones receive regular firmware updates for continuous improvement in audio quality and user experience."
//     },
//     {
//         id:"39",
//         reference:"KJN-10",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset11.webp",
//         features:"Unleash the true potential of your music with our audiophile-grade wired headphones. Featuring studio-quality sound, premium materials, and a comfortable fit, it's a music lover's delight.",
//         compatibility:"Connect via high-quality audio cables for an immersive wired audio experience. Compatible with a wide range of audio devices, our headphones deliver exceptional sound quality.",
//         updates:"Designed for compatibility with various operating systems, our audiophile headphones receive regular firmware updates to enhance audio performance and introduce new features."
//     },
//     {
//         id:"40",
//         reference:"KJN-11",
//         category:"Headset",
//         price:179,
//         idCat:"4",
//         img:"https://primera-entrega-tekni.vercel.app/img/headset1.webp",
//         features:"Immerse yourself in superior audio quality with our premium headset. Featuring noise-canceling technology, ergonomic design, and customizable sound profiles, it's the perfect companion for audiophiles.",
//         compatibility:"Stay connected wirelessly with Bluetooth 5.1. Compatible with a wide range of devices, our headset ensures a seamless connection for both work and play.",
//         updates:"Designed for cross-platform compatibility, our headset is ready to enhance your audio experience on any operating system. Firmware updates ensure continuous improvement."
//     }
// ]



const products = [
    {
        id:"1",
        reference: "HNK-01",
        category:"SmartTV",
        price: 1599,
        img: process.env.PUBLIC_URL + "/img/tv1.webp",
        idCat:"3",
        features:"Immerse yourself in stunning visuals with our Smart TV's 4K UHD display, delivering vibrant colors and sharp details. Enjoy a smart viewing experience with built-in streaming apps and voice control.",
        compatibility:"Connect effortlessly with multiple HDMI and USB ports. Our Smart TV is compatible with various devices, offering seamless connectivity for gaming consoles, soundbars, and more.",
        updates:"Powered by the latest version of [Smart TV OS], our TV receives regular updates, ensuring access to new features, improved performance, and the latest streaming services."
    },
    {
        id:"2",
        reference: "NLX-01",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone1.webp",
        features:"Unleash unparalleled performance with the cutting-edge octa-core processor and a spacious 128GB storage. Capture every detail with the high-resolution camera.",
        compatibility:"Stay ahead with 5G connectivity for lightning-fast downloads and seamless streaming. Share effortlessly with Bluetooth 5.0 and enjoy the convenience of wireless charging.",
        updates: "Experience the latest Android [version] for a smooth and intuitive interface. Regular updates ensure your smartphone is always optimized and secure."
    },
    {
        id:"3",
        reference:"NLX-02",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone2.webp",
        features:"Immerse yourself in stunning visuals on the expansive Super AMOLED display. The powerful octa-core processor and 256GB storage redefine your smartphone experience.",
        compatibility:"Embrace the future with 5G connectivity. Connect seamlessly with Bluetooth 5.0 and enjoy wireless charging for a hassle-free experience.",
        updates:"Powered by the latest Android [version], our smartphone guarantees the latest features and security updates, keeping your device at its best."

    },
    {
        id:"4",
        reference: "NLX-03",
        category:"Smartphone",
        price:799 ,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone3.webp",
        features:"Revolutionize your smartphone experience with our flagship model. The octa-core processor and 512GB storage deliver unmatched power and storage capabilities.",
        compatibility: "Step into the future with 5G connectivity for lightning-fast data speeds. Connect effortlessly with Bluetooth 5.0 and experience wireless charging convenience.",
        updates:"Experience the pinnacle of Android [version] with our smartphone. Regular updates ensure your device is always optimized, secure, and up-to-date."
    },
    {
        id:"5",
        reference:"NLX-04",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone4.webp",
        features:"Our smartphone's octa-core processor ensures a smooth and responsive experience. With 256GB storage, it's a powerhouse for your multimedia and productivity needs.",
        compatibility:"Connect seamlessly with 5G technology. Bluetooth 5.0 facilitates easy sharing, and wireless charging adds a touch of convenience to your daily routine.",
        updates: "Enjoy the latest Android [version] features and security updates. Our regular software updates keep your smartphone running at its peak."
    },
    {
        id:"6",
        reference:"NLX-05",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone5.webp",
        features:"Experience the future with our octa-core powerhouse and 128GB storage. Capture stunning moments with the advanced camera system.",
        compatibility:"Connect effortlessly with 5G speed and share seamlessly with Bluetooth 5.0. Cut the cords with wireless charging for a clutter-free experience.",
        updates:"Our smartphone runs on the latest Android [version], ensuring you have access to the latest features and security enhancements through regular updates."
    },
    {
        id:"7",
        reference:"NLX-06",
        category:"Smartphone",
        price:799 ,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone6.webp",
        features:"Immerse yourself in cinematic brilliance with our Super AMOLED display. The octa-core processor and 256GB storage redefine your smartphone experience.",
        compatibility:"Stay connected with the power of 5G. Share wirelessly with Bluetooth 5.0 and experience the convenience of wireless charging for a tangle-free lifestyle.",
        updates:"Powered by the latest Android [version], our smartphone ensures you stay at the forefront with the latest features and security updates."
    },
    {
        id:"8",
        reference:"NLX-07",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img:process.env.PUBLIC_URL + "/img/smartphone7.webp",
        features: "Elevate your smartphone experience with the powerful octa-core processor and 128GB storage. Capture every detail with our advanced camera system.",
        compatibility:"Experience the future with 5G connectivity. Connect effortlessly with Bluetooth 5.0 and enjoy the convenience of wireless charging for a seamless digital life.",
        updates:"Stay updated and secure with the latest Android [version]. Our smartphone receives regular updates, ensuring optimal performance and cutting-edge features."
    },
    {
        id:"9",
        reference:"NLX-08",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone8.webp",
        features: "Our smartphone is a multitasking marvel, powered by an advanced octa-core processor and featuring 256GB storage. Capture stunning visuals with our high-resolution camera.",
        compatibility:"Stay ahead with 5G connectivity, and effortlessly share with Bluetooth 5.0. Cut the cords with wireless charging for a truly modern smartphone experience.",
        updates:"Experience the latest Android [version] with our smartphone. Regular updates ensure your device is always optimized and secure, delivering a premium user experience."
    },
    {
        id:"10",
        reference:"NLX-09",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone9.webp",
        features:"Revolutionize your smartphone experience with our flagship model. The octa-core processor and 512GB storage deliver unparalleled power and storage capabilities.",
        compatibility: "Step into the future with 5G connectivity. Connect effortlessly with Bluetooth 5.0 and experience wireless charging convenience.",
        updates:"Experience the pinnacle of Android [version] with our smartphone. Regular updates ensure your device is always optimized, secure, and up-to-date."
    },
    {
        id:"11",
        reference:"NLX-10",
        category:"Smartphone",
        price:799,
        idCat:"2",
        img: process.env.PUBLIC_URL + "/img/smartphone10.webp",
        features:"Our smartphone's octa-core processor ensures a smooth and responsive experience. With 256GB storage, it's a powerhouse for your multimedia and productivity needs.",
        compatibility: "Connect seamlessly with 5G technology. Bluetooth 5.0 facilitates easy sharing, and wireless charging adds a touch of convenience to your daily routine.",
        updates:"Enjoy the latest Android [version] features and security updates. Our regular software updates keep your smartphone running at its peak."
    },
    {
        id:"12",
        reference:"XKX-01",
        category:"Laptop",
        price: 1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop1.webp",
        features:"Experience top-notch performance with our laptop's powerful processor and expansive 512GB SSD storage. Enjoy crystal-clear visuals on the high-resolution display.",
        compatibility:"Stay connected on the go with ultra-fast Wi-Fi 6 technology. Connect seamlessly to other devices with Bluetooth 5.0 and experience lightning-fast file transfers.",
        updates:"Run on the latest Windows [version], ensuring a user-friendly interface. Enjoy automatic updates for the latest features and security enhancements."
    },
    {
        id:"13",
        reference: "HNK-02",
        category:"SmartTV",
        price: 1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv2.webp",
        features:"Step into the future with our Smart TV's Quantum Dot technology, delivering an unparalleled color and contrast experience. Access a world of entertainment with the intuitive Smart Hub interface.",
        compatibility:"Connect wirelessly with Bluetooth and Wi-Fi, and enjoy multiple HDMI and USB ports for diverse device connections. Our Smart TV seamlessly integrates with gaming consoles, sound systems, and more.",
        updates:"Running on the latest version of [Smart TV OS], our TV guarantees regular updates for a constantly evolving and optimized viewing experience."
    },
    {
        id:"14",
        reference: "HNK-03",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv3.webp",
        features:"Transform your living room with our Smart TV's bezel-less design and 8K resolution. Immerse yourself in lifelike visuals and access your favorite content effortlessly with voice control.",
        compatibility:"Connect seamlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV is compatible with a range of devices, offering a versatile entertainment hub for gaming, streaming, and more.",
        updates: "Experience the power of [Smart TV OS], providing a user-friendly interface and access to a wide array of apps. Regular updates ensure your Smart TV stays at the forefront of technology."
    },
    {
        id:"15",
        reference:"HNK-04",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv4.webp",
        features:"Experience cinematic brilliance with our Smart TV's OLED display, offering deep blacks and vibrant colors. Enjoy a smart home integration with voice control and compatibility with leading smart home platforms.",
        compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV seamlessly integrates with gaming consoles, soundbars, and other devices for a complete entertainment setup.",
        updates:"Powered by the latest version of [Smart TV OS], our TV ensures regular updates for enhanced features, improved security, and access to the latest streaming services."
    },
    {
        id:"16",
        reference:"HNK-05",
        category:"SmartTV",
        price: 1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv5.webp",
        features:"Enhance your entertainment experience with our Smart TV's QLED display and adaptive brightness. Navigate through a world of content with the intuitive Smart Hub and enjoy personalized recommendations.",
        compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV is designed to seamlessly integrate with various devices, providing a hassle-free entertainment setup.",
        updates:"Running on the latest version of [Smart TV OS], our TV guarantees regular updates, ensuring continuous improvements, and access to the latest features and apps."
    },
    {
        id:"17",
        reference:"HNK-06",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv6.webp",
        features:"Immerse yourself in a true home theater experience with our Smart TV's Dolby Vision HDR and Dolby Atmos sound. Access your favorite content with ease using voice control and explore a wide range of apps.",
        compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV is compatible with gaming consoles, sound systems, and various devices, offering a versatile entertainment hub.",
        updates:"Experience the seamless interface of [Smart TV OS], with regular updates ensuring your TV is always optimized and ready for the latest streaming services."
    },
    {
        id:"18",
        reference:"HNK-07",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv7.webp",
        features:"Revolutionize your viewing experience with our Smart TV's Mini-LED display technology, providing enhanced contrast and brightness. Access a world of content with the integrated streaming apps and voice-controlled navigation.",
        compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth options. Our Smart TV seamlessly integrates with gaming consoles, soundbars, and more for a complete entertainment solution.",
        updates:"Running on the latest version of [Smart TV OS], our TV ensures regular updates, keeping your Smart TV at the cutting edge of technology with new features and enhanced performance."
    },
    {
        id:"19",
        reference:"HNK-08",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv8.webp",
        features:"Elevate your home entertainment with our Smart TV's Crystal Processor and immersive sound quality. Enjoy a seamless viewing experience with voice-controlled navigation and a user-friendly interface.",
        compatibility:"Connect effortlessly with HDMI, USB, and Bluetooth capabilities. Our Smart TV seamlessly integrates with various devices, offering a versatile entertainment hub for your home.",
        updates:"Experience the latest advancements with [Smart TV OS], providing regular updates for improved features, security, and access to a diverse range of streaming services."
    },
    {
        id:"20",
        reference:"HNK-09",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img: process.env.PUBLIC_URL + "/img/tv9.webp",
        features: "Transform your living room with our Smart TV's sleek design and 4K HDR display. Enjoy hands-free control with built-in voice recognition and explore a vast library of apps with ease.",
        compatibility:"Connect seamlessly with multiple HDMI and USB ports. Our Smart TV is designed for compatibility with gaming consoles, sound systems, and a variety of other devices for a connected entertainment experience.",
        updates:"Powered by the latest version of [Smart TV OS], our TV receives regular updates, ensuring your Smart TV stays up-to-date with new features, security enhancements, and app additions."
    },
    {
        id:"21",
        reference:"HNK-10",
        category:"SmartTV",
        price:1599,
        idCat:"3",
        img:process.env.PUBLIC_URL + "/img/tv10.webp",
        features:"Step into a world of vibrant colors and sharp details with our Smart TV's QLED display. Navigate through a multitude of apps effortlessly with voice control and enjoy a truly personalized entertainment experience.",
        compatibility:"Connect seamlessly with multiple HDMI and USB ports. Our Smart TV is designed for compatibility with gaming consoles, soundbars, and other devices for a complete home entertainment setup.",
        updates:"Running on the latest version of [Smart TV OS], our TV ensures regular updates, keeping your Smart TV optimized and ready for the latest features and streaming services."
    },
    {
        id:"22",
        reference:"XKX-02",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop2.webp",
        features:"Boost your productivity with our laptop's octa-core processor and large 1TB HDD. Immerse yourself in a stunning visual experience on the high-definition display.",
        compatibility:"Connect effortlessly with versatile USB-C ports and stay online with the latest Wi-Fi 6 technology. Experience hassle-free Bluetooth 5.0 connectivity for all your devices.",
        updates:"Built on the foundation of Windows [version], our laptop ensures a familiar and efficient user experience. Regular updates keep your system optimized and secure."
    },
    {
        id:"23",
        reference:"XKX-03",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop3.webp",
        features:"Unleash creativity with our laptop's powerful hexa-core processor and 256GB SSD. Enjoy immersive visuals on the vibrant Full HD display with touchscreen functionality.",
        compatibility:"Connect to peripherals seamlessly with Thunderbolt 4 ports. Stay connected with Wi-Fi 6 technology and transfer files effortlessly with Bluetooth 5.1.",
        updates:"Experience the seamless integration of macOS [version]. Our laptop receives regular updates for performance optimization and the latest features."
    },
    {
        id:"24",
        reference:"XKX-04",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop4.webp",
        features:"Experience smooth multitasking with our laptop's octa-core processor and 512GB SSD storage. Enjoy crisp visuals on the high-resolution display with anti-glare technology.",
        compatibility:"Stay connected with ultra-fast Wi-Fi 6 and versatile USB-C ports. Connect wirelessly to other devices with Bluetooth 5.0 for efficient file sharing.",
        updates: "Run on the latest version of Windows, ensuring a secure and user-friendly computing experience. Automatic updates keep your system running smoothly."
    },
    {
        id:"25",
        reference:"XKX-05",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop5.webp",
        features:"Our laptop excels in performance with its hexa-core processor and generous 1TB HDD. Immerse yourself in stunning visuals on the high-definition display.",
        compatibility:"Connect seamlessly with USB-C and HDMI ports. Stay online with the latest Wi-Fi 6 technology and share effortlessly with Bluetooth 5.0.",
        updates:"Experience the latest features and security enhancements with Windows [version]. Our laptop ensures regular updates for a reliable and secure computing environment."
    },
    {
        id:"26",
        reference:"XKX-06",
        category:"Laptop",
        price:1099 ,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop6.webp",
        features:"Fuel your creativity with our laptop's octa-core processor and 256GB SSD. Immerse yourself in vibrant visuals on the high-resolution display with IPS technology.",
        compatibility:"Connect to a variety of peripherals with USB-C and HDMI ports. Stay connected on the go with Wi-Fi 6 and share files effortlessly with Bluetooth 5.1.",
        updates:"Experience the power of Windows [version]. Our laptop receives regular updates, keeping your system optimized and secure."
    },
    {
        id:"27",
        reference:"XKX-07",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop7.webp",
        features:"Our laptop is a powerhouse with its octa-core processor and lightning-fast 1TB SSD. Enjoy a visual feast on the high-resolution display with a high refresh rate.",
        compatibility:"Connect seamlessly with Thunderbolt 4 ports and stay online with Wi-Fi 6 technology. Experience efficient file transfers with Bluetooth 5.1 connectivity.",
        updates:"Built on the foundation of macOS [version], our laptop ensures a sleek and user-friendly experience. Regular updates keep your system at its best."
    },
    {
        id:"28",
        reference:"XKX-08",
        category:"Laptop",
        price:1099 ,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop8.webp",
        features:"Experience unmatched performance with our laptop's hexa-core processor and 512GB SSD storage. Enjoy a crisp and clear visual experience on the high-definition display.",
        compatibility:"Connect effortlessly with versatile USB-C ports and stay online with Wi-Fi 6 technology. Share files with ease using Bluetooth 5.0 connectivity.",
        updates:"Run on the latest version of Windows, ensuring a secure and efficient computing experience. Automatic updates keep your system optimized and secure."
    },
    {
        id:"29",
        reference:"XKX-09",
        category:"Laptop",
        price:1099,
        idCat:"1",
        img: process.env.PUBLIC_URL + "/img/laptop9.webp",
        features:"Elevate your productivity with our laptop's powerful octa-core processor and expansive 1TB HDD. Immerse yourself in stunning visuals on the high-definition display.",
        compatibility:"Stay connected with versatile USB-C ports and the latest Wi-Fi 6 technology. Connect wirelessly with Bluetooth 5.1 for efficient file sharing.",
        updates:"Experience the latest features and security enhancements with Windows [version]. Our laptop ensures regular updates for a reliable and secure computing environment."
    },
    {
        id:"30",
        reference:"KJN-01",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset3.webp",
        features:"Elevate your music experience with our premium wireless headset. Boasting Hi-Res audio, touch-sensitive controls, and a foldable design for portability, it's the perfect blend of style and functionality.",
        compatibility:"Wirelessly connect via Bluetooth 5.0 and enjoy seamless compatibility with smartphones, tablets, and other Bluetooth-enabled devices. NFC pairing adds a touch of convenience.",
        updates:"Designed to work seamlessly across multiple operating systems, our wireless headset ensures compatibility and receives regular firmware updates for continuous improvement."
    },
    {
        id:"31",
        reference:"KJN-02",
        category:"Headset",
        price:179 ,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset4.webp",
        features:"Immerse yourself in crystal-clear communication with our business-grade headset. Featuring noise-canceling microphones, comfortable padding, and a lightweight design, it's ideal for professional use.",
        compatibility:"Connect easily via USB or 3.5mm audio jack for versatile compatibility with computers, laptops, and other devices. Perfect for business meetings and virtual collaboration.",
        updates:"Engineered for seamless integration with various operating systems, our business headset receives regular updates to enhance compatibility and ensure optimal performance."
    },
    {
        id:"32",
        reference:"KJN-03",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset5.webp",
        features:"Step into the world of virtual reality with our immersive VR headset. Featuring high-resolution displays, 3D spatial audio, and ergonomic design, it delivers an unparalleled VR experience.",
        compatibility:"Connect to your VR system effortlessly with USB and HDMI connections. Designed for compatibility with leading VR platforms, our headset ensures a smooth VR journey.",
        updates:"Compatible with major operating systems, our VR headset receives regular updates to enhance the virtual reality experience and introduce new features."
    },
    {
        id:"33",
        reference:"KJN-04",
        category:"Headset",
        price:179 ,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset6.webp",
        features:"Unleash your inner athlete with our sports-focused wireless headset. Sweat-resistant, secure fit, and customizable EQ settings make it the perfect companion for your active lifestyle.",
        compatibility:"Connect wirelessly via Bluetooth 5.0 for hassle-free workouts. Compatible with most smartphones and fitness devices, our headset is designed to keep up with your active routine.",
        updates:"Compatible with various operating systems, our sports headset receives regular updates to improve performance during workouts and enhance overall user experience."
    },
    {
        id:"34",
        reference:"KJN-05",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset7.webp",
        features:"Immerse yourself in gaming audio perfection with our surround sound gaming headset. Featuring customizable RGB lighting, on-the-fly EQ adjustments, and a comfortable design, it's a gamer's dream.",
        compatibility:"Connect effortlessly with USB and 3.5mm audio jacks. Designed for compatibility with gaming consoles, PCs, and mobile devices for a versatile gaming experience.",
        updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced performance and additional features."
    },
    {
        id:"35",
        reference:"KJN-06",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset8.webp",
        features:"Experience cinematic sound quality with our premium over-ear headphones. Boasting Hi-Res audio, active noise cancellation, and a luxurious design, it's the epitome of audio excellence.",
        compatibility:"Connect wirelessly via Bluetooth 5.1 for an untethered listening experience. Compatible with smartphones, tablets, and other Bluetooth-enabled devices for on-the-go luxury.",
        updates:"Designed for seamless integration with various operating systems, our premium headphones receive regular firmware updates to enhance audio quality and introduce new features."
    },
    {
        id:"36",
        reference:"KJN-07",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset9.webp",
        features:"Elevate your gaming experience with our wireless gaming headset. Featuring low-latency audio, customizable RGB lighting, and a comfortable fit, it's a must-have for avid gamers.",
        compatibility:"Connect wirelessly via 2.4GHz wireless or Bluetooth 5.0 for versatile gaming setups. Compatible with gaming consoles, PCs, and mobile devices for a true gaming ecosystem.",
        updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced gaming performance and added features."
    },
    {
        id:"37",
        reference:"KJN-08",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset2.webp",
        features:"Experience gaming like never before with our high-performance gaming headset. Dynamic surround sound, customizable RGB lighting, and a comfortable fit make it the ultimate gaming accessory.",
        compatibility:"Connect effortlessly with USB and 3.5mm audio jacks. Designed for compatibility with gaming consoles, PCs, and mobile devices for a versatile gaming experience.",
        updates:"Engineered for compatibility with various operating systems, our gaming headset receives regular updates for enhanced performance and additional features."
    },
    {
        id:"38",
        reference:"KJN-09",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset10.webp",
        features:"Immerse yourself in the ultimate audio experience with our premium noise-canceling headphones. Featuring Hi-Res audio, touch-sensitive controls, and a foldable design for portability.",
        compatibility:"Connect wirelessly via Bluetooth 5.1 and enjoy seamless compatibility with smartphones, tablets, and other Bluetooth-enabled devices. NFC pairing adds a touch of convenience.",
        updates:"Designed for seamless integration with various operating systems, our noise-canceling headphones receive regular firmware updates for continuous improvement in audio quality and user experience."
    },
    {
        id:"39",
        reference:"KJN-10",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset11.webp",
        features:"Unleash the true potential of your music with our audiophile-grade wired headphones. Featuring studio-quality sound, premium materials, and a comfortable fit, it's a music lover's delight.",
        compatibility:"Connect via high-quality audio cables for an immersive wired audio experience. Compatible with a wide range of audio devices, our headphones deliver exceptional sound quality.",
        updates:"Designed for compatibility with various operating systems, our audiophile headphones receive regular firmware updates to enhance audio performance and introduce new features."
    },
    {
        id:"40",
        reference:"KJN-11",
        category:"Headset",
        price:179,
        idCat:"4",
        img: process.env.PUBLIC_URL + "/img/headset1.webp",
        features:"Immerse yourself in superior audio quality with our premium headset. Featuring noise-canceling technology, ergonomic design, and customizable sound profiles, it's the perfect companion for audiophiles.",
        compatibility:"Stay connected wirelessly with Bluetooth 5.1. Compatible with a wide range of devices, our headset ensures a seamless connection for both work and play.",
        updates:"Designed for cross-platform compatibility, our headset is ready to enhance your audio experience on any operating system. Firmware updates ensure continuous improvement."
    }
]

// Funcion que me retorne un productos

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 100)
    })
}

// Funcion que me retorne un solo item

export const getOneProduct = (id) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const product = products.find(product => product.id === id);
            resolve(product);
        }, 100)
    })
}

// Funcion que retorne toda la categoria

export const getProductsByCategory = (idCategory) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const productsCategory = products.filter(product => product.idCat === idCategory);
            resolve(productsCategory);
        }, 100)
    })
}
