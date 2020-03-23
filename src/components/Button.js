import styled from 'styled-components'


export const ButtonComponent=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
border-radius:0.5 0.5 0.3 0.3;
&:hover{
  background:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
`
