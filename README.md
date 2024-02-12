#Tekni
![image](https://github.com/DIGORACCOON4279/Tekni/assets/88150970/29ab3c95-9056-4208-97b2-26a3024917c5)</br>

********************************************************************************************************************************************************************************
# Iniciativa</br>

Este proyecto de ecommerce ficticio llamado " Tekni "  -- venta de dispositivos electronicos --  fue escogido para trabajar durante la cursada de React. 
Se realizaran dos preentregas y la entrega final a medida que se vaya realizando las consignas de cada entrega para moldear el proyecto segun los objetivos del curso.</br>

👉 Herramientas que se utilizaran durante el desarrollo del proyecto: 🛠 </br>

![figma](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/fca318c0-6b7d-4046-b0aa-55a83f0419a3) Figma</br>
![animations](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/2fdc31da-eb29-4247-90d3-0b5727606aa7) Animations CSS (@keyframes & transitions)</br>
![photopea](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/ceac05f4-c505-4889-85d0-60a1566fc4ef) Photopea</br>
![github](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/01f94f79-8e78-42f8-bc9a-2b6707a9a36d) Github</br>
![gitbash](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/3d2e83ec-bea3-47bf-a5a4-d9524e0406b0) Git Bash </br>
![nodejs](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/1944cc14-d0b8-43f7-b859-7f15025239c0) NodeJS </br>
![npm](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/e703b698-4589-43d5-b5ba-2a75693a3691) npm &</br>
![vsc](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/bd61bcc5-5a44-4c33-b675-d03bb01589c0) VSC</br>

👉 Lenguajes, preprocesador, library & framework que se utilizaran durante el desarrollo del proyecto: 🛠</br>

![css](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/b2e2f475-b8d9-4188-aae4-fe7e9a7acf4a)CSS (Lenguaje de estilos)</br>
![html](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/b0692228-5ca9-433d-a4c5-b52369d3c4bf)HTML (Lenguaje de marcado y estructura)</br>
![js](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/1ef7c489-c0b4-41a6-bdce-b12d8c0654ad)JavaScript (Lenguage de programación)</br>
![react](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/af7de6da-ad17-45c7-95a6-3ef1e3c5f730) React (Library)</br>
![vite](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/f9c38eca-b09c-4f34-84a4-6e7d8ae983f0)Vite</br>
![firebase](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/9646a3cf-f814-482a-adad-d8e928df9b8c)Firebase(BD)</br>

Aunque no es necesario ni evaluativo, pero realizo un mockup en figma para tener mejor entendimiento de lo que se quiere lograr:</br>

💻[Prototipo desktop](https://www.figma.com/proto/uP83VlEVIz4hmSboxjuN2F/Tekny?page-id=2%3A10&type=design&node-id=57-589&viewport=-2255%2C1269%2C0.28&t=2HOa7ebSJPJxV5wp-1&scaling=scale-down&starting-point-node-id=57%3A589&mode=design)</br>
🚧I´m so sorry📱Cellphone (man at work)</br>

# Desarrollo</br>

En esta entrega final se avanza en la estructura y programacion del proyecto ecommerce -- Tekni -- despues de realizar la navbar, cartWidget & un greeting en ItemListcontainer explico en mas detalle como ejecuto esta entrega y puntos adicionales al proyecto: </br>

>> ** Se cumple con la consigna de realizar routing & navegacion</br>
>>    ✔Navbar con cart</br>
>>    ✔Catálogo</br>
>>    ✔Detalle de producto</br>
>> ** La app contiene landing page, Error404, catalogo, descripcion por producto, 4 categorias, shoppingCart, oreder summary & menu con 5 secciones.</br>
>> ** Todas las secciones y pages son navegables y las que no te dirigen a la pagina de Error404 con opcion de regresar a home </br>
>> ** La navbar cuenta con: logo, shoppingCart & menu desplegable.</br>
>> ** El menu desplegable cuenta con 5 secciones home, products, categories, services & contact us</br>
>> ** Detallo que al realizar una secccion categories con 4 opciones: smartphones, laptops, headset & smartTVs </br>
>> ** Se realiza la seccion de descripcion de cada producto con:</br>
>>     ✔Key Features</br>
>>     ✔Connectivity and Compatibility</br>
>>     ✔Operating System and Updates</br>
>>     ✔Con su respectivo precio, rating, stock, & add to cart</br>
>> ** Cada cart de los productos explica su categoria, id, precio, imagen, referencia & rating y boton "View product..."</br>
>> ** En el footer estan las redes sociales y varios links para tambien navegar entre categories y products, a las opciones sin relevancia se
>>    le asignaron un routing a la page Error404.</br>
>> ** Se crea deja de usar el file asyncmock para utilizar Firebase para guardar un array d de objetos llamado "products", el cual contiene 40 productos</br>
>> ** Se crea el file .env para guardar la respetiva IP_KEY</br>
>> ** Se crea el file context donde se ubica la logica en un archivo llamado cartContext.jsx</br>
>> ** Se crea el file servoces para guardar la informacion de la respectiva informacion API para usar Firebase y manipular el array products y orders</br>
>> ** En Firebase se crean fuera del array de products otro con respecto a manipular las ordenes de compra llamado "orders"que expide un id para al terminar la compra el usuario como >>    confirmacion</br>
>> ** Se crearon 35 componentes en React</br>
>> ** Aunque no se pide en las consignas pero se realiza el SEO</br>
>> ** Se uyilizo sweetAleert2 para crear el popup final de confirmacion de compra con su orden</br>


A continuacion muestro algunas imagenes del proyecto </br>

✔** Order Summary</br>
![image](https://github.com/DIGORACCOON4279/Tekni/assets/88150970/7f3e0e32-93d7-460e-a496-9dbd1b62024e)</br>

✔** Category Products</br>
![image](https://github.com/DIGORACCOON4279/Tekni/assets/88150970/4993de0a-d0e6-4f6e-ba43-ffeaa5ba27c7)</br>

✔** ShoppingCart</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/7ef6e26b-0276-459f-b1cd-0c916b80588b)</br>

✔** DetailsContainer</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/274d2ba9-046d-44d3-87ae-4d3ff88e2de0)</br>

✔** Error404 Page</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/9ac080f1-c52d-4aab-adfe-f443b4a0f27e)</br>

🚧I´m so sorry📱Cellphone (man at work)</br>

En esta entrega final se pide ya tener listo y realizar:</br>

** ✔ --NavBar</br>
** ✔ --CartWidget</br>
** ✔ --Item</br>
** ✔ --ItemList</br>
** ✔ --ItemListContainer</br>
** ✔ --ItemDetail</br>
** ✔ --ItemDetailContainer</br>
** ✔ --Firebase(Products: Array de objetos con 40 produtos)</br>
** ✔ --Firebase(Orders)</br>
** ✔ --.env</br>
** ✔ --context/CartContext.jsx</br>
** ✔ --services/config.js</br>

La estructura a trabajar en los componentes src es crea una carpeta principal llamada components y se derivan los componentes antes nombrados con su respectivo archivos file.jsx & file.css por cada componente.</br>

src/</br>
|-- components/</br>
|   |-- Advantages/</br>
|   |   |-- Advantages.jsx</br>
|   |   |-- Advantages.css</br>
|   |-- AdvantagesTwo/</br>
|   |-- Advertising/</br>
|   |-- ArrowUp/</br>
|   |-- Body/</br>
|   |-- CartItem/</br>
|   |-- CartWidget/</br>
|   |-- CategorySections/</br>
|   |-- Checkout/</br>
|   |-- ContactUs/</br>
|   |-- ContactUsPage/</br>
|   |-- Counter/</br>
|   |-- Error404/</br>
|   |-- Footer/</br>
|   |-- Headset/</br>
|   |-- HeroSection/</br>
|   |-- Home/</br>
|   |-- IconsMenu/</br>
|   |-- Item/</br>
|   |-- ItemDetail/</br>
|   |-- ItemDetailContainer/</br>
|   |-- ItemList/</br>
|   |-- ItemListContainer/</br>
|   |-- Laptops/</br>
|   |-- Menu/</br>
|   |-- NavBar/</br>
|   |-- NewGeneration/</br>
|   |-- SectionAdvantagesThree/</br>
|   |-- Services/</br>
|   |-- ServicesPage/</br>
|   |-- ShoppingCart/</br>
|   |-- Smartphone/</br>
|   |-- SmartTvs/</br>
|   |-- TheBestSellers/</br>
|   |-- WhiteLine/</br>
|-- context</br>
    |-- CartContext.jsx/</br>
|-- services</br>
    |-- config.js/</br>
|-- App.jsx</br>
|-- main.jsx</br>

# Deployment</br>
Po ultimo se realizo su respectivo deployment en Netlify llamandose tekniapp.netlify.app/

🚀-- ![color_Netlify](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/90470fa3-b09f-4478-b1e3-02882d2d49a1) -- [Netlify](https://tekniapp.netlify.app)</br>


![raccon_Logo1](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/1903b752-acc7-4d2b-95db-cf877319fcb7)</br>

# React + Vite</br>
primera-entrega-tekni.vercel.app
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.</br>

Currently, two official plugins are available:</br>

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh</br>
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh</br>

  
