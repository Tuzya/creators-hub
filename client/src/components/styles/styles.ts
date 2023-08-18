export const buttonStyle = {
  borderColor: '#FCA311',
  color: 'white',
  '&:hover': {
    backgroundColor: '#c0c4cc',
    borderColor: '#c0c4cc',
  },
};
export const textFieldStyle = {
  marginTop: '15px',
  '& label.Mui-focused': {
    color: '#2E3B55',
    fontFamily: 'Robot',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2E3B55',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#FCA311',
    },
  },
};
export const linkStyle = { color: 'white', mr: 2, textDecoration: 'none' };
export const postListPaperStyles = {
  backgroundColor: '#2E3B55',
  minHeight: '80vh',
  borderRadius: 5,
};
export const postFormGridStyles = {
  backgroundColor: '#eaebee',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
};
export const authTextFieldStyle = {
  '& label.Mui-focused': {
    color: '#2E3B55',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2E3B55',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#2E3B55',
    },
  },
  my: 3,
  minWidth: 280,
};
export const cardStyle = {
  minWidth: 263,
  maxWidth: 355,
  minHeight: 280,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
