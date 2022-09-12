module.exports = {
  mode: 'jit',
  purge: [
      './templates/**/*.twig',
      './templates/partials/**/*.twig',
      './templates/partials/*.twig'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000000',
      hoverBg: '#e6e6e6',
      copy: '#2F2F2F',
      lightGrey: '#7E7E7E',
      white: '#FFFFFF',
      lightBg: '#FAFAFA',
      borderGrey: '#DEDEDE',
      htq_blue: '#184377',
      htq_lightBlue: '#E3F5FD',
      htq_teal: '#007196',
      htq_mid_teal: '#0094BB',
      search_bg: '#26568F',
      htq_orange: '#F79421',
      htq_mid_orange: '#FBB261',
      htq_soft_yellow: '#FFD868',
      htq_green: '#008566',
      htq_mid_green: '#1CB079',
      htq_sky: '#8DD7F7',
      htq_lime: '#B6DCAE',
      blockquote_bg: '#4090B6',

      loop_1: '#184377',
      loop_2: '#126894',
      loop_3: '#0193BA',

      loop_4: '#076472',
      loop_5: '#0C7A92',
      loop_6: '#10A29C',

      loop_7: '#008566',
      loop_8: '#0D996F',
      loop_9: '#19B079',

      loop_10: '#C88434',
      loop_11: '#E98919',
      loop_12: '#F89521',
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['15px', '24px'],
      md: ['20px', '30px'],
      lg: ['38px', '53px'],
      xl: ['45px', '53px'],
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      fill: ['hover', 'focus', 'group-hover'],
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
