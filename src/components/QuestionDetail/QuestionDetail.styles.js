export default (({ breakpoints: { desktop }, fontFamily}) => ({
  questionDetailsContainer: {
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
    '& h3': {
      marginTop: 0,
    },
    '& table': {
      marginBottom: 15,
      '& tbody': {
        '& tr': {
          border: 'solid 1px #e3e3e3',
          '& td': {
            textAlign: 'center',
            padding: 10,
            borderTop: 'none',
          },
          '& td:first-child': {
            justifyContent: 'left',
          },
        },
        '& tr:nth-child(odd)': {
          backgroundColor: '#fff',
        },
        '& tr:nth-child(even)': {
          backgroundColor: '#eeebeb70',
        }, 
      }
    },
  },
  actionBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& button': {
      // width: 80,
    }
  },

  [`@media (min-width: ${desktop}px)`]: {
      
  },
}));