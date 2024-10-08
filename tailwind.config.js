/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1290px",
      },
    },
    extend: {
      fontFamily: {
        'PlusJakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        '2.5xl':'22px',
        '3xl': '24px',
        '3.5xl': '26px',
        '28xl':'28px',
        '4xl': '30px',
        '4.5xl':'34px',
        '36xl':'36px',
        '5xl':'40px',
        '38xl':'38px',
        '5.5xl':'44px',
        '6xl':'50px',
        '6.5xl':'58px',
        '7xl': '60px',
        '7.5xl':'64px',
        '8xl':'68px',
        '9xl': '90px',
      },
      lineHeight: {
        '8': '30px',
        '10':'32px',
        '11':'38px',
        '12':'40px',
        '13':'44px',
        '14':'50px',
        '15':'54px',
        '18':'60px',
        '19':'68px',
        '20':'78px',
      },
      spacing:{
        '4.5':'18px',
        '370':'370px',
        '410':'410px',
        '418':'418px',
        '452':'452px',
        '475':'475px',
        '550':'550px',
        '565':'565px',
        '570':'570px',
        '630': '630px',
        '749':'749px',
        '850':'850px',
        '1380':'1380px'
      },
      borderRadius: {
        '24':'24px',
        '30':'30px',
        '80':'80px',
        '100':'100px'
      },
      colors: {
        mainBg:'#F7F7F7',
        primaryColor:'#151617',
        secondaryColor:'#47474A',
        bg:'#15113B',
        cardBg:'rgba(22, 22, 23, 0.03)',
        box1:'#927EFF',
        box2:'#38E9AA',
        box3:'#1C75E0',
        spanBg:'#FFFF1E',
        BtnBg:'#15123A',
        signBg:'#232039',
        textColor:'rgba(255, 255, 255, 0.7)',
        divided:'rgba(255, 255, 255, 0.2)',
        transparentColor:'#FFFFFF1A',
        lightGray:'rgba(22, 22, 23, 0.06)',
        border:'#D9D9D9',
        lightBlue:'#1C75E0',
      },
      boxShadow: {
        'box': '0px 20px 90px 0px #15161712',
      },
      backgroundImage: {
        'bgBanner': "url('/assets/img/homePage/banner-line.svg')",
        'bgCard':"url('/assets/img/homePage/testimonial-bg.jpeg')",
        'gradient':"linear-gradient(175.85deg, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 59.77%)",
      },
    },
  },
  plugins: [],
}
