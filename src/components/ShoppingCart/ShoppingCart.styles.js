import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  wrapper:{
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: 380,
    maxHeight: 1010,
    marginLeft: '1em',
    userSelect: 'none',
  },
  shoppingCartFooter: {
    width:'100%',
    minHeight: 240,
    backgroundColor: '#fff',
    marginTop: '1em',
    borderRadius: '4px 4px 0 0'
  },
  shoppingCartBody: {
    width:'100%',
    height: 696,
    maxHeight: 696,
    backgroundColor: '#fff',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  shoppingCartHeader: {
    borderRadius: ' 0 0 4px 4px',
    marginBottom: '1em',
    width: '100%',
    zIndex: 1,
    minHeight: 74,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& h4': {
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      marginLeft: '.6em',
    }
  },
  shoppingCartAmountModal: {
    position: 'absolute',
    left: '50%',
    bottom: '50%',
    transform: 'translate(-50%, 50%)',
    width: 400,
    height: 200,
    zIndex: 1,
    outline: 'none'
  },
  amounUpdateWrapper:{
    width: 318,
    textAlign: 'center',
  },
  modalImage: {
    width: 84,
    margin: '0 auto',
    display: 'block',
    '-webkit-user-drag': 'none',
    '-khtml-user-drag': 'none',
    '-moz-user-drag': 'none',
    '-o-user-drag': 'none',
    'user-drag': 'none',
    userSelect: 'none',
  },
  amountUpdate: {
    userSelect: 'none',
  },
  amountUpdateActionsWrapper:{
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '8px 18px',
  },
  amountControlWrapper: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0 !important',
  },
  amountSubmitButton: {
    flexGrow: 1,
    display: 'flex',
    marginRight: '0 !important',
    justifyContent: 'space-around',
    backgroundColor: '#313030',
    padding: '6px 13px',
    '&:hover': {
      backgroundColor: '#1d1d1d',
    }
  },
  customDivider: {
    width: '100%',
    borderTop: '1px solid #cecece',
    marginBottom: 8,
  }
})