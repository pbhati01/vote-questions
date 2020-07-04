export default (({ breakpoints: { desktop }, fontFamily}) => ({
  addQuestionContainer: {
    fontFamily: fontFamily,
    fontSize: 14,
    color: '#072F5F',
    padding: 10,
    display: 'flex',
    maxWidth: '690px',
    flexDirection: 'column',
    '& h2': {
      color: '#bcb7b7',
      fontWeight: 'normal',
    },
    '& div': {
      marginBottom: 10,
    },
    '& table': {
      marginTop: 15,
      marginBottom: 15,
      '& tbody': {
        '& tr': {
          justifyContent: 'left',
          '& td': {
            padding: 10,
            textAlign: 'left',
            borderTop: 'none',
          },
          '& td:first-child': {
            width: 90,
            paddingLeft: 0,
          },
        },
      }
    },
  },
  actionBtn: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  [`@media (min-width: ${desktop}px)`]: {
      
  },
}));