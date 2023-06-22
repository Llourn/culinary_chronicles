import React from "react";
import { SlButton} from '@shoelace-style/shoelace/dist/react';

const Button = (props) =>{
  return (
    <>
      <SlButton  variant={props.variant} style={props.style} onClick={props.handleClick} size={props.size} href={props.href} outline> {props.children} </SlButton>
    </> 
  );
};

export default Button ;

// const Button = ({btnLabel, variant, style, size, onClick, href}) =>{
//   return (
//     <>
//       <SlButton  variant={variant} style={style} onClick={onClick} size={size} href={href} outline> {btnLabel}</SlButton>
//     </> 
//   );
// };
// function Button(props){
//   const myClass = `button ${props.type}`
//   return(
//   <button className={myClass} onClick={props.handleClick}>{props.children}</button>
//   )
//   }

