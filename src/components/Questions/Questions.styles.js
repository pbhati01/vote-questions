export default (({ breakpoints: { desktop }, fontFamily}) => ({
  questionsContainer: {
    fontFamily: fontFamily,
    fontSize: 14,
    color: '#072F5F',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    '& h2': {
      color: '#bcb7b7',
      fontWeight: 'normal',
    },
    '& table': {
      borderSpacing: 0,
      '& tbody': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& tr': {
          border: 'solid 1px #e7dfdf',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 10,
          cursor: 'pointer',
          '& td': {
            padding: 10,
            borderTop: 'none',
          },
          '& td:first-child': {
            fontWeight: 'bold',
            backgroundColor: '#e3e3e3',
          }
        }
      }
    }
  },
  actionBtn: {
    marginBottom: 15,
    '& button': {
      // width: 80,
    }
  },

  [`@media (min-width: ${desktop}px)`]: {
    questionsContainer: {
      '& table': {
        maxWidth: 850,
        '& tbody': {
          flexDirection: 'row',
          '& tr': {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 200,
            marginRight: 10,
          }
        }
      }
    },
  }
}));
