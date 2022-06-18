import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import { useMediaQuery,useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import DrawerComponent from './DrawerComponent';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Header = () => {
const theme = useTheme();
console.log(theme);
const ismatch = useMediaQuery(theme.breakpoints.down('md'));
console.log(ismatch);
    return(
        <React.Fragment>
            <AppBar sx ={{background: '#063970'}}>
            <Toolbar sx={{marginLeft:'50px'}}>
                {
                    ismatch? (
                        <>
                        <Typography fontSize={20}>Sangathan &ensp;</Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <DrawerComponent/>

                        </>
                    ) : (
                        <>
                        <Typography fontSize={10}>logo &ensp;&ensp;</Typography>
                        <Typography fontSize={28}>Sangathan.</Typography>
                        <Button sx={{marginLeft:'auto'}}variant='contained'>Login {' '}</Button>
                        <Button sx={{marginLeft:'20px',marginRight:'20px'}}variant='contained'>Signup {' '}</Button>
                    <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  </>
                    )
            }
            </Toolbar>
            {/* <DrawerComponent/> */}
            </AppBar>
        </React.Fragment>
    )
}
export default Header;