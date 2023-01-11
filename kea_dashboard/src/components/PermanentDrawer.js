// import React from 'react';
// import { makeStyles } from '@mui/core/styles';
// import Drawer from '@mui/core/Drawer';
// import List from '@mui/core/List';
// import ListItem from '@mui/core/ListItem';
// import ListItemText from '@mui/core/ListItemText';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
// });

// export default function LeftSidebar() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <React.Fragment key={'left'}>
//         <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
//           {sideList('left')}
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// }
