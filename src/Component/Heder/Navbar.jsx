import React, { useState } from "react";
import { AppBar,Tabs, Tab, Toolbar, Button, useTheme, useMediaQuery, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerCo from './DrawerCo'

const PAGES = ["Home","Cart"]
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme()

  // console.log(theme);

  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch);

  return (
    <>

      <AppBar sx={{backgroundColor:"#063970"}}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {
            isMatch ? (
            <>
            <Typography sx={{fontSize:'1.5'}}>SHOPEE</Typography>
              <DrawerCo />
            </>
            ) : (
         <>

          <Tabs sx={{marginLeft:'auto'}} textColor= 'inherit' value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
         {
          PAGES.map((elem,ind)=>{
           return <Tab key={ind} label={elem}></Tab>
          })
         }

          
         
          </Tabs>
          <Button variant="contained" sx={{marginLeft:'auto'}}>Login</Button>
          <Button variant="contained" sx={{marginLeft:'10px'}}>SignUp</Button>
          </>
          )
          }
        </Toolbar>
        
       
      </AppBar>
    </>
  );
};

export default Navbar;
